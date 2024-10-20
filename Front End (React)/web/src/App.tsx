import { Header } from "./components/Header"
import { Home } from "./pages/Home"
import { GlobalStyle } from "./styles/global"
import { WalletProvider } from "./contexts/walletContext";

function App() {  
  return (
    <WalletProvider>
      <Header />
      <Home />
      <GlobalStyle />
    </WalletProvider>
  )
}

export default App
