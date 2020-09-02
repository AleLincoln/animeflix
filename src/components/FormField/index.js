import React from 'react';
import {Label, Input} from '../../components/FormStyle/styles'


function FormField({label,type, name, value, onChange }) {

    return (
    <div>

        <Label>
            {label}
          <Input
                type={type}
                value={value}
                name={name}
                onChange={onChange}
            />

        </Label>

    </div>
    )

}

function FormFieldTextArea({label,type, name, value, onChange }){
    return (
        <div>
    
            <Label>
                {label}
              <textarea
                    type={type}
                    value={value}
                    name={name}
                    onChange={onChange}
                />
    
            </Label>
    
        </div>
        )

}


export default FormField