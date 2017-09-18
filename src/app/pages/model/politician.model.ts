
export class PoliticianModel {

  id: string;
  person_id: String;
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
  imageUrl: String;
  count: Number;
  twitterName: String;
  twitterId: String;

  constructor() { }

  public mapJsonToPolitican(json) {
    let p = new PoliticianModel();
    p.id = json.id;
    p.person_id = json.number;
    p.firstName = json.firstName;
    p.firstLastName = json.firstName + " " + json.lastName;
    p.lastName = json.lastname;
    p.canton = json.canton;
    p.council = json.council;
    p.party = json.party;
    p.dateOfBirth = this.stringEmpty(json.birthDate);
    p.job = this.stringEmpty(json.professions);
    p.address = this.stringEmpty(json.contact.addressLine);
    p.email = this.stringEmpty(json.contact.emailWork);
    p.webpage = this.stringEmpty(json.contact.homepageWork);
    p.imageUrl = "https://www.parlament.ch/sitecollectionimages/profil/portrait-260/" + json.number + ".jpg";
    return p;
  }

  public stringEmpty(str)
  {
      if (typeof str == 'undefined' || !str || str.length === 0 || str === "")
          return "-";
      else
          return str;
  }
}
