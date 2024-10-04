import { useState } from "react";
import { emailValidator, validatePassword } from "../contexts/validator";
export default function () {
    const [credentials, setCredentials] = useState({ username: { value: "", errors: "" }, email: { value: "", errors: "" }, password: { value: "", errors: "" } });
    const [loader, setLoader] = useState(false);
    const handleSignupSubmit = (event) => {
        event.preventDefault();
        setLoader(true);
        console.log(credentials);
        const emailIsvalid=emailValidator(credentials.email.value);
        const passwordIsvalid=validatePassword(credentials.password.value)
        console.log(emailIsvalid)
        if(!emailIsvalid.succss){
            setCredentials((cred)=>({...cred,email:{...cred.email,errors:emailIsvalid.message}}));
            event.stopPropagation();
        }
        if(!passwordIsvalid.succss){
            setCredentials((cred)=>({...cred,password:{...cred.password,errors:passwordIsvalid.message}}));
            event.stopPropagation();
        }
    }
    const handleInputChange = (event) => {
        console.log({...credentials},event.target.name)
        setCredentials((cred)=>({...cred,[event.target.name]:{value:event.target.value}}));
    }
    return (
        <div className="signup" id="signup">
            <div className="signupContainer">
                <h3 className="text-center font-sm">Please Signup to Continue</h3>
                <div className="card card-container border-0">
                    <div className="card-body">

                        <form id="signupForm" onSubmit={handleSignupSubmit} noValidate>
                            <div className="form-group mb-3">
                                <label htmlFor="username" className="form-label">Username<span className="text-danger">*</span></label>
                                <input type="text" name="username" id="username" value={credentials.username.value} onChange={handleInputChange}
                                    placeholder="Username" autoComplete="off" className="form-control" />
                            </div>
                            <div className="form-group mb-3">
                                <label htmlFor="email" className="form-label">Email<span className="text-danger">*</span></label>
                                <input type="email" name="email" id="email" value={credentials.email.value} onChange={handleInputChange}
                                    placeholder="example@gmail.com" autoComplete="off" className="form-control" />
                                {credentials.email.errors&&<span className="text-danger">{credentials.email.errors}</span>}
                            </div>
                            <div className="form-group mb-3">
                                <label htmlFor="password" className="form-label">Password<span className="text-danger">*</span></label>
                                <input type="password" name="password" id="password" value={credentials.password.value} onChange={handleInputChange}
                                    placeholder="password length must be >=6" autoComplete="off" className="form-control" />
                                    {credentials.password.errors&&<span className="text-danger">{credentials.password.errors}</span>}
                            </div>
                            <div className="form-btn mb-3 d-flex justify-content-center align-items-center">
                                <button className="btn btn-success w-100 d-flex justify-content-center align-items-center gap-3" type="submit">
                                    <div style={{ width: '20px' }} className="d-flex justify-content-center align-items-center">
                                        {loader && (
                                            <div className="spinner-border spinner-border-sm" role="status">
                                                <span className="visually-hidden">Loading...</span>
                                            </div>
                                        )}
                                    </div>
                                    Signup
                                </button>
                            </div>
                            

                        </form>
                    </div>
                    <div className="card-footer text-center">
                        <a href="/account/login" className="link-primary">Existing User? Log in</a>
                    </div>
                </div>
            </div>
        </div>
    )
}