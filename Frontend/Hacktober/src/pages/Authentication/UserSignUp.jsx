import React from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Text, Heading } from "../../components/Text";
import { ButtonLongBlack } from "../../components/Button";
import { LongInputWithPlaceholder } from "../../components/Input";
import logoDark from "../../assets/logo-dark.svg";
import logoLight from "../../assets/logo-light.svg";
import { useNavigate } from "react-router-dom";

// Validation schema using yup
const signupSchema = yup.object().shape({
  firstName: yup.string().required("First Name is required"),
  lastName: yup.string().required("Last Name is required"),
  contactNo: yup
    .string()
    .required("Contact No is required")
    .matches(/^\d+$/, "Contact No must be numeric"),
  email: yup
    .string()
    .email("Invalid email address")
    .required("Email is required"),
  username: yup.string().required("Username is required"),
  password: yup.string().required("Password is required").min(6, "Password must be at least 6 characters"),
});

const SignupPage = () => {
    const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(signupSchema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  const handleSignInClick = () => {
    navigate("/")
  }

  return (
    <div className="flex min-h-screen flex-col lg:flex-row">
      <div className="hidden flex-1 lg:flex flex-col justify-center items-center rounded-tr-[50px] rounded-br-[50px] bg-primary2 text-primary1 p-8">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <img src={logoLight} alt="Logo" className="mb-28" />
          <Text size="pL" color="primary1" className="mb-10">
            Already have an account? Sign in now.
          </Text>
          <ButtonLongBlack onClick={handleSignInClick} width="w-full">Sign In</ButtonLongBlack>
        </motion.div>
      </div>
      <div className="flex-1 flex w-full flex-col justify-center items-center bg-primary1 p-4">
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:p-10 p-4"
        >
          <div className="flex items-center justify-center">
            <Heading level={1} color="sec1" className="text-[40px] mb-2">
              Sign Up
            </Heading>
            <img src={logoDark} alt="Logo" className="mb-4 ml-4" />
          </div>
          <div className="flex mt-8 mb-8 justify-center">
            <Text size="pL" color="sec1" className="mb-8 text-center">
              Please provide your information to sign up.
            </Text>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid lg:grid-cols-2 gap-4 mb-4">
              <div>
                <LongInputWithPlaceholder
                  placeholder="First Name"
                  {...register("firstName")}
                  className={`${errors.firstName ? "border-red-500" : ""}`}
                />
                {errors.firstName && (
                  <Text size="pS" color="red">
                    {errors.firstName.message}
                  </Text>
                )}
              </div>
              <div>
                <LongInputWithPlaceholder
                  placeholder="Last Name"
                  {...register("lastName")}
                  className={`${errors.lastName ? "border-red-500" : ""}`}
                />
                {errors.lastName && (
                  <Text size="pS" color="red">
                    {errors.lastName.message}
                  </Text>
                )}
              </div>
            </div>
            <div className="grid lg:grid-cols-2 gap-4 mb-4">
              <div>
                <LongInputWithPlaceholder
                  placeholder="Contact No"
                  {...register("contactNo")}
                  className={`${errors.contactNo ? "border-red-500" : ""}`}
                />
                {errors.contactNo && (
                  <Text size="pS" color="red">
                    {errors.contactNo.message}
                  </Text>
                )}
              </div>
              <div>
                <LongInputWithPlaceholder
                  placeholder="Email"
                  {...register("email")}
                  className={`${errors.email ? "border-red-500" : ""}`}
                />
                {errors.email && (
                  <Text size="pS" color="red">
                    {errors.email.message}
                  </Text>
                )}
              </div>
            </div>
            <div className="grid lg:grid-cols-2 gap-4 mb-4">
              <div>
                <LongInputWithPlaceholder
                  placeholder="Username"
                  {...register("username")}
                  className={`${errors.username ? "border-red-500" : ""}`}
                />
                {errors.username && (
                  <Text size="pS" color="red">
                    {errors.username.message}
                  </Text>
                )}
              </div>
              <div>
                <LongInputWithPlaceholder
                  placeholder="Password"
                  type="password"
                  {...register("password")}
                  className={`${errors.password ? "border-red-500" : ""}`}
                />
                {errors.password && (
                  <Text size="pS" color="red">
                    {errors.password.message}
                  </Text>
                )}
              </div>
            </div>
            <div className="flex justify-center">
              <ButtonLongBlack width="w-9/12" type="submit">
                Sign Up
              </ButtonLongBlack>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default SignupPage;
