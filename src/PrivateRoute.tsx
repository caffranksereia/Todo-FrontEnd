import React from "react";
import { Redirect, Route } from "react-router-dom";

const PrivateRoute = (props) => {
     const token = localStorage.getItem("auth");
     return<>{token ? <Route  {...props} /> :<Redirect to="/Login"/>}</>;
};

export default PrivateRoute;