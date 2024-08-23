import "./App.css";
import Racer from "./components/Racer";
import Result from "./components/Result";
import Graphql from "./components/Graphql";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import client from "./apolloClient";
import { ApolloProvider } from "@apollo/client";

function App() {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Routes>
          <Route path="/racer" element={<Racer />} />
          <Route path="/result" element={<Result />} />
          <Route path="/graphql" element={<Graphql />} />
        </Routes>
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
