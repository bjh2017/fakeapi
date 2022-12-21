import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const useForm = (initialState, data, setData, selectedItem) => {
  const [values, setValues] = useState(initialState);

  useEffect(() => {
    if (selectedItem) setValues(selectedItem);
  }, [selectedItem]);

  const handleInput = (e) => {
    const newValues = { ...values };
    newValues[e.target.name] = e.target.value;
    setValues(newValues);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let valid = true;

    Object.keys(values).forEach((key) => {
      if (key !== "id" && values[key].length < 3) valid = false;
    });

    if (!valid) {
      toast.error("All Fields are Required!", { theme: "colored" });
      return;
    }

    if (values.id) {
      // edit
      const index = data.findIndex((d) => d.id === values.id);
      const newData = [...data];
      newData[index] = values;
      setData(newData);
      toast.success("User is updated successfuly...", { theme: "colored" });
    } else {
      // add
      const newValues = { ...values };
      const id = data[data.length - 1].id + 1 || 1;
      newValues.id = id;
      console.log(newValues);
      setData([newValues, ...data]);
      toast.success("User is added successfuly...", { theme: "colored" });
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
