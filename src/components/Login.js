import React, { useRef, useState } from 'react';
import "./Login.css";
import welcomeBackIcon from "../logos/welcome-back.png"
import { useUserStore } from '../Stores/UserStore';
import axios from 'axios';
function Login() {
    const { user, setUser, clearUser } = useUserStore();
    const securityQuestionRef = useRef()
    const securityAnswerRef = useRef()
    const sign_NameRef = useRef()
    const sign_EmailRef = useRef()
    const sign_PasswordRef = useRef()
    const sign_ConfirmPasswordRef = useRef()
    const login_EmailRef = useRef()
    const login_PasswordRef = useRef()



    const [flipped, setFlipped] = useState(false)

    const flip = () => {
        setFlipped(!flipped)

    }

    const go2ForgotPassword = () => {
        window.location.href = "/forgot-password"
    }
    const checkstore = () => {
        console.log(user)
    }


    const register = async () => {
        console.log('register')

        const name = sign_NameRef.current.value;
        const email = sign_EmailRef.current.value;
        const password = sign_PasswordRef.current.value;
        const confirmPassword = sign_ConfirmPasswordRef.current.value;
        const securityQuestion = securityQuestionRef.current.value;
        const securityAnswer = securityAnswerRef.current.value;

        if (name === "" || email === "" || password === "" || confirmPassword === "" || securityAnswer === "") {
            alert("Please fill all the fields")
            return
        }

        if (password !== confirmPassword) {
            alert("Passwords do not match")
            return
        }

        try {

            const res = await axios.post(process.env.REACT_APP_SIGNUP_URL, {
                name: name,
                email: email,
                password: password,
                securityQuestion: securityQuestion,
                securityAnswer: securityAnswer
            })
            console.log(res)

            if (res?.status === 201) {
                sign_EmailRef.current.value = ""
                sign_NameRef.current.value = ""
                sign_PasswordRef.current.value = ""
                sign_ConfirmPasswordRef.current.value = ""

                const userInfo = {
                    name: name,
                    email: email,
                    token: res.data.token

                }
                setUser(userInfo)

                window.location.href = "/"
            }
        }
        catch (err) {
            console.log(err)
        }


    }

    const login = async () => {
        const email = login_EmailRef.current.value;
        const password = login_PasswordRef.current.value;

        if (email === "" || password === "") {
            alert("Please fill all the fields")
            return
        }
        try {

            const res = await axios.post(process.env.REACT_APP_LOGIN_URL, {
                email: email,
                password: password
            })

            if (res?.status === 201) {
                login_EmailRef.current.value = ""
                login_PasswordRef.current.value = ""
                const userInfo = {
                    name: res.data.name,
                    email: email,
                    token: res.data.token

                }
                setUser(userInfo)

                window.location.href = "/"
            } else {
                alert("Invalid email or password")

            }
        }
        catch (err) {
            console.log(err)
            alert("Invalid email or password")
        }




    }


    return (
        <div className='login_main' >
            <div className={!flipped ? 'login_inner' : 'login_inner login_inner2'}>
                <div className='login_container'>

                    <h2>Login</h2>
                    <input type='text' placeholder='Email' required className='login_in' ref={login_EmailRef} />
                    <input type='password' placeholder='Password' required className='login_in' ref={login_PasswordRef} />
                    <p className='forgot_password' onClick={go2ForgotPassword}>Forgot Password?</p>
                    <button className='login_btn' onClick={login} >Log In</button>
                    <p className='login_line' onClick={flip}>create an account</p>
                    <img src={welcomeBackIcon} alt="welcome back icon" className='welcome_back_icon' />

                </div>
                <div className='signup_container'>
                    <h2>Sign Up</h2>
                    <input type='text' placeholder='Name' required className='login_in' ref={sign_NameRef} />

                    <input type='text' placeholder='Email' required className='login_in' ref={sign_EmailRef} />
                    <input type='password' placeholder='Password' required className='login_in' ref={sign_PasswordRef} />
                    <input type='password' placeholder='Confirm Password' required className='login_in' ref={sign_ConfirmPasswordRef} />
                    <p className='sq_p'>Security Question</p>
                    <select name="security_question" id="security_question" className='login_in' ref={securityQuestionRef}>
                        <option value="What is your mother's maiden name?">What is your mother's maiden name?</option>
                        <option value="What is the name of your first pet?">What is the name of your first pet?</option>
                        <option value="What is your favorite color?">What is your favorite color?</option>
                        <option value="What is the name of your favorite teacher?">What is the name of your favorite teacher?</option>
                        <option value="What is the name of your favorite book?">What is the name of your favorite book?</option>
                        <option value="What is the name of your favorite movie?">What is the name of your favorite movie?</option>
                        <option value="What is the name of your favorite song?">What is the name of your favorite song?</option>
                        <option value="What is the name of your favorite food?">What is the name of your favorite food?</option>

                        <option value="What is the name of your favorite drink?">What is the name of your favorite drink?</option>
                        <option value="What is the name of your favorite place to visit?">What is the name of your favorite place to visit?</option>
                    </select>
                    <input type='text' placeholder='Answer' required className='login_in' ref={securityAnswerRef} />
                    <button className='login_btn' onClick={register}>Sign Up</button>
                    <p className='login_line' onClick={flip}>already have an account</p>

                </div>
            </div>
        </div>
    )
}
export default Login