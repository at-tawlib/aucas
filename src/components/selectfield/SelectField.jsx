/* eslint-disable react/prop-types */
import './SelectField.css';

const SelectField = ({ label, id, name, value, options, onChange }) => {
  return (
    <div className="form-group">
      <label htmlFor={id}>{label}:</label>
      <select
        id={id}
        value={value}
        name={name}
        onChange={onChange}
        required
      >
        <option value="" disabled>
          -- Select {label} --
        </option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectField;
