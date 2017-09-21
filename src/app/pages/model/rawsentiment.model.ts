export class RawSentiment {
  constructor(
    readonly twitterUserId: string,
    readonly sentimentLabel: string,
    readonly sentimentScore: number,
    readonly createdAt: Date) {}
}
