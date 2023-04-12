import React from "react";
import "./Header.css";
import { FiMail } from "react-icons/fi";
import {MdWifiCalling3,MdKeyboardArrowDown} from 'react-icons/md'
import {RiContactsLine} from 'react-icons/ri'
import {FaRegHeart} from 'react-icons/fa'
import {AiOutlineShoppingCart} from 'react-icons/ai'

const Heder = () => {
  return (
    <div>
      <div className="header">
        <div className="child_header">
          <FiMail className="message" />
          <p> mhhasanul@gmail.com </p>
        </div>
          <div className="calling">
          <MdWifiCalling3 className="calling_icon"/>
          <p>(12345)67890</p>
          </div>
          <div className="headermenu">
            <p>English</p>
            <MdKeyboardArrowDown className="downarrow" />
            <p>USD</p>
            <MdKeyboardArrowDown className="downarrow" />
           <p>login</p>
            <RiContactsLine className="login"/>
            <p>whishlist</p>
            <FaRegHeart className="heart"/>
    <div className="cart">
      <AiOutlineShoppingCart className="cart_icon"/>
    </div>
          </div>

      </div>
    </div>
  );
};

export default Heder;
