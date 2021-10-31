import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home/Home';
import PageNotFound from './components/PageNotFound/PageNotFound';
import Login from './components/Login/Login';
import Header from './components/Shared/Header/Header';
import ContextProvider from './components/Context/ContextProvider';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Booking from './components/Booking/Booking';
import Footer from './components/Shared/Footer/Footer';
import AddNewPackage from './components/AddNewPackage/AddNewPackage';
import MyBooked from './components/MyBooked/MyBooked';
import ScrollTop from './components/ScrollTop/ScrollTop';
import ManageAllBooked from './components/ManageAllBooked/ManageAllBooked';
import Packages from './components/Packages/Packages';

function App() {
  return (
    <ContextProvider>
      <BrowserRouter>
        <div className="absolute w-full top-0 left-0 z-10 bg-blue-900 bg-opacity-75">
          <Header></Header>
        </div>
        <ScrollTop />
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/packages">
            <Packages></Packages>
          </Route>
          <PrivateRoute exact path="/booking/:id">
            <Booking></Booking>
          </PrivateRoute>
          <PrivateRoute exact path="/add-package">
            <AddNewPackage></AddNewPackage>
          </PrivateRoute>
          <PrivateRoute exact path="/my-booked">
            <MyBooked></MyBooked>
          </PrivateRoute>
          <PrivateRoute exact path="/all-booked">
            <ManageAllBooked></ManageAllBooked>
          </PrivateRoute>
          <Route path="*">
            <PageNotFound></PageNotFound>
          </Route>
        </Switch>
        <div className="bg-blue-900 bg-opacity-75">
          <Footer></Footer>
        </div>
      </BrowserRouter>
    </ContextProvider>
  );
}

export default App;
