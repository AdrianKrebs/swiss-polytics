import { Injectable } from '@angular/core';
import { RawMention } from '../../../model/rawmention.model';
import { TableData } from './tableData';
import * as moment from 'moment';
import * as R from 'ramda';

@Injectable()
export class MentionsTransformerService {
  private readonly amountOfDays: number = 30;

  constructor() { }

  orderedSumPerDay(mentions: RawMention[]): TableData[] {
    const today: Date = new Date();
    const resultMap: Map<number, number> = this.createEmptyTableData(today);
    for (const mention of mentions) {
      this.incrementMentionForDay(resultMap, new Date(mention.createdAt));
    }
    return this.convertMapToOrderedArray(resultMap);
  }

  convertMapToOrderedArray(resultMap: Map<number, number>): TableData[] {
    const result: TableData[] = [];
    resultMap.forEach((value, key) => result.push(new TableData(new Date(key), value)));
    R.sort((a, b) => a.date.valueOf() - b.date.valueOf(), result);
    return result;
  }

  createEmptyTableData(today: Date): Map<number, number> {
    const result: Map<number, number> = new Map();
    for (let day = this.amountOfDays; day > 0; day--) {
      const aDate = moment(today).add(-day, 'days');
       result.set(this.truncateDateToDate(aDate.toDate()).valueOf(), 0);
    }
    return result;
  }

  truncateDateToDate(date: Date): Date {
    return new Date(date.getFullYear(), date.getMonth(), date.getDate());
  }

  incrementMentionForDay(resultMap: Map<number, number>, date: Date) {
      const time: number = this.truncateDateToDate(date).valueOf();
      const mentions: number = resultMap.get(time);
      resultMap.set(time, mentions + 1);
  }
}
