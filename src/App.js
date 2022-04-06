import { useState } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom'
import Header from "./components/Layout/Header";
import Home from './pages/Home'
import Reservation from './pages/Reservation';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Paper } from '@mui/material';
import ReservationProvider from './store/ReservationProvider';

function App() {
  const [mode, setMode] = useState("light")

  const theme = createTheme({
    palette: {
      mode: "light"
    }
  })

  const themeDark = createTheme({
    palette: {
      mode: "dark"
    }
  })

  const modeHandler = () => {
    setMode((prevState) => {
      if (prevState === 'dark') {
        return 'light'
      } else {
        return 'dark'
      }
    })
  }

  return (
    <ThemeProvider theme={mode === 'dark' ? themeDark : theme}>
      <Paper sx={{height: "100vh"}}>
        <Header onModeChange={modeHandler} />
          <Switch>
            <Route path="/" exact>
              <Redirect to="/home" />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/reservation">
              <ReservationProvider>
                <Reservation />
              </ReservationProvider>
            </Route>
          </Switch>
      </Paper>
    </ThemeProvider>

  );
}

export default App;
