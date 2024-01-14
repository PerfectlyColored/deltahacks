import { useState } from "react";
import gpt from "../openai";
import { useEffect } from "react";
const QCard = ({ title, content, save, next, end, re, def }) => {

    const [index,setIndex] = useState(1);
    const [cont,setCont] = useState(def);
    const defaultResponses = ["I am feeling more dizzy than usual","Three","I have headaches","I have been sleeping less due to headaches","I feel cold sometimes","I don't feel an urgent need for medical attention"];
   
    function handleClick(e) {
        e.preventDefault();
        setIndex(index+1);
        save(cont);
        next();
        console.log(index);
        setCont(defaultResponses[index]);
        if (end) {
            console.log("sending email");
            gpt();
            re();
        }
    }

  


    return (
        <div className="card">
            <p>{title}</p>
            <p className="cardcontent">{content}</p>
            <form className="form">
            <textarea name="response" value={cont} onChange={(e)=> { setCont(e.target.value)}} placeholder="Answer in this box.">
            </textarea>
{
                !end ? (<button type="submit" className="btn" onClick={(e)=>{handleClick(e)}} >
                Next
            </button>) : (<button type="submit" className="btn" onClick={(e)=>{handleClick(e)}}>
                Complete
            </button>)
            }
            </form>
          
          
        </div>
    )
}
export default QCard;