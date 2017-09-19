export class PartyModel {
  public faction: number;

  constructor(public name: string) {
    this.faction = FACTIONS[name];
  }
}


export const FACTIONS = {
  "SVP": 4,
  "SP": 2,
  "CVP": 3,
  "FDP": 1,
  "GLP": 137,
  "GPS": 6,
  "BDP": 136
};
