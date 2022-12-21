import useForm from "../hooks/useForm";

const UserForm = ({ data, setData }) => {
  const initialState = {
    id: null,
    name: "",
    username: "",
    email: "",
    phone: "",
  };
  const { values, renderInput, renderButton, handleSubmit } = useForm(
    initialState,
    data,
    setData,
    ""
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
