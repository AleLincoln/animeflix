
import PATH from '../config'

const URL_VIDEOS = `${PATH}/videos`


async function create(videoObject){

    return fetch(URL_VIDEOS, {
        method:'POST',
        headers:{
            'Content-type':'application/json'
        },
        body: JSON.stringify(videoObject)
    })
        .then( async (res) =>{

            if(res.ok){
                
                const resp = await res.json()
    
                return resp
            }

            throw new Error('Não foi possível ter uma resposta :=(')

        })
        
}

const videosRepository = {

    create

}

export default videosRepository