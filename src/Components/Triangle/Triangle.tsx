import React from 'react'
import { useState } from 'react'
import './Triangle.css'

function triangle(){
    const [inputClass, setInputClass] = useState<string>("correct")
    const [input2Class, setInput2Class] = useState<string>("correct")
    const [inputPlaceholder, setInputPlaceholder] = useState<string>("Insira o valor da base do triângulo(cm²)")
    const [input2Placeholder, setInput2Placeholder] = useState<string>("Insira o valor da altura do triângulo(cm²)")
    const [inputValue, setInputValue] = useState<number>(0)
    const [input2Value, setInput2Value] = useState<number>(0)
    const [area, setAreaString] = useState<string>()
    
    function getAreaTriangulo(){
        let ver1 = true
        let ver2 = true 
        if((isNaN(inputValue) || inputValue < 1)){
          setInputClass("incorrect")
          setInputPlaceholder("Preencha esse campo corretamente")
          ver1 = false
        }
        if((isNaN(input2Value) || input2Value < 1)){
          setInput2Class("incorrect")
          setInput2Placeholder("Preencha esse campo corretamente")
          ver2 = false
        }
    
        if(ver1 && ver2){
          let base = inputValue;
          let altura = input2Value;
          let area = (base * altura) / 2;
          setAreaString("O valor da área do triangulo "+ area +"cm²")
        }
        else{
            setAreaString("")
        }
    }

    return (
    <div className="containerItem">
        <h2>Calculo da área do triangulo</h2>
          <input type="number" placeholder={inputPlaceholder} className={inputClass} 
            onChange={(value)=>setInputValue(parseInt(value.target.value))}
            onClick={() => {setInputClass("correct"), setInputPlaceholder("Insira o valor da base do triângulo(cm²)")}}/>
          
          <input type="number" placeholder={input2Placeholder} className={input2Class}
            onChange={(value)=>setInput2Value(parseInt(value.target.value))}
            onClick={() => {setInput2Class("correct"), setInput2Placeholder("Insira o valor da altura do triângulo(cm²)")}}/>

          <button className="btnCalcular" onClick={getAreaTriangulo} >Calcular área do triângulo</button>
          <h3>{area}</h3>
    </div>
    )
}

export default triangle