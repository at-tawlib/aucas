/* eslint-disable react/prop-types */
import './TextInput.css';

const TextInput = ({ label, type, name, value, onChange, required }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}:</label>
      <input
        type={type}
        name={name}
        id={name}
        value={value}
        onChange={onChange}
        required={required}
      />
    </div>
  );
};

export default TextInput;
