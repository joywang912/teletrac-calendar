export interface ToDo {
    dueDate: Date;
    description: string;
    state: 'completed' | 'postponed' | 'undone';
}