import { ContentRedux, ContentSearching, ApiUsers } from "../../component";
// import ContentSearching from "component/ContentSearching";
import store from "../Redux/store";
import { Detail, Home } from "../../pages";
import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const Routes = () => {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/detail/:detailPage" component={Detail} />
          <Route path="/contentSearching" component={ContentSearching} />
          <Route path="/ContentRedux" component={ContentRedux} />
          <Route path="/ApiUser" component={ApiUsers} />
        </Switch>
      </Router>
    </Provider>
  );
};

export default Routes;
