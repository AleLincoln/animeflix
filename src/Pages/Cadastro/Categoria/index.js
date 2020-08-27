import React, { useState } from 'react';
import PageDefault from '../../../components/PageDefault'
import { FormArea, Label, Input } from '../../../components/FormStyle/styles'
import FormField from '../../../components/FormField'


function CadastroCategoria() {

  
  const initialValues = {
    nome: '',
    descricao: '',
    cor: '#414141'
  }


  const [categories, setCategories] = useState([])
  const [values, setValues] = useState(initialValues)


  function setValue(chave, value){
      setValues({
        ...values,
        [chave]:value
      })
      
  }

  function handleChange(item){

    const {getAttribute, value} = item.target
    setValue(getAttribute('name'), value)
  }


  function handleSubmit(item) {
    item.preventDefault()
    setCategories([
      ...categories,
      values
    ])

    setValues(initialValues)
    
  }



  return (
    <PageDefault>

  <h1>Cadastro de Categoria: {values.nome}</h1>

      <FormArea onSubmit={handleSubmit}>
        <FormField
          value={values.nome}
          onChange={handleChange}
        />
        <div>

          <Label>
            Cor da categoria
        <Input
              type="color"
              value={values.cor}
              name='cor'
              onChange={handleChange}
            />

          </Label>

        </div>
        <button>Cadastrar</button>
      </FormArea>


      <ul>
        {categories.map((item, index) => {
          return (
            <li key={`${item}${index}`}>{item.nome}</li>
          )
        })}
      </ul>



    </PageDefault>
  )
}

export default CadastroCategoria