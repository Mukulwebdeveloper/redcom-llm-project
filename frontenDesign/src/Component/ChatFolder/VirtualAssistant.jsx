import NewChat1 from "./NewChat1";
// import NewChatApp from "./NewChatApp";

const VirtualAssistant = () => {

//   // Logout
//   const logout =()=>{
//     localStorage.clear();
//     window.location.reload()
// }

 
  return (
    
    <div>
<div className="container-fluid ">
      {/* <div className='btn'>

      <button  className="btn btn-dark mt-5" onClick={logout}>Logout</button>
      </div> */}
  {/* <div className="row">

    <div className="col-lg-3">
    <div className="header">
     <div class="h5 text-white">History</div>
    </div>
    </div>
    <div className="col-lg-4">
    <div className='chatbot'>
      <iframe width="550" height="630" allow="microphone;" src="https://console.dialogflow.com/api-client/demo/embedded/5fe171fd-833d-4eb4-ac4f-35340f5cb410"></iframe>
     </div>
    </div>
    <div className="col-lg-5"></div>
  </div> */}
{/* <NewChatApp></NewChatApp> */}
<NewChat1></NewChat1>

</div>

  
     
     </div>
  );
};

export default VirtualAssistant;
