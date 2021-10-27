import axios   from 'axios';

export async function CreateUser(user)
{
//  const res =await axios.post("https://fb7ckxz9q4.execute-api.eu-west-1.amazonaws.com/Prod/insert/",{
//     headers: {
//         // 'accept': '*/*',
//         "Access-Control-Allow-Origin": "*",
//         "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
//         "X-Requested-With": '*',
//         "Access-Control-Allow-Headers": 'Content-Type,X-Amz-Date,Authorization,X-Api-Key,x-requested-with',
//         "Content-type":"application/json",
//         "Access-Control-Allow-Credentials": true


//     },
    
// },user);
// console.log(res);
var requestOptions = {
    method: 'POST',
    redirect: 'follow'
  };
  
  fetch("https://fb7ckxz9q4.execute-api.eu-west-1.amazonaws.com/Prod/insert/", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));

return 0;

}

const UserMethods={CreateUser};

export default UserMethods;