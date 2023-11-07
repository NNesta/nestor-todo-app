import { View } from "react-native";
import React from "react";
import { H1, H6 } from "../components/Typography";
import Input from "../components/Input";
import Button from "../components/Button";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Link } from "@react-navigation/native";
import { useForm, Controller } from "react-hook-form";
import { useRegisterMutation } from "../features/apiSlice";
import Alert from "../components/Alert";

const Registration = ({ navigation }: { navigation: any }) => {
  const [registerUser, { isLoading, error, isSuccess }] = useRegisterMutation();
  const {
    control,
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data: any) => {
    try {
      const result = await registerUser({
        full_name: data.fullname,
        password: data.password,
        email: data.email,
      });
      if (result?.error?.data?.status === "success") {
        reset();
        return navigation.navigate("Login");
      }
      reset();
      return;
    } catch (error: any) {
      return error;
    }
  };
  return (
    <KeyboardAwareScrollView className="px-5">
      <View className="mt-32 mb-12 justify-end">
        <H1>Welcome Onboard!</H1>
        <H6>Lets help you in completing your tasks</H6>
      </View>
      <View>
        {error?.data?.message && (
          <Alert displayDuration={10000} type="error">
            {error?.data?.message}
          </Alert>
        )}
        <Controller
          control={control}
          name="fullname"
          render={({ field: { onChange, value } }) => (
            <Input
              register={register}
              name="fullname"
              label="Full Name"
              placeholder="Mary Elliot"
              value={value}
              onChangeText={(value: any) => onChange(value)}
            />
          )}
        />
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
        <Controller
          control={control}
          name="password2"
          render={({ field: { onChange, value } }) => (
            <Input
              register={register}
              name="password2"
              label="Confirm Password"
              isSecureTextEntry
              placeholder="Mary Elliot"
              value={value}
              onChangeText={(value: any) => onChange(value)}
            />
          )}
        />
        <View className="mt-12">
          <Button pressHandler={handleSubmit(onSubmit)}>Register</Button>
        </View>
      </View>
      <View className="flex-row mt-2.5 justify-center">
        <H6>Already have an account ? </H6>
        <Link to={{ screen: "Login" }}>
          <H6 style={{ color: "#62D2C3", fontWeight: "700" }}>Sign In</H6>
        </Link>
      </View>
    </KeyboardAwareScrollView>
  );
};

export default Registration;
