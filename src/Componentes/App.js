import { useState } from 'react';
import Salida from './Salida';
import  Operacion  from './Operacion';
import series from './series.png'

function App () {

  const [entrada,setEntrada] = useState('');
    const [resultado,setResultado] = useState('');

    const limpiar = () => {setEntrada(''); setResultado('');}
    
    const calcular = () => {
        if(entrada !=='' && entrada>0){
            var resultado = Operacion(entrada);
            setResultado(resultado);
        }
        else{
            alert("Solo se aceptan números enteros positivos mayores a 0, por favor intente de nuevo.");
        }
    }

    return (
      <div>
        <div name = "encabezado">
          <h1>Prueba técnica</h1>
          <p>El siguiente formulario toma un numero entero positivo (n) y devuelve el resultado de las siguientes operaciones: </p>
          <img alt="" src={series} width="300"/><br></br>
          <input type='number' value={entrada} onChange={evento => setEntrada(evento.target.value)}></input>
          <button onClick={calcular}>Calcular</button>
          <button onClick={limpiar}>Limpiar</button>
        </div>
        <Salida valor={resultado}/>
      </div>
      
    )
  
}

export default App;
