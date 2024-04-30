import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./sections/Layout";
import Dashboard from "./sections/Dashboard";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route
            path="products"
            element={<div>This is the products page</div>}
          />
        </Route>
        <Route path="/signup" element={<div>This is the sign up page</div>} />
        <Route path="/login" element={<div>This is the login page</div>} />
        <Route path="*" element={<div>404. Page doesn't exist</div>} />
      </Routes>
    </Router>
  );
};

export default App;
