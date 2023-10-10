import axios from 'axios';



function CreateOrder(body){

    const apiUrl = 'http://127.0.0.1:8000/api/order';
   console.log('====================================');
   console.log('body', body);
   console.log('====================================');
    
    axios.post(apiUrl, (body))
      .then(response => {
        // Ma'lumotlarni olganingizda qiladigan ishlarni shu yerdan davom ettirishingiz mumkin
        console.log(response.data);
      })
      .catch(error => {
        // Xatolik yuz berdi
        console.error(error);
      });


}


export default CreateOrder;