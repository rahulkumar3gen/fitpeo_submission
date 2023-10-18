import React from "react";

const Card = () => {
  return (
    <>
      <div className="upper1">
        <div style={{ width: "50%" }}>
          <img
            src="https://www.unrealdigitalgroup.com/wp-content/uploads/2021/01/Header-icon-solid-350x350.png"
            style={{
              height: "100px",
              marginLeft: "10px",
            }}
          />
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              color: "grey",
            }}
          >
            Earning
          </div>
          <div style={{ fontWeight: "bold" }}>$198K</div>
          <div
            className="upperright11"
            style={{
              fontSize: "10px",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <div style={{ color: "green" }}>37.8% </div>
            <div> this month</div>
          </div>
        </div>
      </div>
      <div className="upper1">
        <div style={{ width: "50%" }}>
          <img
            src="https://www.iconbunny.com/icons/media/catalog/product/cache/2/thumbnail/600x/1b89f2fc96fc819c2a7e15c7e545e8a9/2/9/2920.9-invoice-icon-iconbunny.jpg"
            style={{
              height: "100px",
              marginLeft: "10px",
            }}
          />
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              color: "grey",
            }}
          >
            Orders
          </div>
          <div style={{ fontWeight: "bold" }}>$2.4K</div>
          <div
            className="upperright11"
            style={{
              fontSize: "10px",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <div style={{ color: "red" }}>2% </div>
            <div> this month</div>
          </div>
        </div>
      </div>

      <div className="upper1">
        <div style={{ width: "50%" }}>
          <img
            src="https://i0.wp.com/www.maxwellmoney.com/wp-content/uploads/2016/07/icon-wallet-blue.png?ssl=1"
            style={{
              height: "100px",
              marginLeft: "10px",
            }}
          />
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              color: "grey",
            }}
          >
            Balance
          </div>
          <div style={{ fontWeight: "bold" }}>$2.4K</div>
          <div
            className="upperright11"
            style={{
              fontSize: "10px",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <div style={{ color: "red" }}>2% </div>
            <div> this month</div>
          </div>
        </div>
      </div>

      <div className="upper1">
        <div style={{ width: "50%" }}>
          <img
            src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcS5j2A5wpJB_kZIpT9qF-P42imeQE_YZL3zIWx0e43Ls74BUThk"
            style={{
              height: "100px",
              marginLeft: "10px",
              borderRadius: "100px",
            }}
          />
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              color: "grey",
            }}
          >
            Total sales
          </div>
          <div style={{ fontWeight: "bold" }}>$89K</div>
          <div
            className="upperright11"
            style={{
              fontSize: "10px",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <div style={{ color: "green" }}>11% </div>
            <div> this month</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
