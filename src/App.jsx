import { Provider } from "react-redux";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import FormProvider from "./components/hooks/useFormValidation";
import Contact from "./components/pages/Contact";
import Counter from "./components/pages/Counter";
import PageContent from "./components/pages/PageContent";
import Todos from "./components/pages/Todos";
import contactStore from "./libs/store/contacts/store";
function App() {
  return (
    <PageContent>
      <Routes>
        <Route path="/todos" element={<Todos />} />
        <Route path="/counter" element={<Counter />} />
        <Route
          path="/contact"
          element={
            <FormProvider>
              <Provider store={contactStore}>
                <Contact />
              </Provider>
            </FormProvider>
          }
        />
      </Routes>
    </PageContent>
  );
}

export default App;
