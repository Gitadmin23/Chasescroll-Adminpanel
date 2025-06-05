
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"; 
import { AuthPage, DashboardPage } from './pages';
import { DashboardLayout } from "./components/dashboardLayout";

function App() {
  const router = createBrowserRouter(

    createRoutesFromElements(
      <Route path="/">
        <Route index element={<AuthPage />} /> 
        <Route path="dashboard" element={<DashboardLayout />} >
          <Route index element={<DashboardPage />} />
        </Route>
      </Route>
    )
  );
  return (
    <div className=" w-full h-screen " >
      <RouterProvider router={router} />
    </div>
  )
}

export default App
