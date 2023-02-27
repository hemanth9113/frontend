import { useState } from "react";
import { Link } from "react-router-dom";





const Login = () => {

let [email,setEmail]=useState("");
let [password,setPassword]=useState("");

let handlesubmit=(e)=>{
  

}
    return (  
        <div className="login">
            <h1>Login Page</h1>
            <div className="login_form w-25">
                <form action="" onSubmit={handlesubmit}>
                    <div className="email">
                        <input type="email" className="form-control" required value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Email Address" name="email" />
                    </div>

                    <div className="password mt-3">
                        <input type="password" className="form-control" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Enter your password" name="password" />
                    </div>

                    <div className="login_button mt-3">
                        <button className="btn btn-primary">Login</button>
                    </div>

                    <div className="signin_button">
                        <p>Are you a new user ?</p>
                        <Link to="/signup" className="btn btn-outline-primary">Sign Up</Link>
                    </div>
                </form>
            </div>
        </div>
    );
}
 
export default Login;