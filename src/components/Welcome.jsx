import Greeting from "./Greeting"


const Welcome = () => {
     
    const name="Kazi";

  return (
    <div>
        <Greeting userName={name}/> 
        <Greeting userName="Zaman"/> 
    </div>
  )
}

export default Welcome