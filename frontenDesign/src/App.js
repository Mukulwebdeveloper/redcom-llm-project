import React, { useState } from 'react'
// import Login from './Auth/Login'
import Signup from './Auth/Signup'
import { Routes, Route,Navigate  } from 'react-router-dom'
import Login from './Auth/Login'
import NewChat1 from './Component/ChatFolder/NewChat1'

const App = () => {

  const [userLogin, setLoginUser] = useState({})
  // console.log(userLogin);
  return (

<div>
<Routes>
            {/* Route for '/' path */}
            {/* <Route path="/" element={userLogin && userLogin._id ? <NewChat1 setLoginUser={setLoginUser} /> : <Login setLoginUser={setLoginUser}/>} /> */}
            
            {/* <Route path='/' element={<NewChat1 setLoginUser={setLoginUser}/>} /> */}
            <Route path='/home' element={<NewChat1 />} />
            {/* Route for '/login' path */}
            <Route path='/' element={<Login/>} />
            
            {/* Route for '/signup' path */}
            <Route path='/signup' element={<Signup />} />
        </Routes>

</div>
  
     

  )
}

export default App