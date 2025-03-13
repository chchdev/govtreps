import React from "react"

const Signup = () => {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="bg-white p-6 shadow-lg rounded-md w-80">
          <h2 className="text-xl font-semibold mb-4">Sign Up</h2>
          <input type="email" placeholder="Email" className="w-full p-2 border mb-2" />
          <input type="password" placeholder="Password" className="w-full p-2 border mb-2" />
          <button className="w-full bg-green-500 text-white p-2 rounded">Sign Up</button>
        </div>
      </div>
    );
  };
  
  export default Signup;
  