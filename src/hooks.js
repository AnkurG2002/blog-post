import { useState } from "react";

// custom hook
export function useFormInput(initialValue) {
    const [ value, setValue ] = useState(initialValue);

    function handleChange(e) {
        setValue(e.target.value);
    }

    return {
        value,
        onChange: handleChange
    }
}