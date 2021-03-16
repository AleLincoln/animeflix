import React, { useState } from 'react';
import PageDefault from '../../../components/PageDefault'
import { FormArea } from '../../../components/FormStyle/styles'
import Button from '../../../components/Button'
import FormField from '../../../components/FormField'
import VideoIframeResponsive from '../../../components/BannerMain/components/VideoIframeResponsive'


function CadastroVideo() {

  const initialValues = {
    nome: '',
    link: '',
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
        Cadastro de vídeo
      </h1>

      <FormArea onSubmit={handleSubmit}>
        <FormField
          label='Nome do vídeo:'
          type="text"
          value={values.nome}
          name="nome"
          onChange={handleChange}
        />

        <FormField
          as='text'
          label="Link:"
          type="text"
          value={values.link}
          name="link"
          onChange={handleChange}
        />
       

        <Button>Cadastrar</Button>
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
          </li>
        ))}
      </ul>

    </PageDefault>
  );
}

export default CadastroVideo;