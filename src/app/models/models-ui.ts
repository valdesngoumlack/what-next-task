
export class TaskGroup {
    public id !: number;
    public name !: string;
    public iconName !: string;
    public tasks !: Task[];
}

export class Task {
    public name !: string;
}