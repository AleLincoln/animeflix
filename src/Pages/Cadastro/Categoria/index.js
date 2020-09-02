import React, { useState } from 'react';
import PageDefault from '../../../components/PageDefault';
import { FormArea, Label, Input } from '../../../components/FormStyle/styles';
import FormField from '../../../components/FormField';

function CadastroCategoria() {
  const initialValues = {
    nome: '',
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

  return (
    <PageDefault>

      <h1>
        Cadastro de Categoria:
        {values.nome}
      </h1>

      <FormArea onSubmit={handleSubmit}>
        <FormField
          label="Nome da Categoria"
          type="text"
          value={values.nome}
          name="nome"
          onChange={handleChange}
        />

        <FormField
          as='textarea'
          label="Descrição"
          type=""
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

        <button>Cadastrar</button>
      </FormArea>

      <ul>
        {categories.map((item, index) => (
          <li key={`${item}${index}`}>
            {item.nome}
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
