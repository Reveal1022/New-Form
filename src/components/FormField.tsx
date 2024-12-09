import React from "react";
type DivProps = React.ComponentProps<"div">;

type FormField = {
  label: string;
  placeholder: string;
  type: "text" | "dropdown";
  required?: boolean;
  options?: string[] | readonly string[];
} & DivProps;

const FormField = ({
  label,
  placeholder,
  required = true,
  type,
  options = [],
  ...divProps
}: FormField) => {
  return (
    <div {...divProps}>
      <label className="p-1">
        {label} {required && <span className="text-[#ff3b30]">*</span>}
      </label>
      {type === "text" && (
        <input
          type="text"
          placeholder={placeholder}
          className="w-[387px] h-[44px] border-[1px] border-[#d7dadc] rounded-lg  pl-5"
        />
      )}
      {type === "dropdown" && (
        <div className="relative w-[387px] h-[44px] border-[1px] overflow-hidden border-[#d7dadc] rounded-lg  ">
          {" "}
          {/* <input
            type="text"
            placeholder={placeholder}
            className="h-full pl-5"
          />
          <BiChevronDown className="absolute top-1/2  -translate-y-1/2 right-2 text-[#9b9b9b] text-[20px]" /> */}
          <select className="w-[380px] h-[44px] border-[#d7dadc] rounded-lg  pl-5 focus:outline-none">
            <option value="" disabled>
              {placeholder}
            </option>
            {options.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      )}
    </div>
  );
};

export default FormField;
