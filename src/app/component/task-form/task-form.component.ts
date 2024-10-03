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

  public personForm: FormGroup = this.formBuilder.group({
    name: ['', Validators.required],
    age: ['', Validators.required],
    skills: this.formBuilder.array([])
  });

  public skillForm = this.formBuilder.group({
    description: ['', Validators.required]
  });

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {

  }

  get persons() {
    return this.form.controls['asociatedPersons'] as FormArray;
  }

  addPerson() {
    console.log('añadiendo persona')
    this.persons.push(this.personForm);
    console.log(this.form);
  }

  get skills() {
    return this.personForm.controls['skills'] as FormArray
  }

  addSkill() {
    this.skills.push(this.skillForm);
  }

}
