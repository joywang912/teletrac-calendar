import { useState, useEffect } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { ToDo } from '../../store/todo/types';
import { connect } from "react-redux";
import { editTodo } from '../../store/todo/actions';

const options = [
    {
        displayName: 'Completed',
        value: 'completed'
    },
    {
        displayName: 'Postponed',
        value: 'postponed'
    }, {
        displayName: 'Undone',
        value: 'undone'
    }, {
        displayName: 'Normal',
        value: ''
    }
];
const EditTodoModal = (props: Props) => {
    const { show, handleClose, todo, editTodo } = props;
    const [selectedValue, setSelectedValue] = useState<"" | "completed" | "postponed" | "undone">('');
    const onEditTodo = () => {
        editTodo({ ...todo, state: selectedValue });
        handleClose();
    };

    useEffect(() => {
        setSelectedValue(todo.state);
    }, [todo]);

    return <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
            <Modal.Title>Edit Todo State</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div>{todo.description}</div>
            <div>{selectedValue}</div>
            <div>
                <label htmlFor="editTodoState" className="form-label">State:</label>
                <select
                    value={selectedValue}
                    onChange={(e: any) => setSelectedValue(e.target.value)}
                    className="form-control"
                    id="editTodoState" >
                    {
                        options.map((option, idx) => {
                            return <option
                                key={idx}
                                value={option.value}
                            >
                                {option.displayName}
                            </option>;
                        })
                    }
                </select>
            </div>
        </Modal.Body>
        <Modal.Footer>
            <Button type="button" variant="secondary" size="lg" onClick={handleClose}>
                Cancel
            </Button>
            <Button type="submit" variant="primary" size="lg" onClick={onEditTodo}>
                Save
            </Button>
        </Modal.Footer>

    </Modal>;
};

interface Props {
    show: boolean;
    handleClose: () => void;
    todo: ToDo;
    editTodo: (todo: ToDo) => void;
}

export default connect(null, { editTodo })(EditTodoModal);