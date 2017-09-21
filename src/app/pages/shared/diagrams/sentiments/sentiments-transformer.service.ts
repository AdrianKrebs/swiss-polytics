import { Injectable } from '@angular/core';
import * as R from 'ramda';
import { RawSentiment } from '../../../model/rawsentiment.model';
import { TableData } from './tableData';
import { TruncateDate } from '../truncateDate';
import * as moment from 'moment';

class Values {
  positive: number[] = [];
  negative: number[] = [];
}

@Injectable()
export class SentimentsTransformerService {
  private readonly amountOfDays: number = 30;
  private readonly truncateDate: TruncateDate = new TruncateDate();

  constructor() { }

  orderedSumPerDay(rawSentiments: RawSentiment[]): TableData[] {
    const today: Date = new Date();
    const resultMap: Map<number, Values> = this.createEmptyTableData(today);
    for (const sentiment of rawSentiments) {
      this.addSentimentValueToDay(resultMap, sentiment);
    }
    return this.convertMapToOrderedArray(resultMap);
  }

  private convertMapToOrderedArray(resultMap: Map<number, Values>): TableData[] {
    const result: TableData[] = [];
    resultMap.forEach((value, key) =>
      result.push(new TableData(new Date(key), R.mean(value.positive), R.mean(value.negative))));
    R.sort((a, b) => a.date.valueOf() - b.date.valueOf(), result);
    return result;
  }

  private createEmptyTableData(today: Date): Map<number, Values> {
    const result: Map<number, Values> = new Map();
    for (let day = this.amountOfDays; day > 0; day--) {
      const aDate = moment(today).add(-day, 'days');
      result.set(this.truncateDate.truncateDateToDate(aDate.toDate()).valueOf(), new Values());
    }
    return result;
  }

  private addSentimentValueToDay(resultMap: Map<number, Values>, sentiment: RawSentiment) {
    const time: number = this.truncateDate.truncateDateToDate(sentiment.createdAt).valueOf();
    const mapEntry: Values = resultMap.get(time);
    if (mapEntry) {
      if (sentiment.sentimentLabel === 'positive') {
        mapEntry.positive.push(sentiment.sentimentScore);
      } else if (sentiment.sentimentLabel === 'negative') {
        mapEntry.negative.push(sentiment.sentimentScore);
      }
    }
  }
}

