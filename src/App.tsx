import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import { ContentContainer } from "./components/atoms/ContentContainer";
import { Provider } from "react-redux";
import { store } from "./redux/store";
const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <ContentContainer />
      </Provider>
    </BrowserRouter>
  );
};

export default App;
