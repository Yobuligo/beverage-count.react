import { AppContext } from "../../context/AppContext";
import { useDataAccessObject } from "../../hooks/useDataAccessObject";
import { IAppContextProviderProps } from "./IAppContextProviderProps";

export const AppContextProvider: React.FC<IAppContextProviderProps> = (
  props
) => {
  return (
    <AppContext.Provider value={{ beverages: useDataAccessObject() }}>
      {props.children}
    </AppContext.Provider>
  );
};
