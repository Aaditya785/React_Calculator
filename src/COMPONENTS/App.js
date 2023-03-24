import React, { useState } from 'react'
import Buttons from './Buttons';
import Result from './Result';
import './calc.css';

const App = () => {
    const [result, setResult] = useState('');

    function handleclicks(value) {
        switch (value) {
            case '0':
            case '1':
            case '2':
            case '3':
            case '4':
            case '5':
            case '6':
            case '7':
            case '8':
            case '9':
            case '.':
            case '+':
            case '-':
            case '/':
            case '*':
                if (result === "0") {
                    setResult(value);
                } else {
                    setResult(result + value);
                }
                break;
            case '=':
                // console.log(result);
                setResult(eval(result));
                break;
            case 'c':
                setResult('');
                break;
            case '+/-':
                setResult(parseInt(result,10) * -1)
                break;
            case '%':
                // setResult(parseFloat(result,10) / 100)
                setResult(result + value);

                break;
            default:
                break;
        }

    }

    return (
        <div className="myCalculator" >
            <Result result={result} />
            <Buttons Buttonclicked={handleclicks} />
        </div>
    )
}

export default App