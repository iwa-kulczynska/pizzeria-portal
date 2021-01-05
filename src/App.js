import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import MainLayout from 'components/layout/MainLayout/MainLayout';
import Login from './components/views/Login/Login'; 
import Booking from './components/views/Booking/Booking';
import Event from './components/views/Event/Event';
import Kitchen from './components/views/Order/Order';
import New from './components/views/New/New';
import Ordering from './components/views/Ordering/Ordering';
import Order from './components/views/Order/Order';
import Tables from './components/views/Tables/Tables';

function App() {
  return (
    <BrowserRouter basename={'/panel'}>
      <MainLayout>
        <div className="App">
          <Switch>
            <Route exact path={process.env.PUBLIC_URL + '/login'} component={Login} />
            <Route exact path={process.env.PUBLIC_URL + '/booking'} component={Booking} />
            <Route exact path={process.env.PUBLIC_URL + '/event'} component={Event} />
            <Route exact path={process.env.PUBLIC_URL + '/kitchen'} component={Kitchen} />
            <Route exact path={process.env.PUBLIC_URL + '/new'} component={New} />
            <Route exact path={process.env.PUBLIC_URL + '/ordering'} component={Ordering} />
            <Route exact path={process.env.PUBLIC_URL + '/order'} component={Order} />
            <Route exact path={process.env.PUBLIC_URL + '/tables'} component={Tables} />
          </Switch>
        </div>
      </MainLayout>
    </BrowserRouter> 
  );
}

export default App;
