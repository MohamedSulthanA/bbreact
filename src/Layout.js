import React from "react";
import "./Layout.css";
import { Outlet, Link } from "react-router-dom";
export default function Layout() {
  return (
    <div>
      <nav>
        <ul className="navi">
          <li>
            <Link className="nn"to="/">Home</Link>
          </li>
          <li>
            <Link className="nn"to="/about">About</Link>
          </li>
          <li>
            <Link className="nn"to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
      <div className="grids">
      <div className="mm">1</div>
      <div className="mm">2</div>
      <div className="mm">3</div>
      <div className="mm">4</div>
      <div className="mm">5</div>
      <div className="mm">6</div>
      </div>
      <Outlet/>
    </div>
  );
}