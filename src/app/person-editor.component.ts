import { Component, EventEmitter } from "angular2/core";
import { NgClass } from "angular2/common";
import { Person } from "./person";

@Component({
  selector: "person-editor",
  templateUrl: "app/person-editor.component.html",
  events: ['canceled', 'validated'],
  properties: ['person'],
  directives: [NgClass]
})
export class PersonForm  {
  canceled = new EventEmitter();
  validated = new EventEmitter();

  person : Person;

  public onCanceled() {
    this.canceled.next(null);
  }

  public onSubmit(person) {
    this.validated.next(person);
  }
};
