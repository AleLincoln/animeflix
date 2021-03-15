import React from 'react';
import styled from 'styled-components'

const ErrorArea = styled.div`
    height:100vh;
    display:flex;
    align-items:center;
    justify-content:center;
    text-align:center;


`

const ErrorMessage = () => (<ErrorArea>404 boladão</ErrorArea>);


export default ErrorMessage;