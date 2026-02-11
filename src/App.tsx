import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";
import { GlobalStyle } from "./styles/global";

function App() {
  return (
    <>
      <GlobalStyle />
      <h1>Lista de Contatos</h1>
      <ContactForm />
      <ContactList />
    </>
  );
}

export default App;
