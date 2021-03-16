import react, { useState } from 'react'


export default function useForm(initialValues){

    const [values, setValues] = useState(initialValues);
  
    function setValue(chave, value) {
      setValues({
        ...values,
        [chave]: value,
      });
    }
  
    function handleChange(item) {
      setValue(
        item.target.getAttribute('name'),
        item.target.value,
      );
    }
  
    function clearForm(){
      setValues(initialValues)
    }
  
    return {
      values,
      handleChange,
      clearForm
    }
    
  }