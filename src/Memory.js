
function History(props) {
    return (
        <div>
            <h1>Historial</h1>
            {props.pHtmlElementsArray.map (item => <p>{item}</p>)}
        </div>
    )
}

{/*export default History;

{props.resultados.map((elemento) => 
    <li>La suma de {elemento.valor1} y {elemento.valor2} es {elemento.resultado}</li>
  )}
*/}