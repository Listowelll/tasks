import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function RevealAnswer(): JSX.Element {
    const [answerVisible, setAnswerVisible] = useState<boolean>(false);
    const answerValue = 42;

    function showAnswer(): void {
        setAnswerVisible(!answerVisible);
    }

    return (
        <span>
            <Button onClick={showAnswer}>Reveal Answer</Button>
            {answerVisible && <span>{answerValue}</span>}
        </span>
    );
}
