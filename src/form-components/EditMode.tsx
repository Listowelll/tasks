import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

export function EditMode(): JSX.Element {
    const [editMode, setEditMode] = useState<boolean>(false);
    const [name, setName] = useState<string>("Your Name");
    const [isStudent, setIsStudent] = useState<boolean>(true);

    const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
    };

    const handleStudentChange = () => {
        setIsStudent(!isStudent);
    };

    const toggleEditMode = () => {
        setEditMode(!editMode);
    };

    return (
        <div>
            <h3>Edit Mode</h3>
            <Form>
                {editMode && (
                    <Form.Group controlId="formName">
                        <Form.Label>Name:</Form.Label>
                        <Form.Control
                            type="text"
                            value={name}
                            onChange={handleNameChange}
                        />
                    </Form.Group>
                )}
                {editMode && (
                    <Form.Group controlId="formStudent">
                        <Form.Check
                            type="checkbox"
                            label="Student"
                            checked={isStudent}
                            onChange={handleStudentChange}
                        />
                    </Form.Group>
                )}
            </Form>
            <Form.Switch
                id="editModeSwitch"
                label={editMode ? "Edit Mode" : "View Mode"}
                checked={editMode}
                onChange={toggleEditMode}
            />
            {!editMode && (
                <div>
                    <p>
                        {name} is {isStudent ? "a student" : "not a student"}
                    </p>
                </div>
            )}
        </div>
    );
}
