import {QueryBuilder} from '../services/queryBuilder';

export class QueryHelper {
  private queryBuilder: QueryBuilder = new QueryBuilder();

  createQueryString(party: string, politicianId: string) {
    if (party) {
      return this.queryBuilder.queryFromPartyName(party);
    } else if (politicianId) {
      return this.queryBuilder.queryFromPoliticianId(politicianId);
    } else {
      return '';
    }
  }
}
