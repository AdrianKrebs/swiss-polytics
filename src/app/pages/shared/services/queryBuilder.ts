export class QueryBuilder {
  constructor() {}

  queryFromPoliticianId(politicianId: string): string {
    return `?politicianId=${politicianId}`;
  }

  queryFromPartyName(party: string): string {
    return `?party=${party}`;
  }
}
