import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Explore from "./Pages/Explore"
import Listings from "./Pages/Listings"
import SignIn from "./Pages/SignIn"
import SignUp from "./Pages/SignUp"
import ForgotPassword from "./Pages/ForgotPassword"
import Profile from "./Pages/Profile"
import NotFound from "./Pages/NotFound"
import Navbar from "./Components/Navbar"

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Explore />} />
          <Route path='/SignIn' element={<SignIn />} />
          <Route path='/SignUp' element={<SignUp />} />
          <Route path='/Listings' element={<Listings />} />
          <Route path='/Profile' element={<SignIn />} />
          <Route path='/ForgotPassword' element={<ForgotPassword />} />
          <Route path='/*' element={<NotFound />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
