import { TextField, Button } from "@mui/material";
import { useForm } from "react-hook-form";

type FORMDATA = {
  firstName: string;
  lastName: string;
  number: string;
  email: string;
  password: string;
  conformPassword: string;
};
const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FORMDATA>({
    defaultValues: {
      firstName: "",
      lastName: "",
      number: "",
      email: "",
      password: "",
      conformPassword: "",
    },
  });

  const onSubmit = (data: FORMDATA) => {
    console.log(data);
  };

  return (
    <div>
      <form
        noValidate
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-10 items-center my-10"
      >
        <TextField
          placeholder="First Name"
          label="First Name"
          className="w-[300px]"
          {...register("firstName", {
            required: { value: true, message: "this field is requird" },
          })}
          error={!errors}
          helperText={errors.firstName?.message}
        />
        <TextField
          placeholder="Last Name"
          label="Last Name"
          className="w-[300px]"
          {...register("lastName")}
        />
        <TextField
          placeholder="Number"
          label="Number"
          className="w-[300px]"
          {...register("number")}
        />
        <TextField
          placeholder="Email"
          label="Email"
          className="w-[300px]"
          {...register("email")}
        />
        <TextField
          placeholder="Password"
          label="Password"
          className="w-[300px]"
          {...register("password")}
        />
        <TextField
          placeholder="conform Password"
          label="Conform Password"
          className="w-[300px]"
          {...register("conformPassword")}
        />
        <Button
          className="bg-blue-400 color-white"
          variant="contained"
          type="submit"
        >
          Signup
        </Button>
      </form>
    </div>
  );
};

export default SignUp;
