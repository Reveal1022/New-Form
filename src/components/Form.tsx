import { useState } from "react";
import FormField from "./FormField";

const Form = () => {
  const [formData, setFormData] = useState({
    legalName: "",
    businessName: "",
    registrationNumber: "",
    randomNumber: "",
    website: "",
    industry: "",
    dropdown1: "",
    dropdown2: "",
    accountIntent: "",
    randomCount: "",
    expectedVisits: "",
    purpose: "",
    productDescription: "",
    contactEmail: "",
    incorporationCertificate: null,
    companyLogo: null,
  });

  const FORM_FIELDS = [
    {
      label: "Legal Name",
      placeholder: "Legal Name",
      required: true,
      type: "text",
    },
    {
      label: "Doing business as",
      placeholder: "Doing business as",
      required: true,
      type: "text",
    },
    {
      label: "Company Registration Number",
      placeholder: "Company Registration Number",
      required: true,
      type: "text",
    },
    {
      label: "Random Registration Number",
      placeholder: "Random Registration Number",
      required: true,
      type: "text",
    },
    {
      label: "Website URL",
      placeholder: "Website URL",
      required: true,
      type: "text",
    },
    {
      label: "Industry Name",
      placeholder: "Industry Name",
      required: true,
      type: "dropdown",
      options: ["Elegance", "Spark"],
    },
    {
      label: "One Random Dropdown?",
      placeholder: "Options nai options",
      required: true,
      type: "dropdown",
      options: ["One", "Two", "Three"],
    },
    {
      label: "Which dropdown would you like to select?",
      placeholder: "More Options",
      required: true,
      type: "dropdown",
      options: ["First", "Second", "Third"],
    },
    {
      label: "Another Random Dropdown Appears",
      placeholder: "Return of the options",
      required: true,
      type: "dropdown",
      options: ["Yes", "No"],
    },
    {
      label: "Account Usage Intent",
      placeholder: "Account Usage Intent",
      required: true,
      type: "dropdown",
      options: ["None", "IDK", "Pass"],
    },
    {
      label: "Random count per month",
      placeholder: "Put the value get the answer",
      required: true,
      type: "text",
    },
    {
      label: "Expected total visits in this page",
      placeholder: "In Number",
      required: true,
      type: "text",
    },
    {
      label: "Purpose of using fake form",
      placeholder: "Purpose of using fake form",
      required: true,
      type: "text",
    },
    {
      label: "Ek description toh banta hai",
      placeholder: "Product Description",
      required: true,
      type: "text",
    },
    {
      label: "Contact email",
      placeholder: "Contact email",
      required: true,
      type: "text",
    },
  ] as const;

  return (
    <div className="flex flex-col items-center">
      <img src="Bar.svg" alt="" />
      <div className="max-w-5xl mx-auto p-8 rounded-lg w-[900px] ">
        <div className="mt-5">
          <h1 className="text-2xl mb-2 text-[20px] text-[#1d1d22] font-medium">
            Tell us more about your business
          </h1>
          <p className="text-[#636567] font-normal2">
            Your info is like the Wi-Fi password—totally crucial for keeping
            things running, impressing the money folks, and making sure you get
            top-notch service without any buffering!
          </p>
        </div>
        <form className="grid grid-cols-2 items-center justify-center gap-5 text-[#404040] text-[14px] mt-[35px]">
          {FORM_FIELDS.map((field) => {
            return (
              <FormField
                key={field.label}
                {...field}
                className="flex flex-col"
              />
            );
          })}
        </form>
        {/* Certification of Incorporation */}
        <div className="text-[16px] font-medium mt-[40px]">
          <label
            className="block text-gray-700 font-medium mb-2"
            htmlFor="incorporationCertificate"
          >
            Certification of Incorporation{" "}
            <span className="text-[#ff3b30]">*</span>
            <p className="text-[13px] font-normal2 text-[#636567] py-2">
              Upload the incorporation certificate
            </p>
          </label>
          <div className="w-full h-[188px] p-3 border-[1px] rounded-lg border-dashed border-[#e5e7ea] flex flex-col items-center justify-center  font-light text-[#636567]">
            <img
              src="svg.svg"
              className="bg-[#f6f6f6] h-[52px] w-[52px] p-[5px] rounded-full"
              alt=""
            />
            <label htmlFor="certificate" className="">
              <span className="text-[#1d1d22] underline">Click to Upload</span>{" "}
              or drag and drop
            </label>
            <p>Maximum file size 50 MB</p>
            <input
              type="file"
              accept="image/*"
              className="hidden"
              id="certificate"
            />
          </div>
        </div>

        {/* Company Logo */}
        <div className="text-[16px] font-medium mt-[40px]">
          <label
            className="block text-gray-700 font-medium mb-2"
            htmlFor="incorporationCertificate"
          >
            Company Logo <span className="text-[#ff3b30]">*</span>
            <p className="text-[13px] font-normal2 text-[#636567] py-2">
              Upload the company logo{" "}
            </p>
          </label>
          <div className="w-full h-[188px] p-3 border-[1px] rounded-lg border-dashed border-[#e5e7ea] flex flex-col items-center justify-center  font-light text-[#636567]">
            <img
              src="svg.svg"
              className="bg-[#f6f6f6] h-[52px] w-[52px] p-[5px] rounded-full"
              alt=""
            />
            <label htmlFor="certificate" className="">
              <span className="text-[#1d1d22] underline">Click to Upload</span>{" "}
              or drag and drop
            </label>
            <p>Maximum file size 50 MB</p>
            <input
              type="file"
              accept="image/*"
              className="hidden"
              id="certificate"
            />
          </div>
        </div>

        {/* Submit Button */}
        <div className="flex justify-between mt-[40px] mb-[20px]">
          <button
            type="button"
            className="w-[95px] h-[48px] border-[1.5px] border-[#1d1d22] rounded-lg"
          >
            Previous
          </button>
          <button
            type="button"
            className="w-[95px] h-[48px] bg-[#e50101] rounded-lg text-white"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Form;
