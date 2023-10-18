import React from "react";

const Nav = () => {
  return (
    <>
      <div className="uppernav">
        <img
          src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcThYvYV3452RC29Kc9weB8US9W0BPt9UKdah-9D2K9B2i9T7sIe"
          style={{
            height: "35px",
            marginRight: "5px",
            borderRadius: "15px",
          }}
        />
        <h4>Dashboard</h4>
      </div>
      <div className="lowernav">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKOcF2iwRTRDglXoH-4nqhbMaXiAWeCvlZMpBTb-ZaT0fzzIUw"
          style={{
            height: "25px",
            width: "25px",
            borderRadius: "10px",
            marginRight: "8px",
          }}
        />
        <p>Dashboard</p>
      </div>
      <div className="productnav">
        <a href="#">
          <img
            src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRFIutF4MuAw7VTU0BBr3VdJQfK9k74n11TINDAzWHUfwVvkf5C"
            style={{
              height: "25px",
              marginLeft: "10px",
              marginRight: "5px",
            }}
          />
          Product
        </a>
      </div>
      <div className="customernav">
        <a href="#">
          <img
            src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSUW4JrYH8LV_zWJnl9JUIGu2ffSdDtmtpNWos8Wb_psexQdfg_"
            style={{
              height: "20px",
              marginLeft: "10px",
              marginRight: "5px",
              borderRadius: "10px",
            }}
          />
          Customer
        </a>
      </div>
      <div className="incomenav">
        <a href="#">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQL7j9EqLGuXRUi7by2yCTGKxzZbMihjWARMEmS_jnaJuvEMn7DdXW1342ySiQ61Yi3a_Q&usqp=CAU"
            style={{
              height: "20px",
              marginLeft: "10px",
              marginRight: "5px",
              borderRadius: "10px",
            }}
          />
          Income
        </a>
      </div>
      <div className="incomenav">
        <a href="#">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqVOM3E6PSU-RCcwQoFsFntDOQy_fAGijIJQ&usqp=CAU"
            style={{
              height: "20px",
              marginLeft: "10px",
              marginRight: "5px",
              borderRadius: "10px",
            }}
          />
          Promote
        </a>
      </div>
      <div className="incomenav">
        <a href="#">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0nEW7_06pd1ZOtj-tE-EusF0UdAJEpWNGkg&usqp=CAU"
            style={{
              height: "20px",
              marginLeft: "10px",
              marginRight: "5px",
              borderRadius: "10px",
            }}
          />
          Help
        </a>
      </div>
    </>
  );
};

export default Nav;
