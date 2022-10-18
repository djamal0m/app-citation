import { useState, useEffect } from "react";
import './App.css';
import axios from "axios";

const App = () => {

    const [quote, setQuote] = useState(['...']);
    const getQuote = () => {

        axios.get('https://api.quotable.io/random')
        .then((res) => {
            console.log(res.data)
            setQuote(res.data.content);

        }).catch(err => {
            console.log(err)
        });
    }

    useEffect(() => {
        
        const interval = setInterval(()=>{
            getQuote()
        }, 8000);

        return () => {
            clearInterval(interval)
        };

    },[]);

    return(
       <div className="App">
            <h1>Citation: </h1>
            <p>{quote}</p>
       </div>
    );
}

export default App;