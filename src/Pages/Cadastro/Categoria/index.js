import React from 'react';
import PageDefault from '../../../components/PageDefault'
import {Link} from 'react-router-dom'
import styled from 'styled-components';
import {FormArea, Label, Input} from '../../../components/FormStyle/styles'

function CadastroCategoria() {
    return (
      <PageDefault>
        
            <h1>Cadastro de Categoria</h1>

            <FormArea>
              <Label>
                Nome da Categoria
                <Input type="text">
                </Input>
                
              </Label>
              <input tyle='submit' value='Cadastral'></input>
            </FormArea>


        
      </PageDefault>
    )
  }

  export default CadastroCategoria