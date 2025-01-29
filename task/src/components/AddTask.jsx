
import React, { useEffect, useState } from 'react';
import './CSS/AddTask.css';

const AddTask = ({ taskList, setTaskList }) => {
    const [addModal, setAddModal] = useState(false);
    const [projectName, setProjectName] = useState('');
    const [taskDescription, setTaskDescription] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    useEffect( () => {
        let array = localStorage.getItem("taskList");

        if(array) {
            setTaskList(JSON.parse(array))
        }
    }, [])

    const handleInput = (e) => {
        let { name, value } = e.target;

        if (name === 'projectName') {
            setProjectName(value);
            setErrorMessage('');
        }
        if (name === 'taskDescription') {
            setTaskDescription(value);
        }
    };

    const handleAdd = (e) => {
        e.preventDefault();
        if (!projectName) {
            setErrorMessage('Please enter task name');
        } else {
            let timestamp = new Date();
            let tempList = taskList;
            tempList.push({
                projectName,
                taskDescription,
                timestamp: timestamp,
                duration: 0
            })
            localStorage.setItem("taskList", JSON.stringify (tempList))
            window.location.reload()
            setTaskList([...taskList, { projectName, taskDescription, timestamp: timestamp }]);
            setProjectName('');
            setTaskDescription('');
            setAddModal(false);
        }
    };

    return (
        <>
            <div className="add-task-container">
                <button
                    className="new-task-button"
                    onClick={() => setAddModal(true)}
                >
                    + New
                </button>
            </div>

            {addModal && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h3 className="modal-title">Add a Task</h3>
                            <button
                                className="close-button"
                                onClick={() => setAddModal(false)}
                            >
                                X
                            </button>
                        </div>
                        <form>
                            <div className="input-group">
                                <label htmlFor="projectName">Task Name</label>
                                <input
                                    type="text"
                                    id="projectName"
                                    placeholder="Enter task name"
                                    name="projectName"
                                    value={projectName}
                                    onChange={handleInput}
                                    required
                                />
                                {errorMessage && (
                                    <p className="error-message">{errorMessage}</p>
                                )}
                            </div>
                            <div className="input-group">
                                <label htmlFor="taskDescription">
                                    Description
                                </label>
                                <textarea
                                    id="taskDescription"
                                    placeholder="Enter task description"
                                    name="taskDescription"
                                    value={taskDescription}
                                    onChange={handleInput}
                                ></textarea>
                            </div>
                            <button
                                className="add-button"
                                onClick={handleAdd}
                            >
                                Add
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
};

export default AddTask;
