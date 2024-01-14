'use client'
import { redirect } from "next/dist/server/api-utils";
import Nav from "../components/nav"
import QCard from "../components/QCard"
import { useState } from "react"
import gpt from "../openai";
export default function Page() {
    
    const [ index, setIndex ] = useState(0);
    const [ ans, setAns ] = useState({ answers: []});
    const [ qcardDisp, setqcardDisp ] = useState("block"); 
    const [ display, setDisplay ] = useState("0");
    const defaultResponses = ["I am feeling more dizzy than usual","Three","I have headaches","I have been sleeping less due to headaches","I feel cold sometimes","I don't feel an urgent need for medical attention"];
    const questions=[
        "Are you experiencing any new or worsening symptoms today? If yes, please describe them.",
        "On a scale of 1 to 5, with 1 being very poor and 5 being excellent, how would you rate your overall well-being today?",
        "Are you experiencing any side effects from your medications? If yes, please describe them.",
        "Have there been any changes in your diet, physical activity, or sleep patterns that you would like to report?",
        "Do you have any other health concerns or notes you would like to add for today?",
        "Do you feel there is an urgent need for medical attention today?"
    ];
   function next() {
    if (index < questions.length-1)
    setIndex(index+1);
   }
   function redirectAnimation() {
        console.log("redirect");
    if (typeof window !== 'undefined') {
        localStorage.setItem('checkin', JSON.stringify(ans.answers));
        let answers = JSON.parse(localStorage.getItem('checkin'));
        console.log(answers);
    }
        gpt();
        setqcardDisp("none");
        setDisplay("1");
   }
   function save(content) {
        let newArr = ans.answers;
        newArr[index] = content;
        setAns({ answers: newArr });
   }

    return (
    <div className="checkin">
    <Nav></Nav>
    <div style={{ display: `${qcardDisp}`}}>
    <QCard title={`Question ${index+1} out of ${questions.length}`} def={defaultResponses[index]} content={questions[index]} re={redirectAnimation} next={next} save={save} end={(index == questions.length-1)}></QCard>
    </div>
    <div className="thanks" style={{opacity: `${display}`}}>
        Thank you for filling out the daily check-in! Generating report to send to your PSW...
    </div>
    </div>
    )
}