// AxiosService.js
import axios from 'axios';
import config from '../config'


const addToFavorites = async (propertyID) => {

    //const token= sessionStorage.getItem('token')
  //   userID= token.
  // try {
  //   await axios.post(`${config.url}/user/add-to-favorites`, { userID, propertyID },{
  //       headers:{
  //           token,
  //       },
  //   });
  // } catch (error) {
  //   console.error('Error adding property to favorites:', error);
  //   throw new Error('Failed to add property to favorites');
  }


const removeFromFavorites = async (propertyID) => {
  // try {
  //   //await axios.delete(`${config.url}/user/add-to-favorites`, { data: { userID, propertyID }},{
  //       headers:{
  //           token,
  //       }
  //   });
  // } catch (error) {
  //   console.error('Error removing property from favorites:', error);
  //   throw new Error('Failed to remove property from favorites');
  // }
}


export async function getFavourites(id){
  const token = sessionStorage.getItem('token')

  const response= await axios.get(`${config.url}/user/favorite`, {
    headers:{
      token,
    },
  })
  return response.data
}



export { addToFavorites, removeFromFavorites };


