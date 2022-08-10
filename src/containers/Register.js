export default function Register() {
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
                    <h1 className="text-center text-3xl font-semibold">Access a rich gallery</h1>
                    <h2 className="text-center text-sm text-gray-400 pt-3">Just last month. 11,523 3D Artists also signed up for 
                        <span className="text-black font-semibold "> poli.co</span>
                    </h2>                   
                    
                    <form action="#" method="POST" className="pt-10">
                        <button type="submit" className="">
                            <div className="flex w-full bg-purple-500 mt-2 border focus-visible:border-purple-400 focus:bg-gray-100 focus:outline-purple-400 rounded-md px-4 py-3">
                                <img 
                                    src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png"
                                    alt=""
                                    className="h-8"
                                />
                                <span className="ml-4">
                                    Sign up with Google
                                </span>
                            </div>
                        </button>
                        <div className="flex">
                            <hr className="my-6 border-gray-300 md:w-1/2"/>
                            <span className="">or</span>
                            <hr className="my-6 border-gray-300 md:w-1/2"/>

                        </div>
                        <div className="">
                            <label>Email address</label>
                            <input type="email" placeholder="email..." className="w-full bg-slate-100 mt-2 border focus-visible:border-purple-400 focus:bg-gray-100 focus:outline-purple-400 rounded-md px-4 py-3"/>
                        </div>
                        <div className="">
                            <label>Password</label>
                            <input type="password" placeholder="password..." className="w-full bg-slate-100 mt-2 border focus-visible:border-purple-400 focus:bg-gray-100 focus:outline-purple-400 rounded-md px-4 py-3"/>
                        </div>
                        <button type="submit" className="w-full">
                            <div className="bg-purple-500 mt-2 border focus-visible:border-purple-400 focus:bg-gray-100 focus:outline-purple-400 rounded-md px-4 py-3">
                                <span className="text-center text-white font-medium ">Sign up free</span>
                            </div>
                        </button>

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