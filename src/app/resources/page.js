import Nav from "../components/nav"

export default function Page() {
    return <>

    <div className="resources">
    <Nav></Nav>
        <div class="panels"
        >
            <div className="panel">
          <h1>Local Clinics/Hospitals</h1>

          <h3>Hamilton General Hospital</h3>

          <p>Address: 237 Barton St E, Hamilton, ON L8L 2X2</p>
          <p>Hours: Open 24 Hours</p>
          <p>Phone: (905) 521-2100</p>

        <br></br>

          <h3>McMaster Children's Hospital</h3>

          <p>Address: 1200 Main St W, Hamilton, ON L8N 3Z5</p>
          <p>Hours: Open 24 Hours</p>
          <p>Phone: (905) 521-2100</p>
        </div>

        <div className="panel">
            <h1>Emergency</h1>
            <p>Call "911" for Emergency Assistance</p>
        </div>
        </div>
    </div>
    </>
}