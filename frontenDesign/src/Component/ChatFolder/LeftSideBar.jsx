import React, { useState } from 'react';
import Logo from "../../assets/chatbot-05_4x-removebg-preview.png";
import wikigraph from '../../assets/OIP-removebg-preview.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './Chat.css';
import {
  faMessage,
  faPlus,
  faTrash,
  faArrowRightFromBracket,
  faBookmark,
  faHouse,
  faClockRotateLeft,
} from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from 'react-router-dom';

const LeftSideBar = () => {



// const LeftSideBar = ({ history,deleteHistory}) => {
//   const historyData = history;
//   const deleteData = deleteHistory;



const navigate  = useNavigate();
  // logout
  const logout = () => {
    navigate("/")
    localStorage.clear();
    window.location.reload();
    // setLoginUser({});
    
  };
  const NewChat = () =>{
    window.location.reload();
  }
  return (
    <div>
      <div className="logo-title">
        <img src={Logo} alt="" className="w-50 ms-5" />
        <span className="h1 text-white">ChatBot</span>
      </div>
      <div className="mt-4">
        <button className="btn btn-info btn-lg w-75 fs-3 mt-5 " onClick={NewChat}>
          <FontAwesomeIcon icon={faPlus} />
          <span className="text-dark fs-4 ms-3" >New Chat</span>
        </button>
      </div>

      <div className="mt-5 ">
        <button className="btn btn-dark btn-lg w-75 text-start fs-3 queries mt-3">
          <img src={wikigraph} alt="" className="wiki ms-5  " />
       
          <span className="text-white fs-4 ms-0 ">
            <Link to="https://blinpete.github.io/wiki-graph/?lang=de&query=Multiplexverfahren&wordle=undefined"
              className="text-white fs-3  ms-2"
              
             
            >
              wikkiGraph
            </Link>
          </span>{" "}
        </button>
      </div>

      <div className=" mtop">
        <div className="text-white fs-3 mt-1 ms-3 cpointer">
          <FontAwesomeIcon icon={faHouse}></FontAwesomeIcon>
          <span className="ms-4 fs-3">Home</span>{" "}
          
        </div>
        <div className="text-white fs-3 mt-4 ms-3 cpointer">
          <FontAwesomeIcon icon={faBookmark}></FontAwesomeIcon>
          <span className="ms-4 fs-3">Saved</span>{" "}
        </div>
        <div className="text-white fs-3 mt-4 ms-3 cpointer">
          <FontAwesomeIcon icon={faClockRotateLeft}></FontAwesomeIcon>
          <span className="ms-4 fs-3">History
            <div className='historyscroll'>
              {/* {historyData.map((item, index) => (
                <p className='historydata' key={index}>
                  {item.user}
                  <FontAwesomeIcon
                onClick={() => (deleteData(item.id))} 
                    className='ms-3 text-white'
                    icon={faTrash}
                  />
                </p>
              ))} */}
            </div>
          </span>{" "}
        </div>
      </div>
      <div className="mt-5 Logout">
        <button
          className="btn btn-light btn-lg w-75 mt-5"
          onClick={logout}
        >
          <FontAwesomeIcon
            icon={faArrowRightFromBracket}
          ></FontAwesomeIcon>{" "}
          <span className="text-dark fs-3 w-100">Logout </span>{" "}
        </button>
      </div>
    </div>
  );
};

export default LeftSideBar;
