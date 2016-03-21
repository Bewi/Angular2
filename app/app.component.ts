import { Component } from "angular2/core";
import { NgClass } from 'angular2/common';
import { Person } from "./person";
import { PersonForm } from "./person-editor.component";
import { PeopleService } from "./people-service";

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    directives: [NgClass, PersonForm],
    providers: [PeopleService]
})
export class AppComponent {
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
        var index = this.people.map(function(p){ return p.id; }).indexOf(updatedPerson.id)
        var person = this.people[index];
        person.firstName = updatedPerson.firstName;
        person.lastName = updatedPerson.lastName;

        this.selectedPerson = null;
    }

    public onSelect(person : Person) {
        if (this.selectedPerson && this.selectedPerson.id == person.id)
            this.selectedPerson = null;
        else
            this.selectedPerson = {
                id: person.id,
                firstName: person.firstName,
                lastName: person.lastName 
            };
    }

    public getSelectedClass(person : Person) {
        return { 'selected': this.selectedPerson && this.selectedPerson.id == person.id };
    }
}
