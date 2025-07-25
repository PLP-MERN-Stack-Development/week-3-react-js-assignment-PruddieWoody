import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from './pages/Home';
import About from './pages/About';
import Tasks from './pages/Tasks';
import ApiDemo from './pages/ApiDemo';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/api-demo" element={<ApiDemo />} />
      </Routes>
    </Layout>
  );
}

export default App;
