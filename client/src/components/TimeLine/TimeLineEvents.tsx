import { Timeline, TimelineEvent } from 'react-event-timeline';
import moment from 'moment';
import { ToDo } from '../../store/todo/types';

const ICON_COLOR = {
    'completed': 'var(--green)',
    'postponed': 'var(--yellow)',
    'undone': 'var(--red)',
    '': 'var(--blue)'
};

const TimeLineEvents = (props: Props) => {
    const { todosSelectedDay, handleIconClick } = props;

    if (!todosSelectedDay.length) {
        return <div className="time-line">No To Do Event</div>;
    }

    return <Timeline style={{
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
                icon={
                    <i className="timeline-icon" onClick={() => handleIconClick(todo.id)}>
                        {moment(todo.dueDate).format('HH:mm')}
                    </i>
                }
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
    </Timeline>;
};

interface Props {
    todosSelectedDay: Array<ToDo>;
    handleIconClick: (id: number) => void;
}

export default TimeLineEvents;