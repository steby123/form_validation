import { useState } from "react";

export function useInput (defaultValue, validationFn) {
    const [enteredValues, setEnteredValues] = useState(defaultValue);
    const [didEdit, setDidEdit] = useState(false);

    const valueIsValid = validationFn(enteredValues)

    const handleInputChange = (event) => {
        setEnteredValues(event.target.value);
        setDidEdit(false);
    }
    
      const handleInputBlur = () => {
        setDidEdit(true);
      }
      
      return {
        handleInputBlur,
        handleInputChange,
        value: enteredValues,
        hasError: didEdit && !valueIsValid
      }
}   