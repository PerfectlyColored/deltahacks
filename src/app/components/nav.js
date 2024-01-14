import Link from 'next/link';
import { useEffect } from 'react';
import { useState } from 'react';
const Nav = () => {

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
    <div className="navDiv">
      <ul className="nav">
        <li>
          <Link href="/resources">
             Resources
          </Link>
        </li>
        <li>
          <Link href="/profile">Profile</Link>
        </li>
        <li className="logo">
          <Link href="/"> CareLink</Link>
          </li>
        <li>
          <Link className={!profComplete ? 'disabled' : ''} href="/report">
            Report
          </Link>
        </li>
        <li>
          <Link className={!profComplete ? 'disabled' : ''} href="checkin">
            Daily Check-in
          </Link>
        </li>
      </ul>
      <hr className="navhr" ></hr>

    </div>
)
}
export default Nav;