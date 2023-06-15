import "./App.css";
import { AppContextProvider } from "./features/appContextProvider/AppContextProvider";
import { BeverageCardList } from "./features/beverage/list/BeverageCardList";
import { Summary } from "./features/summary/Summary";

function App() {
  return (
    <AppContextProvider>
      <BeverageCardList />
      <div>
        <Summary />
      </div>
    </AppContextProvider>
  );
}

export default App;
