import { TestBed, inject } from '@angular/core/testing';

import { MentionsTransformerService } from './mentions-transformer.service';
import { Observable } from 'rxjs/Observable';
import { TableData } from './tableData';
import 'rxjs/add/observable/from';
import { RawMention } from '../../../model/rawmention.model';

fdescribe('MentionsTransformerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MentionsTransformerService]
    });
  });

  it('should be created', inject([MentionsTransformerService], (service: MentionsTransformerService) => {
    expect(service).toBeTruthy();
  }));

  it('return an empty Array', inject([MentionsTransformerService], (service: MentionsTransformerService) => {
    const result: TableData[] = service.orderedSumPerDay([]);
    expect(result.length === 0).toBeTruthy();
  }));

  fit('return an Array with result entries', inject([MentionsTransformerService],
    (service: MentionsTransformerService) => {
    const lastDay: Date = new Date();
    lastDay.setDate(- 1);
    const secondLastDay: Date = new Date();
    secondLastDay.setDate(- 2);
    const thirdLastDay: Date = new Date();
    thirdLastDay.setDate(- 3);
    // lastDay = 5, secondLastDay = 4, thirdLastDay = 3
    const input: RawMention[] = [
      new RawMention('foo', 'bar', lastDay),
      new RawMention('foo', 'bar', secondLastDay),
      new RawMention('foo', 'bar', thirdLastDay),
      new RawMention('foo', 'bar', thirdLastDay),
      new RawMention('foo', 'bar', lastDay),
      new RawMention('foo', 'bar', secondLastDay),
      new RawMention('foo', 'bar', lastDay),
      new RawMention('foo', 'bar', secondLastDay),
      new RawMention('foo', 'bar', thirdLastDay),
      new RawMention('foo', 'bar', lastDay),
      new RawMention('foo', 'bar', lastDay),
      new RawMention('foo', 'bar', secondLastDay),
    ];
    const result: TableData[] = service.orderedSumPerDay(input);
    expect(result.length === 30).toBeTruthy();
    global.console.log(`Last: ${lastDay}, ${JSON.stringify(result[29])}`);
    expect(result[29].value === 5).toBeTruthy();
    expect(result[29].date.valueOf() === service.truncateDateToDate(lastDay).valueOf()).toBeTruthy();
    expect(result[28].value === 4).toBeTruthy();
    expect(result[28].date.valueOf() === service.truncateDateToDate(secondLastDay).valueOf()).toBeTruthy();
    expect(result[27].value === 3).toBeTruthy();
    expect(result[27].date.valueOf() === service.truncateDateToDate(thirdLastDay).valueOf()).toBeTruthy();
  }));

  it('return a Map with 30 entries', inject([MentionsTransformerService], (service: MentionsTransformerService) => {
    const result = service.createEmptyTableData(new Date());
    expect(result.size === 30).toBeTruthy();
  }));

  it('return an Array from a Map with 2 entries', inject([MentionsTransformerService],
    (service: MentionsTransformerService) => {
    const map: Map<number, number> = new Map();
    const first: number = new Date().valueOf();
    map.set(first, 1);
    map.set(first + 1, 2);
    const result: TableData[] = service.convertMapToOrderedArray(map);
    expect(result.length === 2).toBeTruthy();
    expect(result[0].value === 1).toBeTruthy();
  }));

  it('return a truncated date', inject([MentionsTransformerService], (service: MentionsTransformerService) => {
    const first: Date = new Date();
    const second: Date = new Date(first.valueOf() + 1);
    global.console.log(`Dates are, first: ${first.valueOf()}, second: ${second.valueOf()}`);
    expect(first.valueOf() === second.valueOf()).toBeFalsy();
    const tFirst = service.truncateDateToDate(first);
    const tSecond = service.truncateDateToDate(second);
    global.console.log(`Dates are, first: ${tFirst.valueOf()}, second: ${tSecond.valueOf()}`);
    expect(tFirst.valueOf() === tSecond.valueOf()).toBeTruthy();
  }));

  it('increment the count for a given day', inject([MentionsTransformerService],
    (service: MentionsTransformerService) => {
    const map: Map<number, number> = new Map();
    map.set(service.truncateDateToDate(new Date()).valueOf(), 0);
    service.incrementMentionForDay(map, new Date());
    expect(map.size === 1).toBeTruthy();
  }));
});
