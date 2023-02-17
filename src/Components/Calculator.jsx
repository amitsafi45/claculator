import { useState } from "react";

export const Calculator = () => {
    const [current, setCurrent] = useState("")
    const [previous,setPrevious]=useState('')
    const [operations,setOperations]=useState('')
    const appendValueHandler = (el) => {
        const value = el.target.getAttribute('data')
        if(value==='.'&&current.includes('.'))return
        setCurrent(current + value)
    }
    const deleteHandler=()=>{
          setCurrent(String(current).slice(0,-1))
    }
    const allClearHandler=()=>{
        setCurrent('')
        setOperations('')
        setPrevious('')
    }
    const chooseOperationHandler=(el)=>{
           if(current==='')return 
           if(previous !==''){
              let value=compute()
              setPrevious(value)
           }else{
            setPrevious(current)
           }    
           setCurrent('')
           setOperations(el.target.getAttribute('data'))
    }
    const equalHandler=()=>{
            let value=compute()
            if(value===undefined||value===null)return
            setCurrent(value)
            setPrevious('')
            setOperations('')
    }
    const compute=()=>{
          let result;
          const previousNumber=parseInt(previous)
          const currentNumber=parseInt(current)
          if(isNaN(previousNumber)||isNaN(currentNumber)) return
          switch(operations){
            case '+':
                result= previousNumber+currentNumber;
                break;
            case '-':
                result= previousNumber-currentNumber;
                break;
            case '/':
                result= previousNumber/currentNumber;
                break;
            case '*':
                result= previousNumber*currentNumber;
                break;
            default:
                return
          }
          return result
    }
    return (
        <>
            <div className="container">
                <div className="screen">
                    <div className="previous">{previous}{operations}</div>
                    <div className="current">{current}</div>

                </div>

                <button className="button merge" onClick={allClearHandler}>AC</button>
                <button className="button" onClick={deleteHandler}>DEL</button>

                <button className="button" data={9} onClick={appendValueHandler}>9</button>
                <button className="button" data={8} onClick={appendValueHandler}>8</button>
                <button className="button" data={7} onClick={appendValueHandler}>7</button>
                <button className="button" data={6} onClick={appendValueHandler}>6</button>
                <button className="button" data={5} onClick={appendValueHandler}>5</button>
                <button className="button" data={4} onClick={appendValueHandler}>4</button>
                <button className="button" data={3} onClick={appendValueHandler}>3</button>
                <button className="button" data={2} onClick={appendValueHandler}>2</button>
                <button className="button" data={1} onClick={appendValueHandler}>1</button>
                <button className="button" data={0} onClick={appendValueHandler}>0</button>
                <button className="button" data={'/'} onClick={chooseOperationHandler}>/</button>
                <button className="button" data={'+'} onClick={chooseOperationHandler}>+</button>
                <button className="button" data={'-'} onClick={chooseOperationHandler}>-</button>
                <button className="button" data={'*'} onClick={chooseOperationHandler}>*</button>
                <button className="button merge" onClick={equalHandler}>=</button>
                <button className="button" data={'.'} onClick={appendValueHandler}>.</button>

            </div>
        </>

    )
}