import { Person, Task } from "../interface/interfaces";

export class Mocks {
    public static persons : Person[] = [
        {
            age : 20,
            name: 'Juan Pérez',
            skills:['Java Script', 'Angular']
        },
        {
            age : 22,
            name: 'Maria López',
            skills:['Typescript', 'CSS']
        },
        {
            age : 21,
            name: 'Jorge Gómez',
            skills:['HTML']
        },
        {
            age : 25,
            name: 'Martin Suares',
            skills:['Javascript', 'CSS', 'HTML']
        },
        {
            age : 23,
            name: 'Edgar Rosales',
            skills:['HTML']
        }
    ]

    public static tasks : Task[] = [
        {
            id: 1,
            description: 'Tarea A',
            status: "pending",
            deadline: new Date(),
            asociatedPersons:[this.persons[0]]
        },
        {
            id: 1,
            description: 'Tarea B',
            status: "pending",
            deadline: new Date(),
            asociatedPersons:[this.persons[1],this.persons[2]]
        },
        {
            id: 1,
            description: 'Tarea C',
            status: "pending",
            deadline: new Date(),
            asociatedPersons:[this.persons[3]]
        }
    ]
}