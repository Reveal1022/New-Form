import { useContext } from "react";
import LayoutCard from "./LayoutCard";
import { IoMdArrowRoundBack } from "react-icons/io";
import { AppContext } from "../context/AppContext";

const Layout = () => {
  const { setSignIn } = useContext(AppContext);
  const getBack = () => {
    setSignIn(true);
  };

  return (
    <div className="bg-[url('bg1.png')] h-full bg-cover relative flex justify-center">
      <button
        className="flex items-center text-[14px] font-light text-[#e0e0e0] gap-1 absolute top-10 left-10
      "
        onClick={getBack}
      >
        <i>
          <IoMdArrowRoundBack />
        </i>
        Back
      </button>

      <div className=" h-[70%] w-full mt-[20%]">
        <h1 className="text-white text-center text-2xl font-medium mb-10">
          Layout Cards
        </h1>
        <div className=" flex justify-center mb-10">
          <LayoutCard
            flag="flag1.svg"
            country="Singapore"
            office="Head Office"
            company="XYZ Pvt. Ltd."
            location="Road to nowhere, 06-404, 500 Internal Error"
          />
        </div>
        <div className="flex justify-center gap-[5%]">
          <LayoutCard
            flag="flag3.svg"
            country="Hong Kong"
            office="Branches"
            company="XYZ Pte. Ltd."
            location="The Infinite Loop Office, 404 Timeout Plaza"
          />
          <LayoutCard
            flag="flag2.webp"
            country="USA"
            office="Branches"
            company="XYZ Pte. Ltd."
            location="The Infinite Loop Office, 404 Timeout Plaza"
          />
        </div>
      </div>
    </div>
  );
};

export default Layout;
