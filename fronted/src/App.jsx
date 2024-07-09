import { Datepicker } from "flowbite-react"

function App() {
  
  function handleClass(event){
    console.log(event.target.value);
  };

  return (
    <Datepicker onSelect={handleClass}></Datepicker>
  )
}

export default App
