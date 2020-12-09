import { Timeline, TimelineEvent } from 'react-event-timeline';
import moment, { Moment } from 'moment';
import { connect } from "react-redux";
import { RootState } from '../../store';
import { ToDo } from '../../store/todo/types';
import './timeLine.scss';

const ICON_COLOR = {
    'completed': 'var(--green)',
    'postponed': 'var(--yellow)',
    'undone': 'var(--red)',
    '': 'var(--blue)'
};
const TimeLine = (props: Props) => {
    const { todoList, dateSelected } = props;
    const todosSelectedDay = todoList.filter((el: ToDo) => {
        return moment(el.dueDate).isSame(dateSelected, 'day');
    });

    if (!todosSelectedDay.length) {
        return <div className="time-line">No To Do Event</div>;
    }

    return <div className="time-line">
        <div className="time-line-date">
            <div>{dateSelected.format('DD MMMM')}</div>
            <h3>{dateSelected.format('dddd')}</h3>
        </div>
        <Timeline style={{
            width: 'auto',
            display: 'inline-block'
        }}>
            {todosSelectedDay.map((todo, idx) => {
                return <TimelineEvent
                    key={idx}
                    title={<div className="timeline-description">
                        {todo.description}
                    </div>}
                    createdAt=""
                    icon={<i className="timeline-icon">{moment(todo.dueDate).format('HH:mm')}</i>}
                    bubbleStyle={{
                        backgroundColor: ICON_COLOR[todo.state],
                        border: 'none',
                        borderRadius: '45%',
                        width: '3.5rem',
                        height: '2.5rem'
                    }}
                    iconStyle={{
                        width: '3.5rem',
                        height: '2.5rem'
                    }}
                />;
            })
            }
        </Timeline>
    </div>;
};

const mapStateToProps = (state: RootState) => {
    return {
        todoList: state.todoList,
        dateSelected: state.dateSelected
    };
};

interface Props {
    todoList: Array<ToDo>;
    dateSelected: Moment;
}

export default connect(mapStateToProps)(TimeLine);