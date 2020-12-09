import { Timeline, TimelineEvent } from 'react-event-timeline';
import moment from 'moment';
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
    const { todoList } = props;
    const todosSelectedDay = todoList.filter((el: ToDo) => {
        return moment(el.dueDate).isSame(moment(), 'day');
    });

    return <div className="time-line">
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
        todoList: state.todoList
    };
};

interface Props {
    todoList: Array<ToDo>;
}

export default connect(mapStateToProps)(TimeLine);