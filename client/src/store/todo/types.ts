import { Moment } from 'moment';

export interface ToDo {
    dueDate: Moment;
    description: string;
    state: 'completed' | 'postponed' | 'undone' | '';
    id: number;
}