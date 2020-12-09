import moment, { Moment } from 'moment';
import { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import Datetime from 'react-datetime';
import "react-datetime/css/react-datetime.css";

interface Props {
    show: boolean;
    handleClose: () => void;
}

const AddTodoModal = (props: Props) => {
    const { show, handleClose } = props;
    const [dueDateTime, setDueDateTime] = useState<Moment | string>(moment());

    return <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
            <Modal.Title>Add Todo</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <form className="add-todo-form">
                <div className="mb-3">
                    <label htmlFor="addTodoDescription" className="form-label">Description</label>
                    <input type="text" placeholder="Description" className="form-control" id="addTodoDescription" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="addTodoDueDate" className="form-label">Due Date</label>
                    <Datetime value={dueDateTime} onChange={(val) => setDueDateTime(val)} />
                </div>
            </form>
        </Modal.Body>
        <Modal.Footer>
            <Button variant="secondary" size="lg" onClick={handleClose}>
                Cancel
            </Button>
            <Button variant="primary" size="lg" onClick={handleClose}>
                Save
            </Button>
        </Modal.Footer>
    </Modal>;
};

export default AddTodoModal;