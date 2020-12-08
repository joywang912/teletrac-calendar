import { connect } from "react-redux";
import { ToDo } from '../../store/todo/types';
import { RootState } from '../../store';
import './todoSummary.scss';

const TodoSummary = (props: Props) => {
    const { todoList } = props;
    const completedList = todoList.filter(el => el.state === 'completed');
    const postponedList = todoList.filter(el => el.state === 'postponed');
    const undoneList = todoList.filter(el => el.state === 'undone');
    return <div className="todo-summary">
        <hr />
        <div className="row">
            <div className="col-6 col-sm-3 summary-item summary-item--completed">
                <div>completed</div>
                <div className="summary-item__count">{completedList.length}</div>
            </div>
            <div className="col-6 col-sm-3 summary-item summary-item--postponed">
                <div>postponed</div>
                <div className="summary-item__count">{postponedList.length}</div>
            </div>
            <div className="col-6 col-sm-3 summary-item summary-item--undone">
                <div>undone</div>
                <div className="summary-item__count">{undoneList.length}</div>
            </div>
            <div className="col-6 col-sm-3 summary-item summary-item--all">
                <div>all tasks</div>
                <div className="summary-item__count">{todoList.length}</div>
            </div>
        </div>
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
export default connect(mapStateToProps)(TodoSummary);