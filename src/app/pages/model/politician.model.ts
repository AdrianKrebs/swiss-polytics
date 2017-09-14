export class PoliticianModel {
  id: string;
  person_id: String;
  council: String;
  firstName: String;
  lastName: String;
  dateOfBirth: String;
  canton: String;
  job: String;
  party: String;
  address: String;
  email: String;
  webpage: String;

  constructor(id, number, council, firstName, lastname, birthDate, canton,
    professions, party, addressLine, emailWork, homepageWork) {

    this.id = id;
    this.person_id = number;
    this.council = council;
    this.firstName = firstName;
    this.lastName = lastname;
    this.dateOfBirth = birthDate;
    this.canton = canton;
    this.job = professions;
    this.party = party;
    this.address = addressLine;
    this.email = emailWork;
    this.webpage = homepageWork;

  }
}
