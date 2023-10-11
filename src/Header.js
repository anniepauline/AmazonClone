import React from "react";
import "./Header.css";
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { NavLink } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./FBase";

function Header() {
    const [{ basket, user }, dispatch] = useStateValue();
    const handleAuthentication = () => {
        if (user) {
            auth.signOut();
        }
    }
    return (
        <div className="header">
            <NavLink to="/">
                <img className="header__logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
                    alt="" />
            </NavLink>


            <div className="header__search" >
                <input className="header__searchInput" type="text" />
                <div className="header__searchIcon" >
                    <SearchIcon className="header__icon" />
                </div>
            </div>

            <div className="header__nav">
                <NavLink to={!user && '/login'}>
                    <div onClick={handleAuthentication} className='header__option'>
                        <span className="header__optionLine1">Hello {user ? user.email : 'Guest'} </span>
                        <span className="header__optionLine2">{user ? 'Sign Out' : 'Sign In'}</span>
                    </div>
                </NavLink>
                <div className='header__option'>
                    <span className="header__optionLine1">Returns</span>
                    <span className="header__optionLine2">& Orders</span>
                </div>
                <div className='header__option'>
                    <span className="header__optionLine1">Your </span>
                    <span className="header__optionLine2">Prime</span>
                </div>
                <NavLink to="/checkout">
                    <div className="header__optionBasket">

                        <ShoppingBasketIcon />
                        <span className="header__optionLine2 header__basketCount">{basket?.length}</span>
                    </div>
                </NavLink>
            </div>
        </div >

    )
}
export default Header;