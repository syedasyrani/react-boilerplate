import React, { useEffect } from 'react'
import { string, func } from 'prop-types'
import { useForm } from 'react-hook-form'
// import ReCAPTCHA from 'react-google-recaptcha'

const LoginView = ({ email, setEmail, password, setPassword, onSubmit }) => {
  const { handleSubmit, register, errors, control, setValue } = useForm({
    mode: 'onBlur',
    reValidateMode: 'onSubmit',
  })

  // const setReCAPTCHAValue = (value) => {
  //   setValue('reCAPTCHAToken', true)
  //   setReCAPTCHAToken(value)
  // }

  // useEffect(() => {
  //   register(
  //     { name: "reCAPTCHAToken" },
  //     {
  //       required: {
  //         value: true,
  //         message: "Please validate that you are human.",
  //       },
  //     }
  //   )
  // }, [])

  return (
    <div
      className="w-full max-w-sm m-auto flex flex-col justify-center items-center"
      style={{ minHeight: '100vh' }}
    >
      <h1 className="text-3xl mb-4 font-bold">LOGIN</h1>
      <form
        className="px-8 pt-6 pb-8 mb-4 w-full"
        style={{ backgroundColor: '#f2f2f2' }}
        onSubmit={handleSubmit(onSubmit)}
        autoComplete="on"
      >
        <div className="mt-2 mb-4">
          <input
            className={`appearance-none border border-primary-400 text-sm w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
              errors.email && 'border-red-500'
            }`}
            id="email"
            name="email"
            type="text"
            placeholder="Email Address"
            value={email}
            onChange={({ target: { value } }) => setEmail(value)}
            ref={register({
              required: { value: true, message: 'Email is required.' },
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Invalid email address.',
              },
            })}
          />
          {errors.email && (
            <p className="text-red-500 text-xs italic">
              {errors.email.message}
            </p>
          )}
        </div>
        <div className="mb-6">
          <input
            className={`appearance-none border border-primary-400 text-sm w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
              errors.password && 'border-red-500'
            }`}
            id="password"
            name="password"
            type="password"
            placeholder="******************"
            value={password}
            onChange={({ target: { value } }) => setPassword(value)}
            ref={register({
              required: { value: true, message: 'Password is required.' },
            })}
          />
          {errors.password && (
            <p className="text-red-500 text-xs italic">
              {errors.password.message}
            </p>
          )}
          {/* <div className="w-full text-right">
            <a
              className="inline-block align-baseline font-light text-primary-300 font-light hover:text-primary-800"
              style={{ fontSize: '0.75rem' }}
              href="#"
            >
              Forgot Password?
            </a>
          </div> */}
        </div>
        <div className="flex items-center justify-between">
          <button
            className="w-full bg-black hover:bg-primary-400 text-white font-bold py-2 px-4 text-sm focus:outline-none focus:shadow-outline"
            type="submit"
          >
            SIGN IN
          </button>
        </div>
      </form>
    </div>
  )
}

LoginView.propTypes = {
  email: string,
  setEmail: func,
  password: string,
  setPassword: func,
}

export default LoginView
