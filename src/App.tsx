import './colors.css'
import { AppContextProvider } from "./features/appContextProvider/AppContextProvider";
import { BeveragePage } from "./pages/BeveragePage";

function App() {
  return (
    <>
      <AppContextProvider>
        <BeveragePage />
      </AppContextProvider>
    </>
  );
}

export default App;
