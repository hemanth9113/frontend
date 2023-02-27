
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";






const Signup = () => {

let[name,setName]=useState("")
let[mobilenumber,setMobilenumber]=useState("")
let[email,setEmail]=useState("")
let[password,setPassword]=useState("")
let[confirmpassword,setConfirmpassword]=useState("")

let navigate = useNavigate()

let handlesubmit=(e)=>{
    e.preventDefault()
    let data={name,mobilenumber,email,password,confirmpassword}
    if(name && mobilenumber && email && (password == confirmpassword)){
        axios.post('http://localhost:4000/signup',data)
        .then((res)=>{
            alert(res.data.message)
            navigate('/')
            console.log(data);

        })
    }else{
        alert('invalid credentials')
    }
}

    return ( 
        <div className="signup">
            <h1>Sign up page</h1>
            <div className="signup_form w-25 mt-3">
                <form action="" onSubmit={handlesubmit} >
                    <div className="name">
                    <label htmlFor="">Name :</label>
                    <input type="text" className="form-control" value={name} onChange={(e)=>setName(e.target.value)} placeholder="Enter your Name" name="name" />
                    </div>
                    <div className="mobile_number">
                    <label htmlFor="">Mobile Number :</label>
                    <input type="tel" className="form-control" value={mobilenumber} onChange={(e)=>setMobilenumber(e.target.value)} placeholder="Enter your Mobile Number" name="mobile" />
                    </div>
                    <div className="email">
                    <label htmlFor="">Email :</label>
                    <input type="email" className="form-control" required value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Email Address" name="email" />
                    </div>
                    <div className="password">
                    <label htmlFor="">Password :</label>
                    <input type="password" className="form-control" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Enter password" name="password" />
                    </div>
                    <div className="confirm_password">
                    <label htmlFor="">Confirm Password :</label>
                    <input type="password" className="form-control" value={confirmpassword} onChange={(e)=>setConfirmpassword(e.target.value)} placeholder="Confirm Entered password" name="password" />
                    </div>
                    <div className="signup_button">
                        <button className="btn btn-primary">Sign Up</button>
                    </div>
                    <div className="Login_button">
                        <p>Already a User ?</p>
                        <Link to='/' className="btn btn-primary">Login</Link>
                    </div>
                </form>
            </div>
        </div>
     );
}
 
export default Signup;