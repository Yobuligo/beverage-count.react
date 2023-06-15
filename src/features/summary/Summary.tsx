import { useContext, useState } from "react";
import { AppContext } from "../../context/AppContext";

export const Summary: React.FC = () => {
  const [consumption, setConsumption] = useState(0);
  const context = useContext(AppContext);

//   setConsumption(() => {
//     let result: number = 0;
//     context.beverages.dataObjects.forEach((beverage) => {
//       beverage.volumes.forEach((volume) => {
//         volume.consumptions.forEach((consumption) => {
//           result += volume.size;
//         });
//       });
//     });

//     return result;
//   });

  return <>{consumption} ml</>;
};
