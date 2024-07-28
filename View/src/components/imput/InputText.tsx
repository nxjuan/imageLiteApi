import React from "react";

interface InputTextProps{
    style?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
    placeholder?: string;
    id?: string;
}

export const InputText: React.FC<InputTextProps> = ( {style, ...rest}: InputTextProps ) => {
    return (
        <input type="text" className={`${style} border bg-gray-200 px-3 py-2 rounded-md text-black`} {...rest} />
    )
}