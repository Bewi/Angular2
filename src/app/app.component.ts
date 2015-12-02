import { bootstrap, Component, CORE_DIRECTIVES, FORM_DIRECTIVES } from "angular2/angular2";
import { Person } from "./person";
import { PersonForm } from "./person-editor.component";
import { PeopleService } from "./people-service";

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html',
  directives: [CORE_DIRECTIVES, PersonForm],
  providers: [PeopleService]
})
class AppComponent {
  public title : string = 'People';

  private selectedPerson : Person;

  public people : Person[];

  constructor(peopleService : PeopleService) {
    this.people = peopleService.getAll();
  }

  public onCanceled() {
    this.selectedPerson = null;
  }

  public onValidated(updatedPerson: Person) {
    var person = this.people.find(p => p.id == updatedPerson.id);
    person.firstName = updatedPerson.firstName;
    person.lastName = updatedPerson.lastName;

    this.selectedPerson = null;
  }

  public onSelect(person : Person) {
    if (this.selectedPerson == person)
      this.selectedPerson = null;
    else
      this.selectedPerson = new Person(person.id, person.firstName, person.lastName);
  }

  public getSelectedClass(person : Person) {
    return { 'selected': this.selectedPerson && this.selectedPerson.id == person.id };
  }
}

bootstrap(AppComponent);
