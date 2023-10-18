import React from "react";

const User = () => {
  return (
    <>
      <div className="user">
        <nav className="navbar">
          <div className="container-fluid">
            <a className="navbar-brand">Hello Sharukh</a>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
            </form>
          </div>
        </nav>
      </div>
    </>
  );
};

export default User;
