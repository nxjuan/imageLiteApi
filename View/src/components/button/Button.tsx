import React from "react";

interface ButtonProps {
    style?: string;
    label?: string
    onclick: (event: any) => void;
}

export const Button: React.FC<ButtonProps> = ({onclick, label, style} : ButtonProps) => {
    return (
        <>
            <button className={`${style} text-white px-4 py-2 rounded-lg`} onClick={onclick}>
                { label }
            </button>
        </>
    )
}