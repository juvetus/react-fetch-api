import Container from "./components/Container";
import { Square } from "./components/Square";
import "./App.css";

// const URL = "https://random-data-api.com/api/company/random_company";
// const data = fetch(URL);

// const data = [
//   { id: 1, name: "Marco" },
//   { id: 2, name: "Lincoln" },
//   { id: 3, name: "Aya" },
// ];

function App() {
  return (
    <div>
      <Square>
        <Container />
      </Square>
    </div>
  );
}

export default App;
