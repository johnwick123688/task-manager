import { useState } from "react"
import Button from "../components/Button"
import Input from "../components/Input"

export default function Register() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleClick = () => {
        console.log({email, password})
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

                        <Input value={email} type={'email'} placeholder={"email..."} title={"Email Address"} onChange={e=>setEmail(e.target.value)}/>
                        <Input value={password} type={'password'} placeholder={"password..."} title={"Password"} onChange={e=>setPassword(e.target.value)}/>

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
        </section>
    )
}