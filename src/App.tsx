import { ChakraProvider } from "@chakra-ui/react"
import { Route, Routes } from "react-router-dom"
import './App.scss'
import LandingPage from "./pages/LandingPage";
import theme from "./extendTheme";
import Login from "./pages/Login";
import Sidebar from "./components/Sidebar/Sidebar";
import Dashboard from "./pages/Dashboard";
import AddLead from "./pages/AddLead";
import MyLeads from "./pages/MyLeads";
import NewLeads from "./pages/NewLeads";
import CompletedLeads from "./pages/CompletedLeads";
import TopSalespersons from "./pages/TopSalespersons";
import AmbassadorTiers from "./pages/AmbassadorTiers";
import RewardsBenefits from "./pages/RewardsBenefits";
import Documents from "./pages/Documents";
import UserProfile from "./pages/UserProfile";

export const App = () => {
  return (
    <ChakraProvider theme={theme}>

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Sidebar><Dashboard /></Sidebar>} />

        <Route path="/addlead" element={<Sidebar><AddLead /></Sidebar>} />
        <Route path="/myleads" element={<Sidebar><MyLeads /></Sidebar>} />
        <Route path="/newleads" element={<Sidebar><NewLeads /></Sidebar>} />
        <Route path="/pendingleads" element={<Sidebar><NewLeads /></Sidebar>} />
        <Route path="/completedleads" element={<Sidebar><CompletedLeads /></Sidebar>} />
        <Route path="/topsalespersons" element={<Sidebar><TopSalespersons /></Sidebar>} />
        <Route path="/ambassadortiers" element={<Sidebar><AmbassadorTiers /></Sidebar>} />
        <Route path="/rewardsbenefits" element={<Sidebar><RewardsBenefits /></Sidebar>} />
        <Route path="/documents" element={<Sidebar><Documents /></Sidebar>} />
        <Route path="/userprofile" element={<Sidebar><UserProfile /></Sidebar>} />
      </Routes>
    </ChakraProvider>
  )
}


