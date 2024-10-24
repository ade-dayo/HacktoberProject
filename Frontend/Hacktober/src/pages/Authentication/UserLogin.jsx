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
const loginSchema = yup.object().shape({
  username: yup.string().required("Username is required"),
  password: yup.string().required("Password is required"),
});

const LoginPage = () => {
    const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const onSubmit = (data) => {
    console.log(data); // handle login logic here
  };

  const handleSignUpClick = () => {
    navigate("/signUp")
  }

  return (
    <div className="flex min-h-screen flex-col lg:flex-row">
      <div className="flex-1 flex flex-col justify-center items-center bg-primary1 p-8">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full p-16"
        >
          <div className="flex items-center justify-center">
            <img src={logoDark} alt="Logo" className="mb-4 w-24" />
          </div>
          <div className="text-center flex flex-col">
            <Heading level={1} color="sec1" className="lg:text-[35px] mt-5 mb-6">
              Welcome Back !!
            </Heading>
            <Text color="sec1" className="mb-8">
              Please enter your credentials to log in
            </Text>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-6">
              <LongInputWithPlaceholder
                placeholder="Username"
                {...register("username")}
                className={`mb-2 ${errors.username ? "border-red-500" : ""}`}
              />
              {errors.username && (
                <Text size="pS" color="red-500">
                  {errors.username.message}
                </Text>
              )}
            </div>
            <div className="mb-6">
              <LongInputWithPlaceholder
                type="password"
                placeholder="Password"
                {...register("password")}
                className={`mb-2 ${errors.password ? "border-red-500" : ""}`}
              />
              {errors.password && (
                <Text size="pS" color="red-500">
                  {errors.password.message}
                </Text>
              )}
            </div>
            <Text
              size="pS"
              weight="font-bold"
              color="sec1"
              className="mb-4 cursor-pointer"
            >
              Forgot password?
            </Text>
            <ButtonLongBlack width="w-full" type="submit">
              Sign In
            </ButtonLongBlack>
          </form>
        </motion.div>
      </div>
      <div className=" hidden  flex-1 lg:flex flex-col justify-center items-center bg-primary2 text-primary1 p-8 rounded-tl-[50px] lg:rounded-bl-[50px]">
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <img src={logoLight} alt="Logo" className="mb-28" />
          <Text size="pL" color="primary1" className="mb-8">
            New to our platform? Sign up now.
          </Text>
          <ButtonLongBlack onClick={handleSignUpClick} width="w-full">Sign Up</ButtonLongBlack>
        </motion.div>
      </div>
    </div>
  );
};

export default LoginPage;
