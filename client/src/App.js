import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import Alltransections from "./pages/Alltransections";
import StoreDashboard from "./pages/StoreDashboard";
import Allstoresales from "./pages/Allstoresales";
import Singlesale from "./pages/Singlesale";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Purchase from "./pages/Purchase";
import { useSelector } from "react-redux";
import Orders from "./pages/Orders";
import Sendmoney from "./pages/Sendmoney";
import Settings from "./pages/Settings";
import ForgetPassword from "./pages/ForgetPassword";
import Updatepassword from "./pages/Updatepassword";
import MinitransectionsRecived from "./components/dashboard/MinitransectionsRecived";

function App() {
  const { currentUser } = useSelector((state) => state.user);
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signUp" element={<Signup />} />
          <Route
            path="/dashboard"
            element={currentUser ? <Dashboard /> : <Login />}
          />
          <Route
            path="/Alltransections"
            element={currentUser ? <Alltransections /> : <Login />}
          />
          <Route
            path="/StoreDashboard"
            element={currentUser ? <StoreDashboard /> : <Login />}
          />
          <Route
            path="/Allstoresales"
            element={currentUser ? <Allstoresales /> : <Login />}
          />
          <Route
            path="/Singlesale/:id"
            element={currentUser ? <Singlesale /> : <Login />}
          />
          <Route path="/Purchase/:id" element={<Purchase />} />
          <Route
            path="/orders"
            element={currentUser ? <Orders /> : <Login />}
          />
          <Route
            path="/Sendmoney"
            element={currentUser ? <Sendmoney /> : <Login />}
          />
          <Route
            path="/Settings"
            element={currentUser ? <Settings /> : <Login />}
          />
          <Route path="/ForgetPassword" element={<ForgetPassword />} />
          <Route path="/Updatepassword" element={<Updatepassword />} />
          <Route
            path="/MinitransectionsRecived"
            element={<MinitransectionsRecived />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

/* 
   <Login />
  <Home />
      <Signup />
                <Dashboard />
      <StoreDashboard />;                <Alltransections />
            <Allstoresales />  <Singlesale />
    
   */

export default App;
