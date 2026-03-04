import "./App.css";
import Navbar from "./components/Navbar";
import StatusCards from "./components/StatusCards";


function App() {
  return (
    <>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <StatusCards />
      </div>
    </>
  );
}

export default App;
