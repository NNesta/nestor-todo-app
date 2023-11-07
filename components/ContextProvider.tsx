import { View, Text } from "react-native";
import React, { ReactNode, createContext, useState } from "react";

export interface UserState {
  jwt: string;
  user: { id: number; full_name: string; email: string } | null;
}
export const userContext = createContext<any>(null);

const ContextProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState();
  const [isAdding, setIsAdding] = useState(false);
  return (
    <userContext.Provider value={{ user, setUser, isAdding, setIsAdding }}>
      {children}
    </userContext.Provider>
  );
};

export default ContextProvider;
