import React from 'react'
import { useState } from 'react'
import './Jokenpo.css'

var lastSelect = ""

function Jokenpo(){

    // Valores para o placar
    const [userScore, setUserScore] = useState<number>(0)
    const [computerScore, setComputerScore] = useState<number>(0)

    //Valores para as escolhas do usuário
    const [userSelected, setUserSelected] = useState<string>("")
    const [computerSelected, setComputerSelected] = useState<string>("")

    //States Para os botoes
    const [btn1Disabled, setBt1Disabled] = useState<boolean>(false)
    const [btn2Disabled, setBt2Disabled] = useState<boolean>(false)
    const [btn3Disabled, setBt3Disabled] = useState<boolean>(false)

    //State para o resultado
    const [result, setResult] = useState<string>("")

    //Escolhas do computador
    interface escolhasInterface {
        0: string,
        1: string,
        2: string
    }
    const escolhas: escolhasInterface = {
        0: "🗿",
        1: "📜",
        2: "✂️"
    }

    function startGame(num: number){

        setBt1Disabled(true);
        setBt2Disabled(true);
        setBt3Disabled(true);

        let computerChoice = escolhas[(Math.floor(Math.random() * 3)) as keyof typeof escolhas];
        if(computerChoice == lastSelect){
            computerChoice = escolhas[(Math.floor(Math.random() * 3)) as keyof typeof escolhas]
        }
    
        lastSelect = computerChoice
        // console.log(computerChoice)

        setUserSelected(escolhas[(num) as keyof typeof escolhas])
        setComputerSelected(computerChoice)
        
        interface resultInterface {
            "🗿": () => void,
            "📜": () => void,
            "✂️": () => void
        }
        const result: resultInterface = {
            "🗿": () => {
                computerChoice == "🗿" ? setResult("Empate!") : ""
                computerChoice == "📜" ? (setResult("Você perdeu!"), setComputerScore(computerScore + 1)) : ""
                computerChoice == "✂️" ? (setResult("Você venceu!"), setUserScore(userScore + 1)) : ""
            },
            "📜": () =>{
                computerChoice == "📜" ? setResult("Empate!") : ""
                computerChoice == "✂️" ? (setResult("Você perdeu!"), setComputerScore(computerScore + 1)) : ""
                computerChoice == "🗿" ? (setResult("Você venceu!"), setUserScore(userScore + 1)) : ""
            },
            "✂️": () =>{
                computerChoice == "✂️" ? setResult("Empate!") : ""
                computerChoice == "🗿" ? (setResult("Você perdeu!"), setComputerScore(computerScore + 1)): ""
                computerChoice == "📜" ? (setResult("Você venceu!"), setUserScore(userScore + 1)) : ""
            }
        }
        
        let user = escolhas[(num) as keyof typeof escolhas]
        result[(user) as keyof typeof result]()
    
        setTimeout(() => {
            setBt1Disabled(false);
            setBt2Disabled(false);
            setBt3Disabled(false);
            setUserSelected("")
            setComputerSelected("")
            setResult("")
        }, 1500);
    }   


    return(
    <div className="containerItem">
        <h2>Pedra, Papel, Tesoura</h2>
        <div className='placar'>
            <div>
                Usuário
                <span>{userScore}</span>
            </div>
            <div>
                Computador
                <span>{computerScore}</span>
            </div>        
        </div>
        <div className='selectItem'>
            <button disabled={btn1Disabled} onClick={()=>{startGame(0)}} >🗿</button> 
            <button disabled={btn2Disabled} onClick={()=>{startGame(1)}} >📜</button>
            <button disabled={btn3Disabled} onClick={()=>{startGame(2)}} >✂️</button>
        </div>
        <div className='result'>
            <div className='choice'>
                <h3>Sua escolha:</h3>
                <span>{userSelected}</span>
            </div>
            <div className='choice'>
                <h3>Computador:</h3>
                <span>{computerSelected}</span>
            </div>
        </div>
        <h1 style={{marginTop: "40px"}}>{result}</h1>
    </div>
    )
}

export default Jokenpo