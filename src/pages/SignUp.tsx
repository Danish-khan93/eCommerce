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
          {...register("lastName",{required:{
            value:true,message:"this field is required"
          }})}
          error={!errors}
          helperText={errors.lastName?.message}
        />
        <TextField
          placeholder="Number"
          label="Number"
          className="w-[300px]"
          {...register("number" ,{required:{
            value:true,message:"this field is required"
          }})}
          error={!errors}
          helperText={errors.number?.message}
        />
        <TextField
          placeholder="Email"
          label="Email"
          className="w-[300px]"
          {...register("email", {
            required: { value: true, message: "this field is requird" },
            pattern: {
              value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
              message: "email is wrong",
            },
          })}
          error={!errors}
          helperText={errors.email?.message}
        />
        <TextField
          placeholder="Password"
          label="Password"
          className="w-[300px]"
          {...register("password", {
            required: { value: true, message: "this field is requird" },
            pattern: {
              value: /^(?=.*[A-Za-z])(?=.*d)[A-Za-zd]{8,}$/,
              message: "password must be in lower uper case and number",
            },
          })}
          error={!errors}
          helperText={errors.password?.message}
        />
        <TextField
          placeholder="Password"
          label="Password"
          className="w-[300px]"
          {...register("conformPassword", {
            required: { value: true, message: "this field is requird" },
            pattern: {
              value: /^(?=.*[A-Za-z])(?=.*d)[A-Za-zd]{8,}$/,
              message: "password must be in lower uper case and number",
            },
          })}
          error={!errors}
          helperText={errors.conformPassword?.message}
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
