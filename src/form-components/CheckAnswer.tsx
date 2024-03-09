import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function CheckAnswer({
    expectedAnswer
}: {
    expectedAnswer: string;
}): JSX.Element {
    const [userAnswer, setUserAnswer] = useState<string>("");

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUserAnswer(event.target.value);
    };

    return (
        <div>
            <h3>Check Answer</h3>
            <Form.Group controlId="formUserAnswer">
                <Form.Label>Enter your answer:</Form.Label>
                <Form.Control
                    type="text"
                    value={userAnswer}
                    onChange={handleInputChange}
                />
            </Form.Group>
            <div>{userAnswer === expectedAnswer ? <p>✔️</p> : <p>❌</p>}</div>
        </div>
    );
}
