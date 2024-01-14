'use client'
import { useState } from "react";
import Meds from "./Meds";
import Medstaken from "./Medstaken";
const Medtracker = () => {
    const [ medsArr, setMedsArr ] = useState([{name: "aidan"},{name:"ibuprofen"}]);
    const [ takenMedsArr, setTakenMedsArr ] = useState([{name:"acet"},{name:"acet2"}]);
  
  function filterByValue(array, string) {
    console.log("the string is " + string);
    var newArray = array.filter (function (o) {
      return o.name != string;
    })
        return newArray;
  }

  function takeMeds(name) {
    var newArray = filterByValue(medsArr, name);
    setMedsArr(newArray);
    setTakenMedsArr([ ...takenMedsArr, {name: `${name}`}]);
  }
  
  function untakeMeds(name) {
    var newArray = filterByValue(takenMedsArr, name);
    setTakenMedsArr(newArray);
    setMedsArr([ ...medsArr, {name: `${name}`}]);
  }
  

return (
    <div className="panel">
        <h1>Medication Tracker</h1>
        <Meds takeMeds={takeMeds} medsArr={medsArr}></Meds>
        <hr className="separator"></hr>
        <h1>Completed</h1>
        <Medstaken untakeMeds={untakeMeds} medsArr={takenMedsArr}></Medstaken>
      
      </div>
)
}
export default Medtracker;