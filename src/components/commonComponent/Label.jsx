const Label = ({ className, text }) => {
  return (
    <label
      className={`text-2xl font-pop font-medium text-primaryColor ${className}`}
    >
      {text}
    </label>
  );
};

export default Label;
