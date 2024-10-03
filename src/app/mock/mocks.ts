import { Person, Task } from "../interface/interfaces";

export class Mocks {
    public static persons : Person[] = [
        {
            age : 20,
            name: 'Person One',
            skills:['skillone', 'skilltwo']
        },
        {
            age : 22,
            name: 'Person two',
            skills:['skillone', 'skilltwo']
        },
        {
            age : 21,
            name: 'Person three',
            skills:['skillone']
        },
        {
            age : 25,
            name: 'Person four',
            skills:['skillone', 'skilltwo', 'skillthree']
        },
        {
            age : 23,
            name: 'Person five',
            skills:['skillone', 'skilltwo']
        }
    ]

    public static tasks : Task[] = [
        {
            id: 1,
            description: 'Task one',
            status: "pending",
            deadline: new Date(),
            asociatedPersons:[this.persons[0]]
        },
        {
            id: 1,
            description: 'Task two',
            status: "pending",
            deadline: new Date(),
            asociatedPersons:[this.persons[1],this.persons[2]]
        },
        {
            id: 1,
            description: 'Task three',
            status: "pending",
            deadline: new Date(),
            asociatedPersons:[this.persons[3]]
        }
    ]
}