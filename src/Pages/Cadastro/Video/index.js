import React from 'react';
import PageDefault from '../../../components/PageDefault'
import {FormArea, Label, Input, Button} from '../../../components/FormStyle/styles'

function CadastroVideo() {
  return (
    <PageDefault>
      <h1>Cadastro de vídeo</h1>

      <FormArea>
        <Label>
          Nome da Vídeo
    <Input type="text">
          </Input>

        </Label>
        <Label>
          Link
    <Input type="text">
          </Input>

        </Label>
        <Button tyle='submit' value='Cadastral'></Button>
      </FormArea>



    </PageDefault>
  )
}

export default CadastroVideo;