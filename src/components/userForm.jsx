import useForm from "../hooks/useForm";
import Joi from "joi-browser";

const schema = {
  name: Joi.string().min(9).max(30).required().label("Fullname"),
  username: Joi.string().min(5).max(20).required().label("Username"),
  email: Joi.string()
    .required()
    .label("E-mail")
    .regex(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    ),
  phone: Joi.string().length(11).required(),
};

const UserForm = ({ data, setData, selectedItem }) => {
  const initialState = {
    id: null,
    name: "",
    username: "",
    email: "",
    phone: "",
  };
  const { values, renderInput, renderButton, handleSubmit } = useForm(
    initialState,
    schema,
    data,
    setData,
    selectedItem
  );

  return (
    <form onSubmit={handleSubmit}>
      {renderInput("Fullname", "name", values.name)}
      {renderInput("Username", "username", values.username)}
      {renderInput("E-mail", "email", values.email)}
      {renderInput("Phone", "phone", values.phone)}
      {renderButton("Submit")}
    </form>
  );
};

export default UserForm;
