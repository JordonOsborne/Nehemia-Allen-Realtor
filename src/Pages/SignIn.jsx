import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { ReactComponent as ArrowRightIcon } from "../Assets/svg/keyboardArrowRightIcon.svg"
import visibilityIcon from "../Assets/svg/visibilityIcon.svg"

function SignIn() {
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({ email: null, password: null })

  const { email, password } = formData
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
          <div className='pageHeader'>Welcome Back!</div>
        </header>
        <form>
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

          <Link to='/Forgot-Password' className='forgotPasswordLink'>
            Forgot Password
          </Link>

          <div className='signInBar'>
            <div className='signInText'>Sign In</div>
            <button className='signInButton'>
              <ArrowRightIcon fill='#fff' width='34px' height='34px' />
            </button>
          </div>
        </form>
        {/* {Google OAuth} */}

        <Link to='/SignUp' className='registerLink'>
          Sign Up
        </Link>
      </div>
    </>
  )
}
export default SignIn
