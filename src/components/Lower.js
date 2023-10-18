import React from "react";

const Lower = () => {
  return (
    <>
      <div className="lower1">
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div>
            <div style={{ fontWeight: "bold" }}>Product sell</div>
            <div
              style={{
                color: "grey",
                marginTop: "10px",
                fontWeight: "bold",
                color: "gray",
              }}
            >
              Product name
            </div>
            <div
              style={{
                fontWeight: "bold",
                display: "flex",
                marginTop: "10px",
              }}
            >
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQAzbOEBZfxdoQUMeEfOJtO8teLP2LWGfeiQ&usqp=CAU"
                style={{ height: "30px", borderRadius: "5px" }}
              />
              <div style={{ paddingLeft: "10px" }}>Abstract 3D</div>
            </div>
            <div
              style={{
                fontWeight: "bold",
                display: "flex",
                marginTop: "10px",
              }}
            >
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMZPNTNqz0gBhTmdUxulfDMcV9UWhSmaIFbQ&usqp=CAU"
                style={{
                  height: "30px",
                  width: "53px",
                  borderRadius: "5px",
                }}
              />
              <div style={{ paddingLeft: "10px" }}>Sarphens illustration</div>
            </div>
          </div>
          <div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div>
                <input
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                  style={{
                    marginRight: "10px",
                    border: "none",
                    fontSize: "15px",
                    fontWeight: "bold",
                  }}
                />
              </div>
              <div>
                <select
                  name="time"
                  id="time"
                  style={{
                    height: "18px",
                    fontSize: "13px",
                    fontWeight: "bold",
                    border: "none",
                    color: "grey",
                  }}
                >
                  <option>Last 30 days</option>
                  <option>Last 6 months</option>
                  <option>Last year</option>
                </select>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: "10px",
              }}
            >
              <div
                style={{
                  color: "grey",
                  fontSize: "15px",
                  fontWeight: "bold",
                  color: "gray",
                }}
              >
                Stock
              </div>
              <div
                style={{
                  color: "grey",
                  fontSize: "15px",
                  fontWeight: "bold",
                  color: "gray",
                }}
              >
                Price
              </div>
              <div
                style={{
                  color: "grey",
                  fontSize: "15px",
                  fontWeight: "bold",
                  color: "gray",
                }}
              >
                Total sales
              </div>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: "13px",
              }}
            >
              <div
                style={{
                  fontSize: "13px",
                  fontWeight: "bold",
                  color: "gray",
                }}
              >
                32 in stock
              </div>
              <div
                style={{
                  fontSize: "15px",
                  fontWeight: "bold",
                  paddingRight: "30px",
                }}
              >
                45.99$
              </div>
              <div
                style={{
                  fontSize: "13px",
                  paddingRight: "30px",
                  fontWeight: "bold",
                  color: "gray",
                }}
              >
                20
              </div>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: "13px",
              }}
            >
              <div
                style={{
                  fontSize: "13px",
                  fontWeight: "bold",
                  color: "gray",
                }}
              >
                32 in Stock
              </div>
              <div
                style={{
                  fontSize: "15px",
                  fontWeight: "bold",
                  paddingRight: "30px",
                }}
              >
                45.99$
              </div>
              <div
                style={{
                  fontSize: "13px",
                  paddingRight: "30px",
                  fontWeight: "bold",
                  color: "gray",
                }}
              >
                20
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Lower;
