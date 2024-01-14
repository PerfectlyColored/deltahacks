'use client'
import { redirect } from "next/dist/server/api-utils";
import Nav from "../components/nav"
import QCard from "../components/QCard"
import { useState } from "react"
export default function Page() {
    
    const [ index, setIndex ] = useState(0);
    const [ ans, setAns ] = useState({ answers: []});
    const questions=[{title: "First q", content: "content"},{title: "second q", content: "content"}]
   function next() {
    if (index < questions.length-1)
    setIndex(index+1);
   }
   function redirectAnimation() {
    //     console.log("redirect");
    // if (typeof window !== 'undefined') {
    //     let answers = localStorage.getItem('checkin');
    //     console.log(answers);
    //     localStorage.setItem('checkin', ans.answers);
    // }
        window.location.replace("/");
   }
   function save(content) {
        console.log("new content saving is " + content);
        let newArr = ans.answers;
        newArr[index] = content;
        setAns({ answers: newArr });
        console.log(ans);
   }

    return (
    <div className="checkin">
    <Nav></Nav>
    <h1>{index}</h1>
    <QCard title={questions[index].title} re={redirectAnimation}next={next} save={save} end={(index == questions.length-1)}></QCard>
    </div>
    )
}