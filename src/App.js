import { useEffect, useRef, useState } from 'react';
import './App.css';

function App() {
  const [ firstNumber, setFirstNumber ] = useState(0);
  const [ secondNumber, setSecondNumber ] = useState(0);
  const [ result, setResult ] = useState(0);
  {/*const [ history, setHistory ] = useRef([]);*/}

  function changeFirstNumberHandler (event) {
    setFirstNumber(event.target.value);
  }

  function changeSecondNumberHandler (event) {
    setSecondNumber(event.target.value);
  }

  function addHandler () {
    const totalsuma = parseFloat(firstNumber) + parseFloat(secondNumber);
    setResult(totalsuma)
  }

  function substractHandler () {
    const totalresta = parseFloat(firstNumber) - parseFloat(secondNumber);
    setResult(totalresta)
  }

  function multiplyHandler () {
    const totalmultiplicacion = parseFloat(firstNumber) * parseFloat(secondNumber);
    setResult(totalmultiplicacion)
  }

  function divideHandler () {
    const totaldivision = parseFloat(firstNumber) / parseFloat(secondNumber);
    setResult(totaldivision)
  }

  function clean () {
    setResult("")
    setFirstNumber("")
    setSecondNumber("")
    console.log("Resultado eliminado");
  }

  useEffect(
    ()=>{
      console.log("firstNumber state:", firstNumber);
      console.log("secondNumber state:", secondNumber);
    }
  )

  return (
    <>
      <h1>Calculadora</h1>
      <input type="text" value={firstNumber} onChange={changeFirstNumberHandler}/>
      <button type="button" onClick={addHandler}>+</button>
      <button type="button" onClick={substractHandler}>-</button>
      <button type="button" onClick={multiplyHandler}>x</button>
      <button type="button" onClick={divideHandler}>/</button>
      <input type="text" value={secondNumber} onChange={changeSecondNumberHandler}/>
      <p>{result}</p>
      <button type="button" onClick={clean}>Limpiar</button>
      {/*<button type="button" onClick={historial}>M+</button>*/}
    </>
  );
}

export default App;
