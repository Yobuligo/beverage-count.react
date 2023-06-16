import { useContext } from "react";
import { AppContext } from "../../context/AppContext";

export const Summary: React.FC = () => {
  const context = useContext(AppContext);
  context.consumptions.dataObjects.forEach((consumption) => {
  })
  return <>ml</>;
};
