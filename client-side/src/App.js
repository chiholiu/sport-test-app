import "./App.css";
import { Redirect, Route, Switch } from "react-router-dom";
import { HomePage } from "./components/HomePage/HomePage";
import { ReviewPage } from "./components/ReviewPage/ReviewPage";
import theme from "./styles/Themes";
import { GlobalStyleReset } from "./styles/CssReset";
import { ThemeProvider } from "styled-components";

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyleReset />
      <div className="App">
        <header className="App-header">
          <Switch>
            <Route exact path="/" render={() => <HomePage />} />
            <Route path="/product" render={() => <ReviewPage />} />
            <Route path="*" render={() => <Redirect to={{ path: "/" }} />} />
          </Switch>
        </header>
      </div>
    </ThemeProvider>
  );
};
