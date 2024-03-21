import React, { useState, useEffect,useRef } from "react";
import "./Chat.css";
import Query from "../../utils/Query";
import Logo from "../../assets/chatbot-05_4x-removebg-preview.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import LeftSideBar from "./LeftSideBar";
import RightSidebar from "../RightSidebar";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

const NewChat1 = () => {
  const [queries, setQueries] = useState([]);                    //for store query and display in UI
  const [getinputvalue, setInputvalue] = useState("");            //for getinput query from user
  const [showComponent, setShowComponent] = useState(false);       //for display feedback after 10 second
  const [res, setRes] = useState();                                 //for get response from database
  
  // for Two input value field handle
  // const [value1, setValue1] = useState('');
  // const [value2, setValue2] = useState('');

  // const [timeoutId, setTimeoutId] = useState(null);              //for display user 
// location
  const location = useLocation();
  const inputRef = useRef(null);                  //for Enter Key useRef
  // setInputvalue()                                  

  const navigate = useNavigate();
  const [feedback , setFeedBack] = useState(   
                                             //for send feedback to mongodb
    {
    query:"",
    referencedDocument: "",
    feedback1: "",
    relaventAnswer:"",
    feedback2: ""
  }
  )

  // Handle input value
  // const handleInputChange = (e) => {
  //   // Assuming you want to separate the input by a space
  //   const [newValue1, newValue2] = e.target.value.split(' ');
  //   setValue1(newValue1);
  //   setValue2(newValue2);
  // };

  // Sentfeedback to mongodb
  const Sentfeedback = () =>{


      // alert("posted");
      axios.post("http://localhost:5000/feedback", feedback).then((res) => 
      {
        // alert(res.data.message);
        setInputvalue("");
        
      });
  
   
   
  }
// onclick feedback inputs
  const handleFeedback =(e) =>{
    const {name , value} = e.target
    setFeedBack({
      ...feedback,
      [name]: value
    })
  }
  const handleChange = async () => {
    try {
      const res_query = <Query query={getinputvalue}></Query>;
      setRes(res_query);

      setQueries((prevConversation) => [
        ...prevConversation,
        { user: getinputvalue },
        // { user: feedback.query },
      ]);

      // Clear the input field
      setInputvalue("");

       // Scroll to the bottom
     scrollToBottom();
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };


  // Key Press Enter 
  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault(); // Prevent page refresh
      handleChange();
      Sentfeedback();
      
    
    }
  };

    // Function to scroll to the bottom
    const scrollToBottom = () => {
      const chatContainer = document.getElementById('chat-container');
      if (chatContainer) {
        chatContainer.scrollTop = chatContainer.scrollHeight;
      }
    };
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowComponent(true);
    }, 5000); // 15 seconds

    return () => clearTimeout(timer);

    // const timeout = setTimeout(() => {
    //   // Code to execute after 5 seconds
    //   // For example, you can clear the timeout or perform other actions here
    //   clearTimeout(timeoutId);
    // }, 5000); // 5000 milliseconds = 5 seconds

    // setTimeoutId(timeout); // Save the timeout ID to state

    // return () => clearTimeout(timeout); 
  }, []); // Runs only once on component mount

  // for display user

  
  return (
    <div>
      <div className="container-fluid m-5 chatbot-container" id="chat-container">
        <div className="row">
          <div className="col-lg-3 leftbars">
            <LeftSideBar />
          </div>
          <div className="col-lg-6 middle">
            <div className="">
     
     {/* Authentication */}
            <div className="text-white fs-4 welcomeuser"> <img src={Logo}   alt="" className="botlogo btnicon" />Hello <span style={{"color":" rgba(13, 202, 240, 1)", "fontSize":"18px"}}>{location.state.Useremail}! </span>How can I help you? Please ask your question?</div>
          
              {/* Render queries and responses */}
              {queries.map((query, index) => (
                <div className="row mt-5" key={index}>
                  <div className="col-lg-1 ms-5">
                    <span className="user-icon fs-3 ms-5">
                      <FontAwesomeIcon icon={faUser} />
                    </span>
                  </div>
                  <div className="middle">
                    <div className="col-lg-8 Middlechats ms-5">
                      <p className="text-info fs-4 rightside ms-5">{query.user}</p>
                    </div>
                  </div>
                  <div className="row mt-5">
                    {res && (
                      <div className="col-lg-1 ">
                        <span className="">
                          <img src={Logo} alt="" className="botlogo" />
                        </span>
                      </div>
                    )}

                    {res && (
                      <div className="col-lg-10">
                        <div className="text-white fs-4 respmsg"> {res}</div>

                        {showComponent && (
                          <div className="col-lg-12">
                            {/* Your JSX code here */}
                            <div className="mt-4">
                              <div className="container">
                                <div className="row">
                                  <div className="col-lg-12">
                                    <button className="btn btn-info w-100 ms-2  mt-5  queries text-start fs-3  ">
                                      <span className="text-dark fs-4 ms-4 mb-5">
                                        1. Is the document referenced correct?
                                        <button className="text-white btn btn-dark fs-4 ms-2" name="referencedDocument" value={feedback.referencedDocument}  onClick={Sentfeedback}>
                                          Yes
                                        </button>
                                        <button className="text-white btn btn-dark fs-4 ms-5"  name="referencedDocument" value={feedback.referencedDocument}  onClick={Sentfeedback}>
                                          No
                                        </button>
                                      </span>{" "}
                                    </button>
                                  </div>
                                  <div className="col-lg-12">
                                    <button className="btn btn-info w-100 ms-2  mt-5  queries text-start fs-3  ">
                                      <span className="text-dark fs-4 ms-4 mb-5  ">
                                        2. Would you like to provide any other
                                        referenced document, if yes please
                                        enter:
                                        <input
                                          type="text"
                                          className="form-control"
                                          name="feedback1" value={feedback.feedback1} onChange={handleFeedback}  
                                          style={{
                                            backgroundColor: "transparent",
                                            fontSize: "15px",
                                            width: "100%",
                                          }}
                                        />
                                        <button className="text-white btn btn-dark fs-4 mt-2" onClick={Sentfeedback}>
                                          <FontAwesomeIcon
                                            icon={faPaperPlane}
                                          />
                                        </button>
                                      </span>{" "}
                                    </button>
                                  </div>
                                  <div className="col-lg-12">
                                    <button className="btn btn-info w-100 ms-2  mt-5  queries text-start fs-3  ">
                                      <span className="text-dark fs-4 ms-4 mb-5">
                                        3. Is the answer relevent?{" "}
                                        <button className="text-white btn btn-dark fs-4 ms-5"  name="relaventAnswer" value={feedback.relaventAnswer} onChange={handleFeedback} onClick={Sentfeedback}>
                                          Yes
                                        </button>
                                        <button className="text-white btn btn-dark fs-4 ms-5" name="relaventAnswer" value={feedback.relaventAnswer} onChange={handleFeedback} onClick={Sentfeedback}>
                                          NO
                                        </button>
                                      </span>{" "}
                                    </button>
                                  </div>
                                </div>
                                <div className="row pt-3">
                                  <div className="col-lg-12">
                                    <button className="btn btn-info w-100 ms-2  mt-5  queries text-start fs-3  ">
                                      <span className="text-dark fs-4 ms-4 mb-5   ">
                                        4. Would you like to provide any other
                                        answer, if yes please enter:
                                        <input
                                          type="text"
                                          className="form-control"
                                          name="feedback2" value={feedback.feedback2} onChange={handleFeedback}
                                          style={{
                                            backgroundColor: "transparent",
                                            fontSize: "15px",
                                          }}
                                        />
                                        <button className="text-white btn btn-dark fs-4 mt-2" onClick={Sentfeedback}>
                                          <FontAwesomeIcon
                                            icon={faPaperPlane}
                                          />
                                        </button>
                                      </span>{" "}
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              ))}

              <div className="">
                <form className="w-100 mt-5">
                  <div className="row sentbox">
                    <div className="col-lg-12 inputbox1 d-flex">
                      <input
                       ref={inputRef}
                       onKeyDown={handleKeyPress}
                       name="query"
                        type="text"
                        placeholder="Ask a Question..."
                        value={`${getinputvalue} ${feedback.query}`} // Combine two values with a space
                        onChange={(e) => {
                     setInputvalue(e.target.value);
                 
}}
    
                       
                      />
                      <button
                        type="button"
                        className="btn bnt fs-2 btn-send w-25 ms-5"
                       onClick={handleChange}
                      >
                        <FontAwesomeIcon icon={faPaperPlane} />
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            {/* Rightsidebar */}
            <div className="col-lg-3 left-corner  rightbars ">
              <RightSidebar />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewChat1;
