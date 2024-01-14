import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link';
import Nav from './components/nav';
import Medtracker from './components/Medtracker';
export default function Home() {

  return (
    <div className="home">
      
    <Nav></Nav>

    <div className="panels">
      <Medtracker></Medtracker>
      <div className="righthomepanel">
        <div className="panel">
          <h1>Did you complete your daily check-in?</h1>
          <a className="btn" href="/">Complete check-in now</a>
        </div>
        <div className="panel">
          <h1>PSW Contact Info</h1>
          <a className="btn" href="/">Get Help</a>
        </div>
        <div className="panel">
          <h1>History</h1>
          <p>These past few days, you've been feeling</p>
        </div>
      </div>

    </div>
 
  </div>

  )
}
