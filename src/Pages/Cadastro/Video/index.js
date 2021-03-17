import React, { useEffect, useState } from 'react';
import PageDefault from '../../../components/PageDefault'
import { FormArea } from '../../../components/FormStyle/styles'
import Button from '../../../components/Button'
import FormField from '../../../components/FormField'
import useForm from '../../../hooks/useForm'

import {Link, useHistory} from 'react-router-dom'

import videosRepository from '../../../repositories/videos'
import categoriesRepository from '../../../repositories/categories';



function CadastroVideo() {

  const initialValues = {
    titulo: 'Jazz Music - Relaxing Cafe Music - Background Music For Study',
    url: 'https://www.youtube.com/watch?v=km9Il_-FHjw',
    categoria:'Front End'
  };

  const history = useHistory()

  const {values, handleChange} = useForm(initialValues)

  const [categorias, setCategorias] = useState([])

  useEffect(() =>{
    categoriesRepository.getAll().then((resp) => setCategorias(
      resp
    ))
  }, [])

  const titulosDasCategorias = categorias.length === 0? '':categorias.map(({titulo}) => titulo)

  console.log(categorias)
  console.log(titulosDasCategorias)



  function handleSubmit(item) {
    item.preventDefault();

    const categoriaEscolhida = categorias.find((categoria) => categoria.titulo === values.categoria)
    
    console.log(categoriaEscolhida)
    videosRepository.create(
      {
        titulo:values.titulo,
        url:values.url,
        categoriaId:categoriaEscolhida.id
      }
    ).then(() =>{
      console.log('Video cadastrado')
    })

    history.push('/')
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
          value={values.titulo}
          name="titulo"
          onChange={handleChange}
        />

        <FormField
          as='text'
          label="Link:"
          type="text"
          value={values.url}
          name="url"
          onChange={handleChange}
        />
        <FormField
          as='datalist'
          label="categoria:"
          type="text"
          value={values.categoria}
          name="categoria"
          onChange={handleChange}
          suggestions={titulosDasCategorias}
        />
       

        <Button>Cadastrar</Button>
      </FormArea>

      <Link to={'/cadastro/categoria'}>Cadastrar categoria </Link>

    </PageDefault>
  );
}

export default CadastroVideo;