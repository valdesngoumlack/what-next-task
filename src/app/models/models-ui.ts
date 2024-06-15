
export class TaskGroup {
    public id !: number;
    public name !: string;
    public iconName !: string;
    public tasks !: TaskInfo[];
}

export class TaskInfo {
    public id !: number;
    public name !: string;
    public startDate !: Date;
    public endDate !: Date;
    public startHour !: Date;
    public endHour !: Date;
    public priority !: string;
    public status !: string;
}