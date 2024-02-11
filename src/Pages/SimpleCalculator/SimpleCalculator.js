import { Button, Card, Container, Grid, TextField } from "@mui/material";
import React, { useState } from "react";

const BasicCalculator = () => {
  const [expression, setExpression] = useState("");

  const handleClick = (value) => {
    setExpression((prevExpression) => prevExpression + value);
  };

  const calculateResult = () => {
    try {
      const result = eval(expression);
      setExpression(result.toString());
    } catch (error) {
      setExpression("Error");
    }
  };

  const clearExpression = () => {
    setExpression("");
  };

  const handlePercentage = () => {
    setExpression((prevExpression) => {
      try {
        const result = eval(prevExpression) / 100;
        return result.toString();
      } catch (error) {
        return "Error";
      }
    });
  };

  const toggleNegativePositive = () => {
    setExpression((prevExpression) => {
      try {
        const result = eval(prevExpression) * -1;
        return result.toString();
      } catch (error) {
        return "Error";
      }
    });
  };

  return (
    <Container
      maxWidth="sm"
      sx={{
        padding: 5,
      }}
    >
      <Card sx={{ padding: 5 }}>
        <Grid container spacing={1} justifyContent="center">
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              fullWidth
              value={expression}
              onChange={(e) => setExpression(e.target.value)}
              inputProps={{ style: { textAlign: "right" } }}
              placeholder="Enter expression"
              multiline
              rows={2}
              wrap="soft"
            />
          </Grid>
          <Grid item xs={3}>
            <Button
              variant="contained"
              fullWidth
              style={{ minWidth: 0, background: "red" }}
              onClick={clearExpression}
            >
              C
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button
              variant="contained"
              fullWidth
              style={{ minWidth: 0, background: "red" }}
              onClick={toggleNegativePositive}
            >
              +/-
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button
              variant="contained"
              fullWidth
              onClick={handlePercentage}
              style={{ minWidth: 0, background: "red" }}
            >
              %
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button
              variant="contained"
              fullWidth
              onClick={() => handleClick("/")}
              style={{ minWidth: 0 }}
            >
              /
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button
              variant="outlined"
              fullWidth
              onClick={() => handleClick("7")}
              style={{ minWidth: 0 }}
            >
              7
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button
              variant="outlined"
              fullWidth
              onClick={() => handleClick("8")}
              style={{ minWidth: 0 }}
            >
              8
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button
              variant="outlined"
              fullWidth
              onClick={() => handleClick("9")}
              style={{ minWidth: 0 }}
            >
              9
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button
              variant="contained"
              fullWidth
              onClick={() => handleClick("*")}
              style={{ minWidth: 0 }}
            >
              *
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button
              variant="outlined"
              fullWidth
              onClick={() => handleClick("4")}
              style={{ minWidth: 0 }}
            >
              4
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button
              variant="outlined"
              fullWidth
              onClick={() => handleClick("5")}
              style={{ minWidth: 0 }}
            >
              5
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button
              variant="outlined"
              fullWidth
              onClick={() => handleClick("6")}
              style={{ minWidth: 0 }}
            >
              6
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button
              variant="contained"
              fullWidth
              onClick={() => handleClick("-")}
              style={{ minWidth: 0 }}
            >
              -
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button
              variant="outlined"
              fullWidth
              onClick={() => handleClick("1")}
              style={{ minWidth: 0 }}
            >
              1
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button
              variant="outlined"
              fullWidth
              onClick={() => handleClick("2")}
              style={{ minWidth: 0 }}
            >
              2
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button
              variant="outlined"
              fullWidth
              onClick={() => handleClick("3")}
              style={{ minWidth: 0 }}
            >
              3
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button
              variant="contained"
              fullWidth
              onClick={() => handleClick("+")}
              style={{ minWidth: 0 }}
            >
              +
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button
              variant="outlined"
              fullWidth
              onClick={() => handleClick("0")}
              style={{ minWidth: 0 }}
            >
              0
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button
              variant="outlined"
              fullWidth
              onClick={() => handleClick(".")}
              style={{ minWidth: 0 }}
            >
              .
            </Button>
          </Grid>
          <Grid item xs={6}>
            <Button
              variant="contained"
              fullWidth
              onClick={calculateResult}
              style={{ minWidth: 0, background: "green" }}
            >
              =
            </Button>
          </Grid>
        </Grid>
      </Card>
    </Container>
  );
};
export default BasicCalculator;
