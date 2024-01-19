const DropDown = ({ title, options }) => {
  return (
    <select name={title}>
      <option defaultValue={title}>{title}</option>
      {options &&
        options.map((val) => {
          return (
            <option value={val} key={val}>
              {val}
            </option>
          );
        })}
    </select>
  );
};

export default DropDown;
