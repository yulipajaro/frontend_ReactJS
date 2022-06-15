import './App.css';
import BusquedaVuelos from "./components/BusquedaVuelos";
import SelectFlight from "./components/SelectFlight";import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (

    <div className="App">
      <BrowserRouter>
    <Routes>
      <Route path="/" element={<BusquedaVuelos />}>
        <Route index element={<BusquedaVuelos />} />
      </Route>
      <Route path="/select-flight" element={<SelectFlight />}/>
      <Route path="/not-found" element={<h1>ERROR</h1>}/>
    </Routes>
  </BrowserRouter>
  </div>
  );
}

export default App;
