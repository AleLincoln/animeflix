import React, { useEffect, useState } from 'react';
import PageDefault from '../../../components/PageDefault';
import {FormArea} from '../../../components/FormStyle/styles';
import Button from '../../../components/Button'
import FormField from '../../../components/FormField';

function CadastroCategoria() {
  const initialValues = {
    titulo: '',
    descricao: '',
    cor: '',
  };

  const [categories, setCategories] = useState([]);
  const [values, setValues] = useState(initialValues);

  function setValue(chave, value) {
    setValues({
      ...values,
      [chave]: value,
    });
  }

  function handleChange(item) {
    setValue(
      item.target.getAttribute('name'),
      item.target.value,
    );
  }

  function handleSubmit(item) {
    item.preventDefault();
    setCategories([
      ...categories,
      values,
    ]);

    setValues(initialValues);
  }

  useEffect(() => {
    const URL = 'https://learnflixbackend.herokuapp.com/categorias'

    fetch(URL).then((resp)=>{
      return resp
    }).then((resp) => resp.json()).then((resp) => setCategories([
      
      ...resp
    ]))
  }, [])

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
        {categories.map((item, index) => (
          <li key={`${item}${index}`}>
            {item.titulo}
            <ol>
              Descrição:
              {' '}
              {item.descricao}
            </ol>
            <ol>
              Cor:
              {' '}
              {item.cor}
            </ol>
          </li>
        ))}
      </ul>

    </PageDefault>
  );
}

export default CadastroCategoria;
