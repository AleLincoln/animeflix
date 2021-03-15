import styled from 'styled-components';


export const FormArea = styled.form`
    text-align: center;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;

`;

export const Label = styled.label`
    text-align:center;
    font-size:2em;
    display:flex;
    flex-direction:column;
    justify-content:space-evenly;
    

`

export const Input = styled.input`
    text-align:center;
    background:transparent;
    border-radius:2em;
    height:36px;
    border: solid 1px var(--primary);   
    color:white;
    display:flex;

`

export const Button = styled.input`
    background: var(--primary);
    color:white;
    border-radius:2em;
    text-align:center;
    margin:10px 0 10px 0;
    height:24px;

`