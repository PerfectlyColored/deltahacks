'use client'
import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link';
import { useEffect } from 'react';
import Nav from './components/nav';
import Medtracker from './components/Medtracker';
import gpt from './openai';
import { useState } from 'react';
export default function Home() {
  const [ profComplete, setProfComplete] = useState(true);
useEffect(() => {
  let p = JSON.parse(localStorage.getItem('profile'));
  if (p) {
    setProfComplete(true);
  } else {
    setProfComplete(false);
  }
}, []);

  return (
    <div className="home">
      
    <Nav></Nav>
    {
      !profComplete && <h1>You must complete your profile!</h1>
    }
     <div className="panels">
      <Medtracker></Medtracker>
      <div className="righthomepanel">
        <div className="panel">
          <h1>Did you complete your daily check-in?</h1>
          <a className="btn" href="/checkin">Complete check-in now</a>
        </div>
          <a className="help btn" href="/resources">Get Emergency Help</a>
        
      
      </div>

    </div>
 
  </div>

  )
}
