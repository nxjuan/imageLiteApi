interface FieldErrorProps {
    error: any | null;
}

export const FieldError: React.FC<FieldErrorProps> = ( { error } ) => {
    if(error){
        return(
            <span className="text-red-600 text-sm">{ error }</span>
        )
    }

    else{
        return false;
    }
}