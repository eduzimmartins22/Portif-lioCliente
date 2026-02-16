import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./router";

function App() {
  const basePath =
    (globalThis as any).__BASE_PATH__ ??
    (globalThis as any).process?.env?.PUBLIC_URL ??
    "/";

  return (
    <BrowserRouter basename={basePath}>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;