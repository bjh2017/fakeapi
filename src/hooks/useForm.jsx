import { useState } from "react";

const useForm = (initialState, data, setData, selectedItem) => {
  const [values, setValues] = useState(initialState);

  const handleInput = (e) => {
    const newValues = { ...values };
    newValues[e.target.name] = e.target.value;
    setValues(newValues);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (values.id) {
      // edit
    } else {
      // add
      const newValues = { ...values };
      const id = data[data.length - 1].id + 1 || 1;
      newValues.id = id;
      console.log(newValues);
      setData([newValues, ...data]);
    }
    setValues(initialState);
  };

  const renderInput = (label, name, value, type = "text") => {
    return (
      <div class="mb-3">
        <label for={name} class="form-label">
          {label}
        </label>
        <input
          type={type}
          className="form-control"
          id={name}
          name={name}
          value={value}
          onChange={handleInput}
        />
      </div>
    );
  };

  const renderButton = (label) => {
    return (
      <button type="submit" className="btn btn-primary">
        {label}
      </button>
    );
  };

  return {
    values,
    handleInput,
    handleSubmit,
    renderInput,
    renderButton,
  };
};

export default useForm;
