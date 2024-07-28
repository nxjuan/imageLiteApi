import React from "react";

interface ButtonProps {
    style?: string;
    label?: string
    onclick?: (event: any) => void;
    type?: "submit" | "button" | "reset" | undefined
}

export const Button: React.FC<ButtonProps> = ({onclick, label, style, type} : ButtonProps) => {
    return (
        <>
            <button className={`${style} text-white px-4 py-2 rounded-lg`} type={type} onClick={onclick}>
                { label }
            </button>
        </>
    )
}