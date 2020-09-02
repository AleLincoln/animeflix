import React, { useState } from 'react';
import PageDefault from '../../../components/PageDefault'
import { FormArea } from '../../../components/FormStyle/styles'
import FormField from '../../../components/FormField'
import VideoIframeResponsive from '../../../components/BannerMain/components/VideoIframeResponsive'


function CadastroVideo() {

  const initialValues = {
    nomeDoVideo: '',
    linkDoVideo: ''
  };


  const [videos, setVideos] = useState([]);
  const [values, setValues] = useState(initialValues);



  function setValue(chave, value) {
    setValues({
      ...values,
      [chave]: value
    });
  }

  function handleChange(item) {
    setValue(
      item.target.getAttribute('name'),
      item.target.value

    );
  }

  function handleSubmit(item) {
    item.preventDefault();
    setVideos([
      ...videos,
      values
    ]);

    console.log(values)

    setValues(initialValues)
  }

  return (
    <PageDefault>
      <h1>Cadastro de vídeo</h1>

      <FormArea onSubmit={handleSubmit}>
        <FormField
          Label='Nome do Vídeo'
          type="text"
          value={values.videos}
          name="nomeDoVideo"
          onChange={handleChange}
        />
        <FormField
          Label={'Nome do Vídeo'}
          type="text"
          value={values.video}
          name="linkDoVideo"
          onChange={handleChange}
        />

        <button>Cadastrar</button>
      </FormArea>

      <ul>
        {videos.map((item, index) => (
          <li key={item + index}>
            <VideoIframeResponsive
              title={item.nomeDoVideo}
              src={item.linkDoVideo}
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />

            {item.nomeDoVideo}</li>
        ))}
      </ul>

    </PageDefault>
  )
}

export default CadastroVideo;