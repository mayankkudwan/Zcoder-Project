import { useState, useEffect } from "react";
import { BottomWarning } from "../../components/BottomWarning";
import { Button } from "../../components/Button";
import { Heading } from "../../components/Heading";
import { InputBox } from "../../components/InputBox";
import { SubHeading } from "../../components/SubHeading";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [codeforcesHandle, setCodeforcesHandle] = useState("");
  const [githubHandle, setGithubHandle] = useState("");
  const [linkedInHandle, setLinkedInHandle] = useState("");
  const [nav, setNav] = useState(false);
  const [count, setCount] = useState(5);
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setNav(true);
    }
  }, []);

  if (nav) {
    setInterval(() => {
      setCount((prevCount) => prevCount - 1);
    }, 1000);

    setTimeout(() => {
      navigate("/homepage");
    }, 5000);

    return (
      <div className="text-center mt-20">
        <h1 className="text-2xl font-bold mb-2 text-white">Credentials found</h1>
        <h5 className="text-lg text-white">Redirecting in {count} seconds...</h5>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 min-h-screen flex items-center justify-center">
      <div className="text-lg bg-white rounded-lg w-144 text-center px-10  shadow-2xl transform transition-transform duration-500 hover:scale-105">
        <Heading label={"Sign up"} />
        <SubHeading label={"Enter your information to create an account"} />
        <div className="space-y-4 text-lg">
          <InputBox
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
            label={"Username"}
            className="mt-2"
          />
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
          <InputBox
            onChange={(e) => setCodeforcesHandle(e.target.value)}
            placeholder="Codeforces Handle"
            label={"Codeforces Handle"}
            className="mt-2"
          />
          <InputBox
            onChange={(e) => setGithubHandle(e.target.value)}
            placeholder="Github Handle"
            label={"Github Handle"}
            className="mt-2"
            isImportant={false}
          />
          <InputBox
            onChange={(e) => setLinkedInHandle(e.target.value)}
            placeholder="LinkedIn Handle"
            label={"LinkedIn Handle"}
            className="mt-2"
            isImportant={false}
          />
        </div>
        <div className="mt-4">
          <Button
            onClick={async () => {
              const response = await axios.post(
                "http://localhost:3000/api/v1/user/signup",
                {
                  username,
                  password,
                  email,
                  codeforcesHandle,
                  githubHandle,
                  linkedInHandle,
                }
              );
              localStorage.setItem("token", "Bearer " + response.data.token);
              setNav(true);
              navigate("/signin");
            }}
            label={"Sign up"}
            className="w-full py-2 bg-gradient-to-r from-green-400 to-blue-500 text-white rounded-lg hover:from-green-500 hover:to-blue-600 transition duration-300"
          />
        </div>
        <BottomWarning
          label={"Already have an account?"}
          buttonText={"Sign in"}
          to={"/signin"}
          className="mt-4 text-blue-600 hover:underline"
        />
      </div>
    </div>
  );
};
