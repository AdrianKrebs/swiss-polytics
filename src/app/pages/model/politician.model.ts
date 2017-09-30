export class PoliticianModel {

  id: string;
  personId: Number;
  council: String;
  firstName: String;
  lastName: String;
  firstLastName: String;
  dateOfBirth: String;
  canton: String;
  job: String;
  party: String;
  address: String;
  email: String;
  webpage: String;
  webpageUrl: String;
  imageUrl: String;
  count: Number;
  twitterName: String;
  twitterId: String;

  constructor() {
  }

  public mapJsonToPolitican(json) {
    const p = new PoliticianModel();
    p.id = json.id;
    p.personId = json.number;
    p.firstName = json.firstName;
    p.firstLastName = json.firstName + ' ' + json.lastName;
    p.lastName = json.lastname;
    p.canton = json.canton;
    p.council = this.mapCouncil(json.council);
    p.party = json.party;
    p.dateOfBirth = this.mapDate(json.birthDate);
    p.job = this.mapStringEmpty(json.professions);
    p.address = this.mapStringEmpty(json.contact.addressLine);
    p.email = this.mapStringEmpty(json.contact.emailWork);
    p.webpage = this.mapStringEmpty(json.contact.homepageWork);
    p.webpageUrl = this.mapWebpageUrl(json.contact.homepageWork);
    p.imageUrl = 'https://www.parlament.ch/sitecollectionimages/profil/portrait-260/' + json.number + '.jpg';
    return p;
  }

  public mapStringEmpty(str) {
    if (typeof str === 'undefined' || !str || str.length === 0 || str === '') {
      return '-';
    }
    return str;

  }

  public mapCouncil(str) {
    if (str === 'N') {
      return 'Nationalrat';
    }
    if (str === 'S') {
      return 'Ständerat';
    }
    if (str === 'B') {
      return 'Bundesrat';
    }
    return '-'
  }

  public mapDate(str) {
    // var t = dateTime.Now.ToString(str)
    if (typeof str === 'undefined' || !str || str.length === 0 || str === '') {
      return '-';
    }
    return new Date(str).toLocaleDateString();

  }

  public mapWebpageUrl(str) {
    if (typeof str === 'undefined' || !str || str.length === 0 || str === '') {
      return '-';
    }
    return 'http://' + str;

  }
}
