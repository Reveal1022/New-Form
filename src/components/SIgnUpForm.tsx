import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { BiUser } from "react-icons/bi";

const SignInForm: React.FC = () => {
  const { setSignIn } = useContext(AppContext);

  const onSubmit = () => {
    setSignIn(false);
  };

  const { setEmail } = useContext(AppContext);

  return (
    <div className=" flex flex-col items-center justify-center h-full text-black border-l-2 border-black">
      <form
        className="flex flex-col bg-white border-[3px] border-[#e50101] w-[500px] h-[500px] gap-2 p-5 rounded-2xl items-center justify-center"
        onSubmit={onSubmit}
      >
        <BiUser className="text-[70px] bg-gray-300 rounded-full font-thin p-2" />
        <h1 className="font-sans text-[30px] mb-10 text-center">SignInForm</h1>

        <input
          type="text"
          placeholder="Email"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setEmail(e.target.value);
          }}
          className="border-black pl-2 py-2 text-[14px] font-light border-b-[1px] w-full bg-transparent focus:outline-none"
        />

        <input
          type="password"
          placeholder="Password"
          className="border-black pl-2 py-2 text-[14px] font-light border-b-[1px] w-full bg-transparent focus:outline-none"
        />
        <button
          type="submit"
          className="bg-[#e50101] py-3 rounded-md text-black mt-10 w-[60%] font-extralight"
        >
          SignIn
        </button>
      </form>
    </div>
  );
};

export default SignInForm;
