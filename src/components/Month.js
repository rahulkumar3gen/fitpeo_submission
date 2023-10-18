import React from "react";

const Month = (props) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          height: props.height,
          width: "40px",
          backgroundColor: props.color,
          borderRadius: "8px",
        }}
      ></div>
      <p style={{ fontWeight: "bold", color: "gray", fontSize: "13px" }}>
        {props.name}
      </p>
    </div>
  );
};

export default Month;
