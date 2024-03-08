import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function ChangeColor(): JSX.Element {
    const colors = [
        "red",
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

    const [selectedColor, setSelectedColor] = useState<string>("");

    const handleColorChange = (color: string) => {
        setSelectedColor(color);
    };

    return (
        <div>
            <h3>Change Color</h3>
            {colors.map((color, index) => (
                <Form.Check
                    key={index}
                    type="radio"
                    name="color"
                    id={`color-check-${index}`}
                    label={color}
                    inline
                    onChange={() => handleColorChange(color)}
                    checked={selectedColor === color}
                />
            ))}
            <div
                data-testid="colored-box"
                style={{
                    width: "100px",
                    height: "100px",
                    backgroundColor: selectedColor,
                    marginTop: "10px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    color: "white"
                }}
            >
                {selectedColor}
            </div>
        </div>
    );
}
