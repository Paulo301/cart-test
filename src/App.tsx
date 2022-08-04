import ReactModal from "react-modal";

import { Home } from "./pages/Home";
import { GlobalStyle } from "./styles/global";

ReactModal.setAppElement('#root');

export function App() {
  return (
    <>
      <Home />
      <GlobalStyle />
    </>
  );
}
