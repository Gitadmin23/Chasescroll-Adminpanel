
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"; 
import { AuthPage, BusinessHomePage, CommunityHomePage, DashboardPage, EventHomePage, FundraiserHomePage, TransactionHomePage, UserHomePage } from './pages';
import { DashboardLayout } from "./components/dashboardLayout";
import { UserTable } from "./components/dashboard";

function App() {
  const router = createBrowserRouter(

    createRoutesFromElements(
      <Route path="/">
        <Route index element={<AuthPage />} /> 
        <Route path="dashboard" element={<DashboardLayout />} >
          <Route index element={<DashboardPage />} />
          <Route path="user" >
            <Route index element={<UserHomePage />} />
            <Route path="alluser" element={<UserTable />} />
          </Route>
          <Route path="event" >
            <Route index element={<EventHomePage />} />
          </Route>
          <Route path="business" >
            <Route index element={<BusinessHomePage />} />
          </Route>
          <Route path="fundraiser" >
            <Route index element={<FundraiserHomePage />} />
          </Route> 
          <Route path="community" >
            <Route index element={<CommunityHomePage />} />
          </Route>
          <Route path="transaction" >
            <Route index element={<TransactionHomePage />} />
          </Route>
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
