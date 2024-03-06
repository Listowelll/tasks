import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): JSX.Element {
    const [die1, setDie1] = useState<number>(1);
    const [die2, setDie2] = useState<number>(6);

    function rollDie1(): void {
        setDie1(d6());
    }

    function rollDie2(): void {
        setDie2(d6());
    }

    return (
        <div>
            <div>
                <Button onClick={rollDie1}>Roll Left</Button>
                <span data-testid="left-die">{die1}</span>
            </div>
            <div>
                <Button onClick={rollDie2}>Roll Right</Button>
                <span data-testid="right-die">{die2}</span>
            </div>
            {die1 === die2 && die1 === 1 ? <p>You Lose!</p> : null}
            {die1 === die2 && die1 !== 1 ? <p>You Win!</p> : null}
        </div>
    );
}
