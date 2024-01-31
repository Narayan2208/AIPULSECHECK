import LandingpageCard from "./components/LandingpageCard";
import Navbar from "./components/Navbar";
import "./index.scss";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Routes from "./routes/AllRoutes";
import AllRoutes from "./routes/AllRoutes";
function App() {
  return (
    <>
      <Box className="parent">
        <AllRoutes />
      </Box>
    </>
  );
}

export default App;
