import Label from "../commonComponent/Label";

const Input = ({labelTxt,type,className}) => {
  return (
    <div>
      <Label text={labelTxt} className="" />
      <input
        type={type}
        className={`w-full mt-6 bg-navBgColor h-24 focus:outline-transparent rounded-xl ${className}`}
      />
    </div>
  );
};

export default Input;
