import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function RevealAnswer(): JSX.Element {
    const [answer, setAnswer] = useState<number>();
    function showAnswer(): void {
        setAnswer(42);
    }
    return (
        <span>
            <Button onClick={showAnswer}>Reveal Answer</Button>
            {answer}
        </span>
    );

    //return <div>Reveal Answer</div>;
}
