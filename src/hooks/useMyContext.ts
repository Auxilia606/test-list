import { useContext } from "react";
import { MyContext } from "../contexts/MyContextProvider";

const useMyContext = () => {
  const context = useContext(MyContext);

  if (!context) {
    throw new Error("no context");
  }

  return context;
};

export default useMyContext;
