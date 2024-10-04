import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { TaskStatus } from 'src/app/interface/interfaces';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.scss']
})
export class TaskFormComponent implements OnInit {

  form: FormGroup = this.formBuilder.group({
    description: ['', Validators.required],
    deadline: [new Date(), Validators.required],
    status: ['pending', Validators.required],
    asociatedPersons: this.formBuilder.array([])
  });

  personIndex!: number;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {

  }

  get persons() {
    return this.form.controls['asociatedPersons'] as FormArray;
  }

  addPerson() {
    const personForm: FormGroup = this.formBuilder.group({
      name: ['', Validators.required],
      age: ['', Validators.required],
      skills: this.formBuilder.array([])
    });
    this.persons.push(personForm);
  }

  deletePerson(personIndex: number) {
    this.persons.removeAt(personIndex);
  }

  get skills() {
    const selectPersonForm: FormGroup = this.persons.at(this.personIndex) as FormGroup
    return selectPersonForm.controls['skills'] as FormArray;
  }

  addSkill(personIndex: number) {
    this.personIndex = personIndex;
    const skillForm = this.formBuilder.group({
      description: ['', Validators.required]
    });
    this.skills.push(skillForm);
  }

}
