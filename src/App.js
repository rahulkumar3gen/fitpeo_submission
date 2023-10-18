import "./App.css";
import Nav from "./components/Nav";
import { Data } from "./components/Data";
import Month from "./components/Month";
import Pie from "./components/Pie";
import Card from "./components/Card";
import User from "./components/User";
import Lower from "./components/Lower";

function App() {
  return (
    <>
      <div className="page">
        <div className="nav">
          <Nav />
        </div>

        <div className="main">
          <User />

          <div className="upper">
            <Card />
          </div>

          <div className="middle">
            <div className="middle1">
              <div className="middletop">
                <div className="middletopleft">
                  <h5 style={{ margin: "0px" }}>Overview</h5>
                  <p
                    style={{
                      color: "grey",
                      fontSize: "13px",
                      fontWeight: "bold",
                    }}
                  >
                    Monthly Earning
                  </p>
                </div>

                <select
                  name="select"
                  id="month"
                  style={{
                    height: "18px",
                    fontSize: "13px",
                    fontWeight: "bold",
                    border: "none",
                    color: "grey",
                  }}
                >
                  <option>Month</option>
                  <option>Quarterly</option>
                  <option>Yearly</option>
                </select>
              </div>
              <div className="middlebottom">
                {Data.map((item) => {
                  return (
                    <Month
                      key={item.name}
                      name={item.name}
                      height={item.height}
                      width={item.width}
                      color={item.color}
                    />
                  );
                })}
              </div>
            </div>
            <div className="middle2">
              <div className="middle2top">
                <h5>Customers</h5>
                <p
                  style={{
                    marginLeft: "15px",
                    color: "grey",
                    fontSize: "10px",
                  }}
                >
                  Customers that buy products
                </p>
                <p
                  style={{
                    marginLeft: "15px",

                    fontSize: "12px",
                    fontWeight: "bold",
                  }}
                >
                  65% total new customers
                </p>
              </div>
              <div className="middle2bottom">
                <Pie />
              </div>
            </div>
          </div>

          <div className="lower">
            <Lower />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
