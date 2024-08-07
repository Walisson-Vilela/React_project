import Header from "./Header";
import Home from "./Home";
import Produtos from "./Produtos";
import "./App.css";

function App() {
  const { pathname } = window.location;

  let Pagina;
  if (pathname === "/produtos") {
    Pagina = Produtos;
  } else {
    Pagina = Home;
  }

  return (
    <section>
      <Header />
      <Pagina />
    </section>
  );
}

export default App;
