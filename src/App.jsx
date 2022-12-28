import { Route, Routes } from "react-router-dom";
import "./App.css";
import FormProvider from "./app/hooks/useFormValidation";
import Contact from "./components/pages/Contact";
import Counter from "./components/pages/Counter";
import PageContent from "./components/pages/PageContent";
import Todos from "./components/pages/Todos";
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
              <Contact />
            </FormProvider>
          }
        />
      </Routes>
    </PageContent>
  );
}

export default App;
