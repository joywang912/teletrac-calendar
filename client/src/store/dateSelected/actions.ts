import { Moment } from 'moment';

export const selectDate = (date: Moment) => ({
    type: "SELECT_DATE",
    payload: date,
});
