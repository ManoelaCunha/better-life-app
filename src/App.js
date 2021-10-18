import GlobalStyle from "./styles/global"
import Routes from "./routes"
import { Toaster } from "react-hot-toast"

function App() {
  return (
    <div>
      <GlobalStyle />
      <div><Toaster /></div>
      <Routes />
    </div>
  )
}

export default App
