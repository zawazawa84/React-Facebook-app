import React, { useContext, useRef }from 'react'
import { loginCall } from '../../actionCalls';
import { AuthContext } from '../../state/AuthContext';
import "./Login.css"

export default function Login() {
  const email = useRef();
  const password = useRef()
  const {user, isFetching, error, dhispatch} = useContext(AuthContext)

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(password.current.value + email.current.value )
    loginCall({
      email: email.current.value,
      password: password.current.value
    },
    dispatch
    )
  }

  return (
    <div className='login'>
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className='loginLogo'>REAL SNS</h3>
          <span className="loginDesc">本格的なSNSを、自分の手で</span>
        </div>
        <div className="loginRight">
          <form className="loginBox" onSubmit={(e) => handleSubmit(e)}>
            <p className="loginMsg">ログインはこちら</p>
            <input type="email" className="loginInput" placeholder='E-mail' required ref={email}/>
            <input type="password" className="loginInput" placeholder='password' required ref={password}/>
            <button className="loginButton">ログイン</button>
            <span className="loginForgot">パスワードを忘れた方へ</span>
            <button className="loginRegisterButton">アカウント作成</button>
          </form>
        </div>
      </div>
    </div>
  )
}
