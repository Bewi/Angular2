import { Component, EventEmitter, CORE_DIRECTIVES, FORM_DIRECTIVES } from "angular2/angular2";
import { Person } from "./person";

@Component({
  selector: "person-editor",
  templateUrl: "app/person-editor.component.html",
  events: ['canceled', 'validated'],
  properties: ['person'],
  directives: [CORE_DIRECTIVES, FORM_DIRECTIVES]
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
