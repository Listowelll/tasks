import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function CycleHoliday(): JSX.Element {
    const [holiday, setHoliday] = useState<string>("🎄");
    const alphabetical: string[] = ["🎄", "✊", "🛠️", "🖤", "🎇"];
    const yearly: string[] = ["🎇", "🖤", "✊", "🛠️", "🎄"];

    function alphabet(holiday: string): void {
        const index: number = alphabetical.indexOf(holiday);
        if (index + 1 < alphabetical.length)
            setHoliday(alphabetical[index + 1]);
        else setHoliday(alphabetical[0]);
    }

    function year(holiday: string): void {
        const index: number = yearly.indexOf(holiday);
        if (index + 1 < yearly.length) setHoliday(yearly[index + 1]);
        else setHoliday(yearly[0]);
    }

    return (
        <span>
            <Button onClick={() => alphabet(holiday)}>
                Advance by Alphabet
            </Button>
            <Button onClick={() => year(holiday)}>Advance by Year</Button>
            Holiday: {holiday}
        </span>
    );
}
