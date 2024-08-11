import React from "react";

interface InputTextProps{
    style?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
    placeholder?: string;
    id?: string;
    value?: string;
    type?: string;
}

export const InputText: React.FC<InputTextProps> = ( {style, type = "text", ...rest}: InputTextProps ) => {
    return (
        <input type={type} className={`${style} border bg-gray-200 px-3 py-2 rounded-md text-black`} {...rest} />
    )
}