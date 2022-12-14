import axios from 'axios';
import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';

function Login() {
    const [name,setName] = useState();
    const [email,setEmail] = useState();
    const [password,setPassword] = useState();
    const [confirm,setConfirm] = useState();

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        let payload = {
            name:name,
            email: email,
            password: password,
            password_confirmation: confirm
        }

        axios.post('http://testapi.techenablers.info/api/auth/register',payload)
        .then(data=>{
            console.log(data);
            alert('Now you are sign In');
            navigate('/dashboard')
            // localStorage.setItem('access-token', data.data.access_token);
        })

        
    }
    return (
        <>
            <div class="hold-transition login-page">
                <div className="login-box">
                    <div className="login-logo">
                        <a><b>Admin</b>LTE &nbsp;SignIn</a>
                    </div>
                    {/* <!-- /.login-logo --> */}
                    <div className="card">
                        <div className="card-body login-card-body">
                            <p className="login-box-msg">Sign in to start your session</p>

                            <form method="post">
                                <div className="input-group mb-3">
                                    <input type="text" className="form-control" placeholder="Name" value={name} name='name' onChange={(e)=>setName(e.target.value)} />
                                    <div className="input-group-append">
                                        <div className="input-group-text">
                                            <span className="fas fa-envelope"></span>
                                        </div>
                                        <p>Nauman hhadfafnkjfghfgfbnbhgdf</p>
                                    </div>
                                </div>
                                <div className="input-group mb-3">
                                    <input type="email" className="form-control" placeholder="Email" value={email} name='email' onChange={(e)=>setEmail(e.target.value)} />
                                    <div className="input-group-append">
                                        <div className="input-group-text">
                                            <span className="fas fa-envelope"></span>
                                        </div>
                                    </div>
                                </div>
                                <div className="input-group mb-3">
                                    <input type="password" className="form-control" placeholder="Password" value={password} name='password' onChange={(e)=>setPassword(e.target.value)} />
                                    <div className="input-group-append">
                                        <div className="input-group-text">
                                            <span className="fas fa-lock"></span>
                                        </div>
                                    </div>
                                </div>
                                <div className="input-group mb-3">
                                    <input type="password" className="form-control" placeholder="Confirm Password" value={confirm} name='confirm' onChange={(e)=>setConfirm(e.target.value)} />
                                    <div className="input-group-append">
                                        <div className="input-group-text">
                                            <span className="fas fa-lock"></span>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-8">
                                        <div className="icheck-primary">
                                            <input type="checkbox" id="remember" />
                                            <label for="remember">
                                                &nbsp;Remember Me
                                            </label>
                                        </div>
                                    </div>
                                    {/* <!-- /.col --> */}
                                    {/* <div className="col-4">
                                        <button type="submit" className="btn btn-primary btn-block">LogIn</button>
                                    </div> */}
                                    {/* <!-- /.col --> */}
                                </div>
                            </form>

                            <div className="social-auth-links text-center mb-3">
                                {/* <p>- OR -</p> */}
                                <a href="#" className="btn btn-block btn-primary" onClick={handleSubmit}>
                                    SignIn
                                </a>
                                {/* <a href="#" className="btn btn-block btn-danger">
                                    <i className="fab fa-google-plus mr-2"></i> Sign in
                                </a> */}
                                {/* <p className="mb-1">
                                    <a href='#' style={{cursor: 'auto'}}>If you have no account click&nbsp; <Link style={{color:'rgb(65 65 65)', textDecoration:'underline', cursor:'pointer'}}>Sign In</Link></a>
                                </p> */}
                            </div>
                            {/* <!-- /.social-auth-links --> */}

                            {/* <p className="mb-1">
                                <a href="forgot-password.html">I forgot my password</a>
                            </p> */}
                            <p className="mb-0">
                                <a className="text-center">Register a new membership</a>
                            </p>
                        </div>
                        {/* <!-- /.login-card-body --> */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login