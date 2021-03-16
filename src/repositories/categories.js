
import PATH from '../config'

const URL_CATEGORIES_WITH_VIDEOS = `${PATH}/categorias`


async function getAllWithVideos(){

    return fetch(URL_CATEGORIES_WITH_VIDEOS)
        .then((res) =>{

            if(res.ok){
                
                const resp = res.json()
    
                return resp
            }

            throw new Error('Não foi possível ter uma resposta :=(')

        })
        
}

const categoriesRepository = {

    getAllWithVideos,

}

export default categoriesRepository