import { useState } from 'react';
import moment, { Moment } from 'moment';
import { connect } from "react-redux";
import { RootState } from '../../store';
import { ToDo } from '../../store/todo/types';
import './timeLine.scss';
import EditTodoModal from './EditTodoModal';
import TimeLineEvents from './TimeLineEvents';


const TimeLine = (props: Props) => {
    const { todoList, dateSelected } = props;
    const todosSelectedDay = todoList.filter((el: ToDo) => {
        return moment(el.dueDate).isSame(dateSelected, 'day');
    });

    const [showEditModal, setShowEditModal] = useState(false);
    const [editTodo, setEditTodo] = useState<ToDo>();

    const handleIconClick = (id: number) => {
        const editTodoItem = todoList.find(el => el.id === id);
        if (editTodoItem) {
            setEditTodo(editTodoItem);
            setShowEditModal(true);
        }
    };

    return <div className="time-line">
        <div className="time-line-date">
            <div>{dateSelected.format('DD MMMM')}</div>
            <h3>{dateSelected.format('dddd')}</h3>
        </div>
        <TimeLineEvents todosSelectedDay={todosSelectedDay} handleIconClick={handleIconClick} />
        {
            editTodo &&
            <EditTodoModal show={showEditModal} handleClose={() => setShowEditModal(false)} todo={editTodo} />
        }
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