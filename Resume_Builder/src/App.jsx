import React from "react";
import  { AppProvider } from "./AppContext";
import Questions from "./components/Questions";
import { Typography } from "@material-ui/core";

function App() {
  
  return (
     <AppProvider>
      <div className="App">
        <Typography
          variant="h6"
          style={{
            textAlign: "center",
            margin: "32px",
            fontStyle:'italic',
            fontWeight:'bold',
            color:'palevioletred',
          }}
        >
          Resume Builder
        </Typography>
        <Questions />
      </div>
    </AppProvider>
  );
}

export default App;