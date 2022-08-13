import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { ReactComponent as ArrowRightIcon } from "../Assets/svg/keyboardArrowRightIcon.svg"
import visibilityIcon from "../Assets/svg/visibilityIcon.svg"

function SignUp() {
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    name: null,
    email: null,
    password: null,
  })

  const { name, email, password } = formData
  const navigate = useNavigate()

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }))
  }

  return (
    <>
      <div className='pageContainer'>
        <header>
          <div className='pageHeader'>Create an Account</div>
        </header>
        <form>
          <input
            id='name'
            type='text'
            className='nameInput'
            placeholder='Name'
            value={name}
            onChange={onChange}
          />
          <input
            id='email'
            type='email'
            className='emailInput'
            placeholder='Email'
            value={email}
            onChange={onChange}
          />
          <div className='passwordInputDiv'>
            <input
              id='password'
              type={showPassword ? "text" : "password"}
              class='passwordInput'
              placeholder='Password'
              value={password}
              onChange={onChange}
            />
            <img
              src={visibilityIcon}
              alt='Show Password'
              className='showPassword'
              onClick={() => setShowPassword((prevState) => !prevState)}
            />
          </div>
          <div className='signUpBar'>
            <div className='signUpText'>Sign Up</div>
            <button className='signUpButton'>
              <ArrowRightIcon fill='#fff' width='34px' height='34px' />
            </button>
          </div>
        </form>
        {/* {Google OAuth} */}

        <Link to='/SignIn' className='registerLink'>
          Back to Sign In
        </Link>
      </div>
    </>
  )
}
export default SignUp
