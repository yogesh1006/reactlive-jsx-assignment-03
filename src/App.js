import "./styles.css";
import React from "react";
const nestedHeaderWithReactCreateElement = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    React.createElement(
      "h2",
      null,
      React.createElement("h3", { className: "title" }, "Namaste React")
    )
  )
);

const nestedHeaderElementWithJsx = (
  <div>
    <h1>
      <h2>
        <h3 className="title">Hi</h3>
      </h2>
    </h1>
  </div>
);

const NestedHeaderElementWithJsxComponent = ({ title }) => (
  <div>
    <h1>
      <h2>
        <h3 className="title">Hi, Namaste {title}</h3>
      </h2>
    </h1>
  </div>
);

//search bar functional comp
const SearchBar = () => (
  <div className="searchBar">
    <input type="search" name="q" placeholder="Search..." />
    <button>Search</button>
  </div>
);

const HeaderComp = () => {
  return (
    <header className="header">
      <div className="logo">
        <img
          alt="logo"
          width="50"
          src="https://toppng.com/uploads/preview/aming-logos-png-gamer-logo-png-hd-11562862512hoxwywe94a.png"
        />
      </div>
      <SearchBar />
      <div>
        <span role="img" aria-label="" style={{ fontSize: "50px" }}>
          &#128114;
        </span>
      </div>
    </header>
  );
};

const App = () => {
  return (
    <>
      <HeaderComp />
      {nestedHeaderWithReactCreateElement}
      {nestedHeaderElementWithJsx}
      <NestedHeaderElementWithJsxComponent title={"React"} />
    </>
  );
};
export default App;
