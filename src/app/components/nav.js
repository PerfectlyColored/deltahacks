import Link from 'next/link';

const Nav = () => {
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
          <Link href="/report">
            Report
          </Link>
        </li>
        <li>
          <Link href="checkin">
            Daily Check-in
          </Link>
        </li>
      </ul>
      <hr className="navhr" ></hr>

    </div>
)
}
export default Nav;