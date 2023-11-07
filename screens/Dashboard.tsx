import {
  View,
  Text,
  ScrollView,
  Image,
  Platform,
  FlatList,
  Dimensions,
  Pressable,
  TextInput,
} from "react-native";
import React, { useEffect, useState } from "react";
import { H1 } from "../components/Typography";
import TaskComponent from "../components/TaskComponent";
import { useContext } from "react";
import { useAddTodoMutation, useGetMyTodosQuery } from "../features/apiSlice";
import { userContext } from "../components/ContextProvider";

const maryImage = require("../assets/Mary.png");
const ok = require("../assets/Ok.png");
const clockImage = require("../assets/clock.png");
const plusImage = require("../assets/plus.png");
const Dashboard = () => {
  const height = Dimensions.get("screen").height;
  const { user, setIsAdding, isAdding } = useContext(userContext);
  const { data, isFetching } = useGetMyTodosQuery(user?.jwt);
  console.log({ data });
  const [newTodo, setNewTodo] = useState("");
  const [addTodo, { isLoading, error, isSuccess }] = useAddTodoMutation();
  return (
    <View className="flex-1 justify-between">
      <View
        style={{ height: "30%" }}
        className="mb-2.5 justify-end bg-[#62D2C3] items-center"
      >
        <Image style={{ height: 100, width: 100 }} source={maryImage} />
        <H1 style={{ color: "white", marginBottom: 15 }}>
          {user?.user?.full_name}
        </H1>
      </View>

      <View style={{ height: "30%" }} className="justify-center items-center">
        <Image style={{ height: 127, width: 127 }} source={clockImage} />
      </View>
      <View style={{ height: "40%" }} className="my-2 ">
        <View className="self-start px-5 mb-3">
          <H1>Tasks List</H1>
        </View>
        <View
          className="bg-white mb-4 flex-1"
          style={{
            marginHorizontal: 20,
            borderRadius: 10,
            ...Platform.select({
              ios: {
                shadowColor: "rgba(0, 0, 0, 0.25)",
                shadowOffset: {
                  width: 0,
                  height: 4,
                },
                shadowOpacity: 0.1,
                shadowRadius: 4,
              },
              android: {
                elevation: 4,
              },
            }),
          }}
        >
          <View className="flex-row justify-between items-center">
            <Text
              style={{ marginLeft: 21 }}
              className="text-[17px]  text=[rgba(0, 0, 0, 0.80)] font-bold mt-3 mb-2"
            >
              Daily Tasks
            </Text>
            <Pressable onPress={() => setIsAdding(true)}>
              <Image
                style={{ height: 20, width: 20, marginRight: 18 }}
                source={plusImage}
              />
            </Pressable>
          </View>
          <View className="flex-row justify-between mx-4 items-center border-b-2">
            {isAdding && (
              <TextInput
                onChangeText={(value) => setNewTodo(value)}
                className=" flex-1"
              />
            )}
            {newTodo && (
              <Pressable
                onPress={async () => {
                  const result = await addTodo({
                    jwt: user?.jwt,
                    body: {
                      task: newTodo,
                      completed: false,
                    },
                  });
                  setIsAdding(false);
                }}
              >
                <Image style={{ height: 30, width: 30 }} source={ok} />
              </Pressable>
            )}
          </View>
          <FlatList
            style={{ maxHeight: height * 0.2, paddingBottom: 20 }}
            data={data?.todos}
            renderItem={({
              item,
            }: {
              item: { task: string; completed: boolean };
            }) => <TaskComponent completed={item.completed} task={item.task} />}
          />
        </View>
      </View>
    </View>
  );
};

export default Dashboard;
