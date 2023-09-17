import React, { createContext, useState } from "react";

type MyContextProviderProps = {
  children: React.ReactNode;
};

type MyContextType = {
  virtualize: boolean;
  count: number;
};

export const MyContext = createContext<
  | (MyContextType & {
      setContext: React.Dispatch<React.SetStateAction<MyContextType>>;
    })
  | null
>(null);

const MyContextProvider: React.FC<MyContextProviderProps> = (props) => {
  const { children } = props;
  const [context, setContext] = useState<MyContextType>({
    virtualize: false,
    count: 10,
  });

  return (
    <MyContext.Provider value={{ ...context, setContext }}>
      {children}
    </MyContext.Provider>
  );
};

export default MyContextProvider;
