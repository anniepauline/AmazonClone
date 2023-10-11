import { React, useState } from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import SideNav from "./SideNav";
import "./Navbar.css";

// All nav items list array
const navItemList = [
    { id: 0, title: "Amazon miniTV", hrefLink: "#" },
    { id: 1, title: "Sell", hrefLink: "#" },
    { id: 2, title: "Best Sellers", hrefLink: "#" },
    { id: 3, title: "Today's Deals", hrefLink: "#" },
    { id: 4, title: "Mobiles", hrefLink: "#" },
    { id: 5, title: " Customer Service", hrefLink: "#" },
    { id: 6, title: "Prime", hrefLink: "#" },
    { id: 7, title: "New Releases", hrefLink: "#" },
    { id: 8, title: "Electronics", hrefLink: "#" },
    { id: 9, title: "Gift Ideas", hrefLink: "#" },
    { id: 10, title: "Fashion ", hrefLink: "#" },
    { id: 11, title: "Home&Kitchen ", hrefLink: "#" },
    { id: 12, title: "Computers", hrefLink: "#" },
    { id: 14, title: "Amazon Pay ", hrefLink: "#" },
    { id: 15, title: "Books ", hrefLink: "#" },
    { id: 14, title: "Coupons  ", hrefLink: "#" },
    { id: 14, title: "Toys&Games  ", hrefLink: "#" },
    { id: 14, title: "Home Improvement  ", hrefLink: "#" },
];
function Navbar() {
    const [sideNavVisibility, toggleSideNavVisibility] = useState(false);

    return (
        <div className="nav " >
            <nav
                className="navbar navbar-black "
                style={{ backgroundColor: "#222f3e" }}
            >
                <div className="navbar__complete nav__item ">

                    <div class="pos-f-t " className="navbar_hamburger">
                        <button class="navbar-toggler navbar-dark" style={{ backgroundColor: "#222f3e" }}
                            type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent"
                            aria-controls="navbarToggleExternalContent" aria-expanded="false"
                            aria-label="Toggle navigation"
                            onClick={(_) => {
                                toggleSideNavVisibility(true);
                            }}>

                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <p style={{ color: "white", weight: "bold" }}>All</p>
                    </div>
                    <ul>
                        {navItemList?.map((navItem) => (
                            <li><a
                                className="navbar-brand white-text"
                                key={navItem.id}
                                href={navItem.hrefLink}
                            >
                                {navItem.title}
                                {navItem.title === "Browsing History" && <ArrowDropDownIcon />}
                            </a></li>
                        ))}
                    </ul>
                </div>
            </nav >
            {sideNavVisibility && (
                <SideNav toggleVisibility={toggleSideNavVisibility} />
            )
            }
        </div >
    );
}
export default Navbar;