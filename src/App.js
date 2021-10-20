import "./styles.css";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Routes from "./Components/Routes";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <div style={{ minHeight: "80vh", padding: "1rem" }}>
        <Routes />
      </div>
      <Footer />
    </div>
  );
}
