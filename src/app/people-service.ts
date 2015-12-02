import { Person } from "./person";

export class PeopleService {
  private people : Person [];

  constructor() {
    this.people =  [
      new Person(7, "Anne", "Honymous"),
      new Person(8, "Jean", "Honymous"),
      new Person(9, "Mike", "Honymous")
    ];
  }

  public getAll() {
    return this.people;
  }
}
