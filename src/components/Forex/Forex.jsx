import React from "react";
import { Container } from "@mui/material";
import { ForexCrossRates } from "react-tradingview-embed";

const Forex = () => {
  return (
    <Container sx={{ mt: 8 }}>
      <ForexCrossRates
        widgetProps={{
          colorTheme: "light",
          width: "100%",
        }}
      />
    </Container>
  );
};

export default Forex;
