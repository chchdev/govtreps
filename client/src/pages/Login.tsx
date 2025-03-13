import React from "react";

const Login = () => {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="bg-white p-6 shadow-lg rounded-md w-80">
          <h2 className="text-xl font-semibold mb-4">Login</h2>
          <input type="email" placeholder="Email" className="w-full p-2 border mb-2" />
          <input type="password" placeholder="Password" className="w-full p-2 border mb-2" />
          <button className="w-full bg-blue-500 text-white p-2 rounded">Login</button>
        </div>
      </div>
    );
  };
  
  export default Login;
  