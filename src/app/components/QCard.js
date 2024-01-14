import { useState } from "react";

const QCard = ({ title, content, save, next, end, re }) => {

    const [cont,setCont] = useState("");
    function handleClick(e) {
        e.preventDefault();
        console.log(cont);
        save(cont);
        next();

        if (end) {
            re();
        }
    }

    return (
        <div className="card">
            <h1>{title}</h1>
            <p>{content}</p>
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