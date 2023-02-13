import React from 'react'
import "./Login.css"

export default function Login() {
  return (
    <div className='login'>
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className='loginLogo'>REAL SNS</h3>
          <span className="loginDesc">本格的なSNSを、自分の手で</span>
        </div>
        <div className="loginRight">
          <div className="loginBox">
            <p className="loginMsg">ログインはこちら</p>
            <input type="email" className="loginInput" placeholder='E-mail' required/>
            <input type="password" className="loginInput" placeholder='password' required/>
            <button className="loginButton">ログイン</button>
            <span className="loginForgot">パスワードを忘れた方へ</span>
            <button className="loginRegisterButton">アカウント作成</button>
          </div>
        </div>
      </div>
    </div>
  )
}
