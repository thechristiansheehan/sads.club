import excel from "./assets/images/excel.png";
import python from "./assets/images/python.png";
import sql from "./assets/images/sql.png";
import tableau from "./assets/images/tableau.png";
import NavBar from "./components/navbar.jsx";
import "./Home.css";

const Resources = () => {
  return (
    <div>
      <NavBar />
      <title>Resources</title>
      <div style={{ marginTop: "80px" }}></div>

      <div
        style={{
          display: "flex",
          gap: "20px",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {/* Intro to Excel */}
        <a
          href="https://github.com/Statistics-and-Data-Science-SMU/SADS-Tutorials/tree/main/Intro%20to%20Excel"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            width: "200px",
            overflow: "hidden",
            textAlign: "center",
            backgroundColor: "#404040",
            color: "white",
            textDecoration: "none",
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.filter = "brightness(85%)")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.filter = "brightness(100%)")
          }
        >
          <img
            src={excel}
            alt="Intro to Excel"
            style={{ width: "100%", height: "200px" }}
          />
          <div style={{ padding: "8px" }}>
            <h4 style={{ margin: 0 }}>Intro to Excel</h4>
          </div>
        </a>

        {/* Intro to Python */}
        <a
          href="https://github.com/Statistics-and-Data-Science-SMU/SADS-Tutorials/tree/main/Intro%20to%20Python"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            width: "200px",
            overflow: "hidden",
            textAlign: "center",
            backgroundColor: "#404040",
            color: "white",
            textDecoration: "none",
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.filter = "brightness(85%)")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.filter = "brightness(100%)")
          }
        >
          <img
            src={python}
            alt="Intro to Python"
            style={{ width: "100%", height: "200px" }}
          />
          <div style={{ padding: "8px" }}>
            <h4 style={{ margin: 0 }}>Intro to Python</h4>
          </div>
        </a>

        {/* Intro to SQL */}
        <a
          href="https://github.com/Statistics-and-Data-Science-SMU/SADS-Tutorials/tree/main/Intro%20to%20SQL"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            width: "200px",
            overflow: "hidden",
            textAlign: "center",
            backgroundColor: "#404040",
            color: "white",
            textDecoration: "none",
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.filter = "brightness(85%)")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.filter = "brightness(100%)")
          }
        >
          <img
            src={sql}
            alt="Intro to SQL"
            style={{ width: "100%", height: "200px" }}
          />
          <div style={{ padding: "8px" }}>
            <h4 style={{ margin: 0 }}>Intro to SQL</h4>
          </div>
        </a>

        {/* Intro to Tableau */}
        <a
          href="https://github.com/Statistics-and-Data-Science-SMU/SADS-Tutorials/tree/main/Intro%20to%20Tableau"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            width: "200px",
            overflow: "hidden",
            textAlign: "center",
            backgroundColor: "#404040",
            color: "white",
            textDecoration: "none",
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.filter = "brightness(85%)")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.filter = "brightness(100%)")
          }
        >
          <img
            src={tableau}
            alt="Intro to Tableau"
            style={{ width: "100%", height: "200px" }}
          />
          <div style={{ padding: "8px" }}>
            <h4 style={{ margin: 0 }}>Intro to Tableau</h4>
          </div>
        </a>
      </div>

      <br />
    </div>
  );
};

export default Resources;
