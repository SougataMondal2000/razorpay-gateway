import { BrowserRouter, Route, Routes } from "react-router-dom";
import OrderPage from "./pages/OrderPage";
// import PaymentGateway from "./pages/PaymentGateway";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <div className="content shadow-xl rounded-2xl">
              <OrderPage />
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
