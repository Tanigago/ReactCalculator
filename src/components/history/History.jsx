function History({ results }) {
  const listaResultados = results.map(
    elemento =>
      <li>La operación entre {elemento.firstNumber} y {elemento.secondNumber} es {elemento.result}</li>
  )

  return (
    <ul>
      {listaResultados}
    </ul>
  );
}

export default History