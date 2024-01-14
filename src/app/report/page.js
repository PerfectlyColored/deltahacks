'use client'
import Nav from "../components/nav"
import { useState, useEffect } from "react";
export default function Page() {

    const [ report, setReport] = useState();
    useEffect(() => {
      let report = localStorage.getItem('report');
      report = report.replace(/(?:\r\n|\r|\n)/g, '<br>');
      setReport(report);
    }, []);
    

    return (
        <div className="report">
            
    <Nav></Nav>
            <div className="panel">
                { report ?  <div dangerouslySetInnerHTML={{ __html: report }} /> : <p>Error, no report foudn</p>}
            </div> 
        </div>
    )
}