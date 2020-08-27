import styled from 'styled-components';


export const FormArea = styled.form`
text-align: center;

`;

export const Label = styled.label`
    display:flex;
    flex-direction:column;
    text-align:center;
    justify-content:center;
    align-itens:center;
    

`

export const Input = styled.input`
    text-align:center;
    background:transparent;
    border-radius:2em;
    height:36px;
    border: solid 1px var(--primary);   
    margin:10px 0 10px 0;
    color:white;

`

export const Button = styled.input`
    background: var(--primary);
    color:white;
    border-radius:2em;
    text-align:center;
    margin:10px 0 10px 0;
    height:24px;

`