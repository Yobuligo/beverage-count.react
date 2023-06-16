import "./App.css";
import { AppContextProvider } from "./features/appContextProvider/AppContextProvider";
import { BeverageCardList } from "./features/beverage/list/BeverageCardList";

function App() {
  return (
    <AppContextProvider>
      <BeverageCardList />
    </AppContextProvider>
  );
}

export default App;
