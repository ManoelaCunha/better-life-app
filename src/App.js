import GlobalStyle from "./styles/global"
import Routes from "./routes"
import { Toaster } from "react-hot-toast"

function App() {
  return (
    <div>
      <GlobalStyle />
      <div><Toaster /></div>

      <h1>Better Life</h1>
      <Routes />
    </div>
  )
}

export default App
