import { View, Image } from "react-native";
import React from "react";
import { H1, H6 } from "../components/Typography";
import Input from "../components/Input";
import Button from "../components/Button";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Link } from "@react-navigation/native";
import { Controller, useForm } from "react-hook-form";
import { useLoginMutation } from "../features/apiSlice";
import Alert from "../components/Alert";
import { useContext } from "react";
import { userContext } from "../components/ContextProvider";

const loginImage = require("../assets/login.png");

const Login = ({ navigation }: { navigation: any }) => {
  const [loginUser, { isLoading, error, isSuccess }] = useLoginMutation();
  const {
    control,
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const { setUser } = useContext(userContext);
  const onSubmit = async (data: any) => {
    try {
      const result = await loginUser({
        full_name: data.fullname,
        password: data.password,
        email: data.email,
      });
      if (result?.data?.status === "success") {
        reset();
        setUser({ jwt: result.data.token, user: result.data.user });
        return navigation.navigate("Dashboard");
      }
      reset();
      return;
    } catch (error: any) {
      return error;
    }
  };
  return (
    <KeyboardAwareScrollView className="px-5">
      <View className="mt-20 mb-12 justify-end">
        <H1>Welcome Back!</H1>
        <View className="justify-center mt-12 items-center">
          <Image className="w-[187.16px] h-[170px]" source={loginImage} />
        </View>
      </View>
      {error?.data?.message && (
        <Alert type="error">{error?.data?.message}</Alert>
      )}
      <View>
        <Controller
          control={control}
          name="email"
          render={({ field: { onChange, value } }) => (
            <Input
              register={register}
              name="email"
              label="Email"
              placeholder="Mary Elliot"
              value={value}
              onChangeText={(value: any) => onChange(value)}
            />
          )}
        />
        <Controller
          control={control}
          name="password"
          render={({ field: { onChange, value } }) => (
            <Input
              register={register}
              name="password"
              label="Password"
              isSecureTextEntry
              placeholder="Mary Elliot"
              value={value}
              onChangeText={(value: any) => onChange(value)}
            />
          )}
        />
        <H6 style={{ color: "#62D2C3", fontWeight: "700", textAlign: "right" }}>
          Forgot Password?
        </H6>
        <View className="mt-12">
          <Button pressHandler={handleSubmit(onSubmit)}>Login</Button>
        </View>
      </View>
      <View className="flex-row mt-2.5 justify-center">
        <H6>Don't have an account ? </H6>
        <Link to={{ screen: "Registration" }}>
          <H6 style={{ color: "#62D2C3", fontWeight: "700" }}>Sign Up</H6>
        </Link>
      </View>
    </KeyboardAwareScrollView>
  );
};

export default Login;
