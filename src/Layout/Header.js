/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { Navbar, NavbarBrand, NavbarText } from "reactstrap";

import { Link } from "react-router-dom";

import gr2 from "./gr2.png";

const Header = () => {
    return (
        <div className="sticky-top">
            <Navbar color="dark" light expand="md" className=" HeadFootBG">
                <NavbarBrand>
                    <Link
                        to={"/"}
                        className="text-white text-decoration-none ms-2"
                    >
                        {" "}
                        <img src={gr2} width={30} height={30} />
                        Get Movie
                    </Link>
                </NavbarBrand>
                <NavbarText className="text-white"></NavbarText>
            </Navbar>
        </div>
    );
};

export default Header;
