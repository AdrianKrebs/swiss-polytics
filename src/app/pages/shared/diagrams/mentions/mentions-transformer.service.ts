import { Injectable } from '@angular/core';
import { RawMention } from '../../../model/rawmention.model';
import { TableData } from '../tableData';

@Injectable()
export class MentionsTransformerService {
  private readonly amountOfDays: number = 30;

  constructor() { }

  orderedSumPerDay(mentions: RawMention[]): TableData[] {
    const today: Date = new Date();
    const resultMap: Map<number, number> = this.createEmptyTableData(today);
    for (const mention of mentions) {
      this.incrementMentionForDay(resultMap, mention.createdAt);
    }
    const result: TableData[] = this.convertMapToOrderedArray(resultMap);
    return result;
  }

  convertMapToOrderedArray(resultMap: Map<number, number>): TableData[] {
    const result: TableData[] = [];
    resultMap.forEach((value, key) => result.push(new TableData(new Date(key), value)));
    result.sort((a, b) => {
      if (a < b) {
        return -1;
      } else if (a > b) {
        return 1;
      } else {
        return 0;
      }
    });
    return result;
  }

  createEmptyTableData(today: Date): Map<number, number> {
    const result: Map<number, number> = new Map();
    for (let day = this.amountOfDays; day > 0; day--) {
      const aDate = new Date(today.getFullYear(), today.getMonth(), today.getDate());
      aDate.setDate(- day);
      result.set(aDate.valueOf(), 0);
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
