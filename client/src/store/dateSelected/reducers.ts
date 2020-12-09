import moment, { Moment } from 'moment';

const dateSelectedReducer = (state: Moment = moment(), action: { type: string, payload: Moment; }) => {
    switch (action.type) {
        case "SELECT_DATE":
            return action.payload;
        default:
            return state;
    }
};

export default dateSelectedReducer;