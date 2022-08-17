import { useState } from "react"
import Button from "../components/Button"
import Input from "../components/Input"
import Noti from "../components/Noti"
import { registerUser } from "../service/user"


export default function Register() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [show, setShow] = useState(false)

    const handleClick = () => {
        //validate email
        var regexE = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        return regexE.test(email) ? undefined : alert('Pls fill email correct');    

        //validate password
        var regexP = /^(?=.*\d)(?=.*[a-zA-Z])[a-zA-Z0-9]{4,16}$/;
        return regexP.test(password) ? undefined : alert('pls fill password correct')
        
        //register
        registerUser({email, password})
            .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            setShow(true)
            })
            .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
          });
    }

    return (
        <section className="flex flex-col md:flex-row h-screen items-center">

            {/* login left */}
            <div className="h-screen bg-zinc-600 lg-block md:w-1/2 xl:w-1/2">
                <img
                    src="https://images.unsplash.com/photo-1656119651670-ec9610795a3b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                    className="w-full h-full object-cover"
                />
            </div>
            {/* login left */}

            {/* login right */}
            <div className="bg-white items-center flex md:mx-auto md:max-w-md w-full md:w-1/2 xl:w-1/2 px-6 lg:px-16 xl:px-12">
                <div className="w-full h-100">
                    <h1 className="text-center text-3xl font-semibold">Task Manager</h1>

                    <form action="#" method="POST" className="pt-10">
                        {/* button Register google */}                 
                        <Button
                            color={""}
                            title={"Sign up with Google"}
                            icon={
                                <img
                                    src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png"
                                    alt=""
                                    className="h-9 mx-3 "
                                />
                            }
                        />
                        {/* button Register google */}

                        <div className="text1">
                            <span>or</span>
                        </div>

                        <Input value={email} type={'email'} placeholder={"email..."} title={"Email Address"} onChange={(value)=>setEmail(value)}/>
                        <Input value={password} type={'password'} placeholder={"password..."} title={"Password"} onChange={(value)=>setPassword(value)}/>

                        {/* button sign up */}
                        <Button color={"primary"} title={"Sign up free"} onClick={handleClick}/>
                        {/* button sign up */}

                        <p className="text-center mt-10">
                            By signing up I agree to the
                            <span className="text-purple-500"> term & conditions </span>
                            and
                            <span className="text-purple-500"> privacy policy</span>
                        </p>

                        <p className="text-center mt-44">
                            Already a user?
                            <span className="text-purple-500"> Login</span>
                        </p>
                    </form>
                </div>
            </div>
            {/* login right */}

            {/* login success */}
            {show && <Noti title/>}
            {/* login success */}
            
        </section>
    )
}

//validate email va pw
    //email phai ton tai va dung dang
    //pw fai co toi thieu 4 max 16, co 1 chu in hoa [a-z], co 1 so 
//validate fail => bao email hoac pw k hop le

//component success and fail
