import { AppContext } from "../../context/AppContext";
import { useDataAccessObject } from "../../hooks/useDataAccessObject";
import { useValue } from "../../hooks/useValue";
import { IAppContextProviderProps } from "./IAppContextProviderProps";

export const AppContextProvider: React.FC<IAppContextProviderProps> = (
  props
) => {
  return (
    <AppContext.Provider
      value={{
        beverages: useDataAccessObject(),
        totalConsumption: useValue(0),
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};
