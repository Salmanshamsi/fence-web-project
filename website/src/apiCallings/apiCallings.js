import axios from 'axios';


const postData = (data) => {

  return new Promise((resolve, reject) => {
    
    try{
      axios.post(`http://localhost:3000/auth/saveData`, data)
      .then(response => {
        resolve(response.data)
      })
      .catch(error => {
        reject(error)
      });
    }catch{
      console.log("error in posting data")
    }

  });

}

const updateData = (id, data) => {

  const _id = id;
  const _data = JSON.stringify(data);

  return new Promise((resolve, reject) => {

    try {

      axios.put(`http://localhost:3000/auth/updateData/${id}`, _data, {
        headers: {
          'Content-Type': 'application/json',
        },
      }).then((resp)=>{
        resolve(resp);
      }).then(err => reject(err))

    } catch (error) {
      console.error('Error updating data:', error);
    }


  });


};

export {postData ,updateData}