export interface Task {
    id?: number;
    description: string;
    status: TaskStatus;
    deadline: Date;
    asociatedPersons?:Person[];
}

export type TaskStatus = 'pending' | 'finished';

export interface Person {
    name: string;
    age: number;
    skills: string[];
}


