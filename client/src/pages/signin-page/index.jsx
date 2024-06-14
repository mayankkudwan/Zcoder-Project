// import { BottomWarning } from "../../components/BottomWarning"
// import { Button } from "../../components/Button"
// import { Heading } from "../../components/Heading"
// import { InputBox } from "../../components/InputBox"
// import { SubHeading } from "../../components/SubHeading"
// import { useNavigate } from "react-router-dom"
// import { useEffect, useState } from "react"
// import axios from "axios";

// export const Signin = () => {

//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const [nav, setNav] = useState(false);
//     const [count, setCount] = useState(5);
//     const navigate = useNavigate();

//     useEffect(() => {
//         if (localStorage.getItem("token")) {
//           setNav(true);
//         }
//     }, []);

//     if(nav){
//       setInterval(() => {
//           setCount(count - 1);
//       }, 1000);

//       setTimeout(() => {
//           navigate("/homepage");
//       }, 5000);

//       return <div className="text-center">
//       <h1>Credentials found</h1>
//       <h5>Redirecting in {count} seconds...</h5>
//   </div>
//     }

//     return <div className="bg-slate-300 h-screen flex justify-center">
//     <div className="flex flex-col justify-center">
//       <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
//         <Heading label={"Sign in"} />
//         <SubHeading label={"Enter your credentials to access your account"} />
//         <InputBox onChange={(e) => {
//           setEmail(e.target.value);
//         }} placeholder="chinaar@gmail.com" label={"Email"} />
//         <InputBox onChange={(e) => {
//           setPassword(e.target.value);
//         }} placeholder="123456" label={"Password"} />
//         <div className="pt-4">
//           <Button onClick={async () => {
//             const response = await axios.post("http://localhost:3000/api/v1/user/signin", {
//               password,
//               email
//             });
//             localStorage.setItem("token", "Bearer "+response.data.token)
//             navigate("/homepage")
//           }} label={"Sign in"} />
//         </div>
//         <BottomWarning label={"Don't have an account?"} buttonText={"Sign up"} to={"/signup"} />
//       </div>
//     </div>
//   </div>
// }


import { BottomWarning } from "../../components/BottomWarning";
import { Button } from "../../components/Button";
import { Heading } from "../../components/Heading";
import { InputBox } from "../../components/InputBox";
import { SubHeading } from "../../components/SubHeading";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nav, setNav] = useState(false);
  const [count, setCount] = useState(5);
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setNav(true);
    }
  }, []);

  useEffect(() => {
    let timer;
    if (nav) {
      timer = setInterval(() => {
        setCount((prevCount) => prevCount - 1);
      }, 1000);

      setTimeout(() => {
        navigate("/homepage");
      }, 5000);
    }

    return () => clearInterval(timer);
  }, [nav, navigate]);

  if (nav) {
    return (
      <div className="text-center mt-20">
        <h1 className="text-2xl font-bold mb-2 text-white">Credentials found</h1>
        <h5 className="text-lg text-white">Redirecting in {count} seconds...</h5>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 min-h-screen flex items-center justify-center">
      <div className="bg-white rounded-lg w-80 text-center py-10 px-4 shadow-2xl transform transition-transform duration-500 hover:scale-105">
        <Heading label={"Sign in"} />
        <SubHeading label={"Enter your credentials to access your account"} />
        <div className="space-y-4">
          <InputBox
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            label={"Email"}
            className="mt-2"
          />
          <InputBox
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            label={"Password"}
            type="password"
            className="mt-2"
          />
        </div>
        <div className="mt-4">
          <Button
            onClick={async () => {
              try {
                const response = await axios.post(
                  "http://localhost:3000/api/v1/users/signin",
                  {
                    email,
                    password,
                  }
                );
                localStorage.setItem("token", "Bearer " + response.data.token);
                setNav(true);  // Set nav to true to trigger redirection
                navigate("/homepage")

              } catch (error) {
                console.error("Signin failed:", error);
                // Handle error state or feedback to user
              }
            }}
            label={"Sign in"}
            className="w-full py-2 bg-gradient-to-r from-green-400 to-blue-500 text-white rounded-lg hover:from-green-500 hover:to-blue-600 transition duration-300"
          />
        </div>
        <BottomWarning
          label={"Don't have an account?"}
          buttonText={"Sign up"}
          to={"/signup"}
          className="mt-4 text-blue-600 hover:underline"
        />
      </div>
    </div>
  );
};
