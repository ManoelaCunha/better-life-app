import GlobalStyle from "./styles/global";
import Routes from "./routes";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <GlobalStyle />
    <div>
        <Toaster />
     </div>
     <Routes />
    </>
  )
}

export default App;
