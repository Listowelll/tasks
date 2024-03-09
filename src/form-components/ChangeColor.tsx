import React, { useState } from "react";
import { Form } from "react-bootstrap";
export function ChangeColor(): JSX.Element {
    const colors = [
        "magenta",
        "blue",
        "green",
        "yellow",
        "orange",
        "purple",
        "pink",
        "cyan",
        "brown",
        "black"
    ];

    const [selectedColor, setSelectedColor] = useState<string>("magenta");

    const handleColorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedColor(event.target.value);
    };

    return (
        <div>
            <h3>Change Color</h3>
            <div style={{ marginBottom: "10px" }}>
                {colors.map((color, index) => (
                    <Form.Check
                        key={index}
                        type="radio"
                        name="color"
                        id={`color-check-${index}`}
                        label={color}
                        inline
                        value={color}
                        style={{ backgroundColor: color }}
                        onChange={handleColorChange}
                        checked={selectedColor === color}
                    />
                ))}
            </div>

            <p>
                You have chosen{" "}
                <span
                    style={{
                        backgroundColor: selectedColor,
                        padding: "2px 5px",
                        borderRadius: "3px"
                    }}
                    data-testid="colored-box"
                >
                    {selectedColor}
                </span>
                .
            </p>
        </div>
    );
}
