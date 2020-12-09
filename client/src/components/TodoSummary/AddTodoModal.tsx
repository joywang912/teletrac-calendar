import moment, { Moment } from 'moment';
import { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import Datetime from 'react-datetime';
import { connect } from "react-redux";
import { createTodo } from '../../store/todo/actions';
import { ToDo } from '../../store/todo/types';


import "react-datetime/css/react-datetime.css";

interface Props {
    show: boolean;
    handleClose: () => void;
    createTodo: (todo: ToDo) => void;
}

const AddTodoModal = (props: Props) => {
    const { show, handleClose, createTodo } = props;
    const [dueDateTime, setDueDateTime] = useState<Moment>(moment());
    const [description, setDescription] = useState<string>('description');

    const handleSubmit = (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        createTodo({ dueDate: dueDateTime, description, state: '', id: 0 });
        handleClose();
    };

    return <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
            <Modal.Title>Add Todo</Modal.Title>
        </Modal.Header>
        <form onSubmit={handleSubmit} className="add-todo-form">
            <Modal.Body>

                <div className="mb-3">
                    <label htmlFor="addTodoDescription" className="form-label">Description</label>
                    <input type="text"
                        placeholder="Description"
                        className="form-control"
                        id="addTodoDescription"
                        onChange={e => setDescription(e.target.value)}
                        value={description} />
                </div>
                <div className="mb-3">
                    <label htmlFor="addTodoDueDate" className="form-label">Due Date</label>
                    <Datetime value={dueDateTime} onChange={(val) => moment.isMoment(val) && setDueDateTime(val)} />
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button type="button" variant="secondary" size="lg" onClick={handleClose}>
                    Cancel
            </Button>
                <Button type="submit" variant="primary" size="lg">
                    Save
            </Button>
            </Modal.Footer>
        </form>

    </Modal>;
};

export default connect(null, { createTodo })(AddTodoModal);