
import PATH from '../config'

const URL_CATEGORIES = PATH

const URL_CATEGORIES_WITH_VIDEOS = `${PATH}/categorias?_embed=videos`

async function getAll(){

    return fetch(`${URL_CATEGORIES}/categorias`)
        .then( async (res) =>{

            if(res.ok){
                
                const resp = await res.json()
    
                return resp
            }

            throw new Error('Não foi possível ter uma resposta :=(')

        })
        
}


async function getAllWithVideos(){

    return fetch(URL_CATEGORIES_WITH_VIDEOS)
        .then( async (res) =>{

            if(res.ok){
                
                const resp = await res.json()
    
                return resp
            }

            throw new Error('Não foi possível ter uma resposta :=(')

        })
        
}

const categoriesRepository = {

    getAllWithVideos,
    getAll

}

export default categoriesRepository