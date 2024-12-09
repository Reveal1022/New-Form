import { useContext } from "react";
import Layout from "./Layout";
import OtpForm from "./OtpForm";
import SignInForm from "./SIgnUpForm";
import { AppContext } from "../context/AppContext";

const SignUp = () => {
  const { signIn } = useContext(AppContext);

  return (
    <div className=" flex h-[100vh] w-[100vw] p-[50px]">
      <div className=" w-[50%]">
        <Layout />
      </div>
      <div className=" w-[50%]">{signIn ? <SignInForm /> : <OtpForm />}</div>
    </div>
  );
};

export default SignUp;
