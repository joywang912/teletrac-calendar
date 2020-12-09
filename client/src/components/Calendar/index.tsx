import { connect } from "react-redux";
import ReactCalendar from 'react-calendar';
import { RootState } from '../../store';
import { selectDate } from '../../store/dateSelected/actions';
import moment, { Moment } from 'moment';
import './calendar.scss';

const Calendar = (props: Props) => {
    const { dateSelected, selectDate } = props;

    const onDateChange = (value: Date) => {
        selectDate(moment(value));
    };

    return <div className="calendar">
        <ReactCalendar
            onClickDay={onDateChange}
            value={dateSelected?.toDate()}
        />
    </div>;
};

const mapStateToProps = (state: RootState) => {
    return {
        dateSelected: state.dateSelected
    };
};

interface Props {
    dateSelected: Moment;
    selectDate: (date: Moment) => void;
}


export default connect(mapStateToProps, { selectDate })(Calendar);