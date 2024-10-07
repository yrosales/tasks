import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Person, Task, TaskStatus } from 'src/app/interface/interfaces';
import { TaskService } from 'src/app/service/task.service';

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

  personIndex: number = 0;

  constructor(private formBuilder: FormBuilder, private taskService: TaskService) { }

  ngOnInit(): void {

  }

  get persons() {
    return this.form.controls['asociatedPersons'] as FormArray;
  }

  addPerson() {
    const personForm: FormGroup = this.formBuilder.group({
      name: ['', Validators.required],
      age: ['', Validators.required, Validators.min(18)],
      skills: this.formBuilder.array([])
    });
    this.persons.push(personForm);
    console.log(this.form)
  }

  deletePerson(personIndex: number) {
    this.persons.removeAt(personIndex);
  }

  setPersonIndex(personIndex:number){
    this.personIndex = personIndex
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

  deleteSkill(personIndex:number, killIndex:number){
    
  }

  saveTask() {
    const task: Task = {
      description: this.form.get('description')?.value,
      deadline: this.form.get('description')?.value,
      status: 'pending',
      asociatedPersons: this.getTaskPersons()
    }
    this.taskService.saveTask(task);
  }

  getTaskPersons(): Person[] {
    let persons: Person[] = [];
    for (let index = 0; index < this.persons.length; index++) {
      const personForm = this.persons.at(index) as FormGroup;
      persons.push({
        name:personForm.get('name')?.value,
        age:personForm.get('age')?.value,
        skills: this.getPersonSkills(personForm)
      })
    }
    return persons;
  }
  
  getPersonSkills(personForm: FormGroup): string[] {
    let skills: string[] = [];
    const skillFormArr = personForm.get('skills') as FormArray
    for (let index = 0; index < skillFormArr.length; index++) {
      const skillForm = skillFormArr.at(index) as FormGroup;
      skills.push(
        skillForm.get('skill')?.value
      )
    }
    return skills;
  }

}