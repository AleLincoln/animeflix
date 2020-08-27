import React from 'react';
import {Label, Input} from '../../components/FormStyle/styles'


function FormField({ value, onChange }) {

    return (
    <div>

        <Label>
            Nome da Categoria
          <Input
                type="text"
                value={value}
                name='nome'
                onChange={onChange}
            />

        </Label>

    </div>
    )

}


export default FormField