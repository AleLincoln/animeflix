import React, { useEffect, useState } from 'react';
import PageDefault from '../../../components/PageDefault';
import {FormArea} from '../../../components/FormStyle/styles';
import Button from '../../../components/Button'
import FormField from '../../../components/FormField';
import useForm from '../../../hooks/useForm';

import URL from '../../../config'




function CadastroCategoria() {
  const initialValues = {
    titulo: '',
    descricao: '',
    cor: '',
  };

  const {values, handleChange, clearForm} = useForm(initialValues)

  const [categories, setCategories] = useState([]);


  function handleSubmit(item) {
    item.preventDefault();
    setCategories([
      ...categories,
      values,
    ]);

    clearForm(initialValues);
  }

  useEffect(() => {

    fetch(`${URL}/categorias`).then((resp)=>{
      return resp
    }).then((resp) => resp.json()).then((resp) => setCategories([
      
      ...resp
    ]))
  }, [])

  console.log(categories)

  return (
    <PageDefault>

      <h1>
        Cadastro de categoria
      </h1>

      <FormArea onSubmit={handleSubmit}>
        <FormField
          label='Nome da categoria:'
          type="text"
          value={values.titulo}
          name="nome"
          onChange={handleChange}
        />

        <FormField
          as='textarea'
          label="Descrição:"
          type="textarea"
          value={values.descricao}
          name="descricao"
          onChange={handleChange}
        />

        <FormField
          label="Cor"
          type="color"
          value={values.cor}
          name="cor"
          onChange={handleChange}
        />
       

        <Button>Cadastrar</Button>
      </FormArea>

      {
        categories.length === 0 && <div>
          loanding
        </div>
      }

      <ul>
        {categories.map((item) => (
          <li key={`${item.id}`}>
            {item.titulo}
          </li>
        ))}
      </ul>

    </PageDefault>
  );
}

export default CadastroCategoria;
