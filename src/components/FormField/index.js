import React from 'react';
import { Label, Input } from '../FormStyle/styles';

function FormField({
    label, type, name, value, onChange,
}) {
   // const isTypeTextArea = type === 'textarea';
   // const tag = isTypeTextArea ? 'textarea' : 'input'
    const fieldId = `Id_${name}`;
    return (
        <>

            <Label
                htmlFor={fieldId}
            >
                {label}
                <Input
                    type={type}
                    value={value}
                    name={name}
                    onChange={onChange}
                />

            </Label>

        </>
    );
}

function FormFieldTextArea({
    label, type, name, value, onChange,
}) {
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
    );
};

/*FormField.defaultProps = {
    type:'text',
    
}

FormField.proptypes = {
    label: PropTypes.string.isRequired,
    type: PropTypes.string,
    name,
    value,
    onChange
}*/

export default FormField;
