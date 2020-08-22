import React from 'react';
import PageDefault from '../../components/PageDefault';
import YouTubeIframeResponsive from '../../components/BannerMain/components/VideoIframeResponsive'
import dados_iniciais from '../../components/Data/dados_iniciais.json'

function VideoReproducer(){
    return (
        <PageDefault>
            <h3>{dados_iniciais.categorias[1].titulo}</h3>
            <YouTubeIframeResponsive/>
        </PageDefault>
    )
};


export default VideoReproducer;