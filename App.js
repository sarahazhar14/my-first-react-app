import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Counter from './Components/Counter';
import { useState } from 'react';

function App() {

  const [myCount, setCount] = useState(0);

  const incrementCount = () => {
    setCount(myCount + 2)
  }

  return (
    <>
   <Navbar />
   
   <div className="container">
    <h1> The button will show counter soon...</h1>

    <Counter onclickCount={incrementCount} count={myCount} heading={"Counter 1: "} />
    <Counter onclickCount={incrementCount} count={myCount} heading={"Counter 2: "} />
    <Counter onclickCount={incrementCount} count={myCount} heading={"Counter 3: "} />
    <Counter onclickCount={incrementCount} count={myCount} heading={"Counter 4: "} />
     
    </div>

    < Footer  />
    </>
    
  );
}

export default App;
