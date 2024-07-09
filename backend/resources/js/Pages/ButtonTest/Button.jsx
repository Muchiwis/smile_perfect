import axios from 'axios';
import { Datepicker } from 'flowbite-react';
import { useEffect } from 'react';

function Button(){
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/todos/2')
        .then(response => {
            console.log(response.data);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}, []);

return (
    <div>
        <h1>Axios Request Example</h1>
        <Datepicker></Datepicker>
    </div>
);
}
export default Button;