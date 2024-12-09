import { useContext } from "react";
import OtpField from "./OtpField";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const OtpForm = () => {
  const navigate = useNavigate();

  const { email } = useContext(AppContext);

  return (
    <div className=" w-full h-full">
      <div className=" h-full ">
        <div className="flex flex-col justify-between h-full mx-[90px] w-[520px]">
          <div className="text-[16px] text-[#646464] font-light mt-[50px] pt-10">
            <img src="logo.png" alt="" />
            <div className="mt-20">
              <h1 className="text-[30px] font-bold">Verify your Email</h1>
              <p>Please enter the 6 digit code we just sent to {email}</p>
            </div>
            <div className="flex flex-col gap-8 mt-8 ">
              <OtpField />
              <button
                className="bg-[#e50101] text-white rounded-md font-extralight text-sm w-[520px] py-2"
                onClick={() => {
                  navigate("form");
                }}
              >
                Verify
              </button>
            </div>
            <span className="block pt-2">
              Didn’t receive a code?{" "}
              <button className="text-[#0090FF]">Resend Code</button>
            </span>
          </div>
          <p className="text-[14px] font-light">
            By continuing, you’re agreeing to Nobody’s{" "}
            <span className="text-[#0090FF]">Terms of Service</span>,{" "}
            <span className="text-[#0090FF]">Privacy Policy </span> and{" "}
            <span className="text-[#0090FF]">Cookie Policy</span>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OtpForm;
