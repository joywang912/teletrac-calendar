import { useState } from 'react';
import ReactCalendar from 'react-calendar';
// import 'react-calendar/dist/Calendar.css';
import './calendar.scss';


const Calendar = () => {
    const [date, setDate] = useState(new Date());

    const onDateChange = (value: Date) => {
        setDate(value);
    };

    return <div className="calendar">
        <ReactCalendar
            onClickDay={onDateChange}
            value={date}
        />
    </div>;
};

export default Calendar;