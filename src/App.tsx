
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"; 
import { AuthPage } from './pages';

function App() {
  const router = createBrowserRouter(

    createRoutesFromElements(
      <Route path="/">
        <Route index element={<AuthPage />} /> 
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
