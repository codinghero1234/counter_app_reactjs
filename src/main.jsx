import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { Provider } from "react-redux";
import appStore from "./redux/appStore.jsx";
import { PersistGate } from "redux-persist/integration/react";
import { persistedStore } from "./redux/appStore.jsx";

createRoot(document.getElementById("root")).render(
  <Provider store={appStore}>
    <PersistGate persistor={persistedStore}>
      <StrictMode>
        <App />
      </StrictMode>
    </PersistGate>
  </Provider>
);
