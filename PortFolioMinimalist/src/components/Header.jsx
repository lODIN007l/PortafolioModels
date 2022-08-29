import { useState, useEffect } from "react";
import Logo from "../assets/img/logo.svg";
//jsx
import Nav from "./Nav";
import NavMobile from "./NavMobile";
import Socials from "./Socials";

const Header = () => {
  const [bg, setBg] = useState("");
  return (
    <header>
      <div className="container mx-auto">Header</div>
    </header>
  );
};

export default Header;
