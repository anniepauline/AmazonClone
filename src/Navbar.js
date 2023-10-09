import React from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import "./Navbar.css";



// All nav items list array
const navItemList = [
    { id: 0, title: "Fresh", hrefLink: "#" },
    { id: 1, title: "Amazon Pay", hrefLink: "#" },
    { id: 2, title: "Gift Cards", hrefLink: "#" },
    { id: 3, title: "Today's Deals", hrefLink: "#" },
    { id: 4, title: "Sell", hrefLink: "#" },
    { id: 5, title: "Gift Ideas", hrefLink: "#" },
    { id: 6, title: "Buy Again", hrefLink: "#" },
    { id: 7, title: "Health, Household & Personal Care", hrefLink: "#" },
    { id: 8, title: "Baby", hrefLink: "#" },
    { id: 9, title: "Toys & Games", hrefLink: "#" },
    { id: 10, title: "Home Improvement", hrefLink: "#" },
    { id: 11, title: "Browsing History", hrefLink: "#" },
    { id: 12, title: "Coupons", hrefLink: "#" },
];
function Navbar() {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">Navbar</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Features</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Pricing</a>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Dropdown link
                                </a>
                                <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <li><a class="dropdown-item" href="#">Action</a></li>
                                    <li><a class="dropdown-item" href="#">Another action</a></li>
                                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}
export default Navbar;