import React, { useEffect, useState } from 'react';
import PageDefault from '../../components/PageDefault'
import dados_iniciais from '../../components/Data/dados_iniciais.json'
import BannerMain from '../../components/BannerMain'
import Carousel from '../../components/Carousel'

import categoriesRepository from '../../repositories/categories'





function Home() {


  categoriesRepository.getAllWithVideos().then((categoriasComVideos) => console.log(categoriasComVideos)).catch((err) => console.log(err))



  return (
    <div style={{backgroundColor: '#141414'}}>
      <PageDefault>
      <BannerMain
        videoTitle={dados_iniciais.categorias[2].videos[1].titulo}
        url={dados_iniciais.categorias[2].videos[1].url}  
        videoDescription={'Hoje em dia já temos tecnologia para falsificar imagens, vídeos, gifs,texto, e até áudio. Mas será que temos como descobrir se um conteúdo é falso ou não? Se é artificial ou humano?'}
      
      />
      <Carousel
        ignoreFirstVideo
        category={dados_iniciais.categorias[2]}
      />
      </PageDefault>
      
      
    </div>
  );
}

export default Home;
