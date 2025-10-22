import Modal from "./components/Modal.jsx";
import NavBar from "./components/navbar.jsx";
import "./Home.css";

const MeetTheTeam = () => {
return ( <div> <NavBar /> <title>Meet The Team</title>
<div style={{ marginTop: "80px" }}></div>

```
  <div className="team-grid">
    {/* Nia */}
    <Modal
      trigger={
        <div className="team-card">
          <img src="https://sadseditor-production.up.railway.app/uploads/nia.jpg" alt="Nia Savova" className="team-img" />
          <div style={{ padding: "8px" }}>
            <h4 style={{ margin: 0 }}>Nia Savova</h4>
            <p className="team-role">President</p>
          </div>
        </div>
      }
    >
      <h2 style={{ fontFamily: "RionaSansBlack" }}>Nia Savova</h2>
      <p style={{ fontFamily: "RionaSansMedium", fontSize: "15px" }}>
        President <br/>
        Data Science BS, Computer Science BS, Statistics BS (Math and Business Minors)<br/>
        Undergrad Senior (Graduating 2026) and First Year Grad<br/><br/>
        <a className="header-link" style={{fontSize:"30px", color:"white"}} title="LinkedIn" target="_blank" href="https://www.linkedin.com/in/nia-savova-6b4108296"><i className="fa fa-linkedin"></i></a>
      </p>
      <img src="https://sadseditor-production.up.railway.app/uploads/nia.jpg" style={{ width: "250px" }} alt="inside modal" />
    </Modal>

    {/* Sarah */}
    <Modal
      trigger={
        <div className="team-card">
          <img src="https://sadseditor-production.up.railway.app/uploads/sarah.jpg" alt="Sarah Mendoza" className="team-img" />
          <div style={{ padding: "8px" }}>
            <h4 style={{ margin: 0 }}>Sarah Mendoza</h4>
            <p className="team-role">Vice President</p>
          </div>
        </div>
      }
    >
      <h2 style={{ fontFamily: "RionaSansBlack" }}>Sarah Mendoza</h2>
      <p style={{ fontFamily: "RionaSansMedium", fontSize: "15px" }}>
        Vice President<br/>
        Computer Science BS, Data Science BS<br />
        Undergrad Senior (Graduating 2026)<br />
      </p>
      <img src="https://sadseditor-production.up.railway.app/uploads/sarah.jpg" style={{ width: "300px" }} alt="inside modal" />
    </Modal>

    {/* Margaret */}
    <Modal
      trigger={
        <div className="team-card">
          <img src="https://sadseditor-production.up.railway.app/uploads/mara.jpg" alt="Margaret Alt" className="team-img" />
          <div style={{ padding: "8px" }}>
            <h4 style={{ margin: 0 }}>Margaret Alt</h4>
            <p className="team-role">Lead Project Manager</p>
          </div>
        </div>
      }
    >
      <h2 style={{ fontFamily: "RionaSansBlack" }}>Margaret Alt</h2>
      <p style={{ fontFamily: "RionaSansMedium", fontSize: "15px" }}>
        Lead Project Manager<br/>
        Statistics, Political Science<br />
        Undergrad Senior (Graduating 2026)<br />
      </p>
      <img src="https://sadseditor-production.up.railway.app/uploads/mara.jpg" style={{ width: "300px", height: "300px" }} alt="inside modal" />
    </Modal>

    {/* Hillary */}
    <Modal
      trigger={
        <div className="team-card">
          <img src="https://sadseditor-production.up.railway.app/uploads/hillary.jpg" alt="Hillary Bhuiyan" className="team-img" />
          <div style={{ padding: "8px" }}>
            <h4 style={{ margin: 0 }}>Hillary Bhuiyan</h4>
            <p className="team-role">Treasurer</p>
          </div>
        </div>
      }
    >
      <h2 style={{ fontFamily: "RionaSansBlack" }}>Hillary Bhuiyan</h2>
      <p style={{ fontFamily: "RionaSansMedium", fontSize: "15px" }}>
        Treasurer<br/>
        Financial Economics, Statistics<br/>
        Undergrad Senior (Graduating 2026)<br/>
      </p>
      <img src="https://sadseditor-production.up.railway.app/uploads/hillary.jpg" style={{ width: "300px" }} alt="inside modal" />
    </Modal>

    {/* Radha */}
    <Modal
      trigger={
        <div className="team-card">
          <img src="https://sadseditor-production.up.railway.app/uploads/radha.jpg" alt="Radha Chitgopkar" className="team-img" />
          <div style={{ padding: "8px" }}>
            <h4 style={{ margin: 0 }}>Radha Chitgopkar</h4>
            <p className="team-role">Marketing</p>
          </div>
        </div>
      }
    >
      <h2 style={{ fontFamily: "RionaSansBlack" }}>Radha Chitgopkar</h2>
      <p style={{ fontFamily: "RionaSansMedium", fontSize: "15px" }}>
        Marketing<br/>
        Operations Research, Data Science<br/>
        Undergrad Senior (Graduating 2026)<br/>
      </p>
      <img src="https://sadseditor-production.up.railway.app/uploads/radha.jpg" style={{ width: "300px" }} alt="inside modal" />
    </Modal>

    {/* Christian */}
    <Modal
      trigger={
        <div className="team-card">
          <img src="https://sadseditor-production.up.railway.app/uploads/christian.jpg" alt="Christian Sheehan" className="team-img" />
          <div style={{ padding: "8px" }}>
            <h4 style={{ margin: 0 }}>Christian Sheehan</h4>
            <p className="team-role">Outreach</p>
          </div>
        </div>
      }
    >
      <h2 style={{ fontFamily: "RionaSansBlack" }}>Christian Sheehan</h2>
      <p style={{ fontFamily: "RionaSansMedium", fontSize: "15px" }}>
        Outreach<br/>
        Computer Science BS, Data Science<br/>
        Undergrad Sophomore (Graduating 2028)<br/>
      </p>
      <img src="https://sadseditor-production.up.railway.app/uploads/christian.jpg" style={{ width: "300px" }} alt="inside modal" />
    </Modal>

    {/* Ameen */}
    <Modal
      trigger={
        <div className="team-card">
          <img src="https://sadseditor-production.up.railway.app/uploads/ameen.jpg" alt="Ameen Zia" className="team-img" />
          <div style={{ padding: "8px" }}>
            <h4 style={{ margin: 0 }}>Ameen Zia</h4>
            <p className="team-role">Program Coordinator</p>
          </div>
        </div>
      }
    >
      <h2 style={{ fontFamily: "RionaSansBlack" }}>Ameen Zia</h2>
      <p style={{ fontFamily: "RionaSansMedium", fontSize: "15px" }}>
        Program Coordinator<br/>
        Computer Engineering, Mathematics<br />
        Undergrad Junior (Graduating 2027)<br />
      </p>
      <img src="https://sadseditor-production.up.railway.app/uploads/ameen.jpg" style={{ width: "300px" }} alt="inside modal" />
    </Modal>
  </div>

  <br />
</div>

);
};

export default MeetTheTeam;
