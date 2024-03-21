import React from 'react'
import Documents from './ChatFolder/Documents'
import setRes from "./ChatFolder/NewChat1";
import {Link} from "react-router-dom"
const RightSidebar = () => {
  return (
    <div>
           <div className="mt-4">
              <button className="btn btn-info  btn-lg w-75  fs-3 ms-4  mt-5 ">
                <span className="text-dark fs-4 ms-3 ">
                  {" "}
                  <Link to="https://www.3gpp.org/3gpp-groups"
                    className="text-white fs-3"
                    
                 
                  >
                    3GPP-Groups
                  </Link>{" "}
                </span>{" "}
              </button>
            </div>
            <div className="mt-4">
              <button className="btn btn-dark  w-75   ms-4  mt-5 text-start fs-3 queries mt-3">
                <span className="text-white fs-4 ms-2">
                  <Link to="https://portal.3gpp.org"
                    className="text-white fs-3"
                   
                   
                  >
                    3GPP Portal
                  </Link>
                </span>{" "}
              </button>
            </div>
            <div className="mt-4">
              <button className="btn btn-dark  w-75 ms-4  mt-5  queries text-start fs-3  ">
                <span className="text-white fs-4 ms-4 mb-5">
                  <Link
                    to="https://www.3gpp.org/specifications-technologies"
                    
                    className="text-white fs-3"
                  >
                    3GPP Specification
                  </Link>
                </span>{" "}
              </button>
            </div>
            <div className="mt-4">
              <button className="btn btn-dark  w-75 ms-4  mt-5  queries text-start fs-3  ">
                <span className="text-white fs-4 ms-4 mb-5">
                  <Link
                    to="https://www.3gpp.org/about-us/introducing-3gpp"
                    target="_blank"
                    className="text-white fs-3"
                  >
                    3GPP Introducing
                  </Link>
                </span>{" "}
              </button>
            </div>
            <div className="mt-4">
              <button className="btn btn-dark  w-75 ms-4  mt-5  queries text-start fs-3  ">
                <span className="text-white fs-4 ms-4 mb-5">
                  <Link to="https://www.3gpp.org/about-us/introducing-3gpp"
                   
                    target="_blank"
                    className="text-white fs-3"
                  >
                     </Link>
                   {/* {
            setTimeout(()=>{
                 <Documents></Documents>
            }, 10000)
           } */}
           {
           setRes && (<Documents></Documents>)
           }
            {/* <Documents/> */}
               
                </span>{" "}
              </button>
            </div>
    </div>
  )
}

export default RightSidebar