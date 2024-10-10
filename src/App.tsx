import React from "react";
import { ResponsiveNavbar } from "./components/responsive-navbar"; 
import { ResponsiveForum } from "./components/responsive-forum";

// Define the component with TypeScript
const App: React.FC = () => {
  return (
    <div>
      <ResponsiveNavbar />
      <br />   <br />   <br />   <br />   <br />
      
      <ResponsiveForum/>
    </div>
  );
};

export default App;
