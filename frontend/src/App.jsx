import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <div className="app">

      <Navbar />

      <Sidebar />

      <Dashboard />

    </div>
  );
}

export default App;
