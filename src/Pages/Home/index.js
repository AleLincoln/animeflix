import React, { useEffect, useState } from 'react';
import PageDefault from '../../components/PageDefault'
import BannerMain from '../../components/BannerMain'
import Carousel from '../../components/Carousel'

import categoriesRepository from '../../repositories/categories'





function Home() {


  const [dadosIniciais, setDadosIniciais] = useState([])
  
  useEffect(() =>{
    categoriesRepository.getAllWithVideos().then((categoriasComVideos) => {
      setDadosIniciais(categoriasComVideos)
      
    }).catch((err) => console.log(err.message))
  }, [])


  console.log(dadosIniciais)


  return (
    <div style={{backgroundColor: '#141414'}}>
      <PageDefault>

      {dadosIniciais.length === 0 && <div style={{height:'80vh'}}>Loading</div>}
      {dadosIniciais.length !==0 && <><BannerMain
        videoTitle={dadosIniciais[2].videos[1].titulo}
        url={dadosIniciais[2].videos[1].url}  
        videoDescription={'Hoje em dia já temos tecnologia para falsificar imagens, vídeos, gifs,texto, e até áudio. Mas será que temos como descobrir se um conteúdo é falso ou não? Se é artificial ou humano?'}
      
      />

      {
        dadosIniciais.map((item, index) =>{
         return dadosIniciais[index] === 2? 
         <Carousel
         key={item}
         ignoreFirstVideo
         category={dadosIniciais[index]}
       /> :
          <Carousel
          category={dadosIniciais[index]}
      />
        })
      }
      
      
      </>}
      </PageDefault>
      
      
    </div>
  );
}

export default Home;
