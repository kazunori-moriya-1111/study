import "./App.css";
import Racer from "./components/Racer";
import Result from "./components/Result";
import GetResult from "./components/GetResult";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import client from "./apolloClient";
import { ApolloProvider } from "@apollo/client";
import Footer from "./components/Footer";
import GetRacer from "./components/GetRacer";

function App() {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Routes>
          <Route path="/racer" element={<Racer />} />
          <Route path="/result" element={<Result />} />
          <Route path="/get_result" element={<GetResult />} />
          <Route path="/get_racer" element={<GetRacer />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </ApolloProvider>
  );
}

export default App;
