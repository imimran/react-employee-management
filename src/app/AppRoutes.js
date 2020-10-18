import React, { Component,Suspense, lazy } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Spinner from '../app/shared/Spinner';
import Attendence from './attendence/createAttendence';
import Cost from './cost/createCost';
import Payroll from './payroll/addSalary';

const Dashboard = lazy(() => import('./dashboard/Dashboard'));

const Buttons = lazy(() => import('./basic-ui/Buttons'));
const Dropdowns = lazy(() => import('./basic-ui/Dropdowns'));

const BasicElements = lazy(() => import('./form-elements/BasicElements'));

const BasicTable = lazy(() => import('./tables/BasicTable'));

const Mdi = lazy(() => import('./icons/Mdi'));

const ChartJs = lazy(() => import('./charts/ChartJs'));

const Error404 = lazy(() => import('./error-pages/Error404'));
const Error500 = lazy(() => import('./error-pages/Error500'));

const Login = lazy(() => import('./user-pages/Login'));
const Register1 = lazy(() => import('./user-pages/Register'));

const Organizatios = lazy(()=> import('./organizations/Organizations'))

const Employee = lazy(() => import("./employee/createEmployee"));

const Announcement = lazy(() => import("./announcement/createAnnouncement"));

const LeaveRequest = lazy(() => import("./leaveRequest/leaveRequest"));


class AppRoutes extends Component {
  render () {
    return (
      <Suspense fallback={<Spinner />}>
        <Switch>
          <Route exact path="/dashboard" component={Dashboard} />

          <Route path="/basic-ui/buttons" component={Buttons} />
          <Route path="/basic-ui/dropdowns" component={Dropdowns} />

          <Route
            path="/form-Elements/basic-elements"
            component={BasicElements}
          />

          <Route path="/tables/basic-table" component={BasicTable} />

          <Route path="/icons/mdi" component={Mdi} />

          <Route path="/charts/chart-js" component={ChartJs} />

          <Route path="/user-pages/login-1" component={Login} />
          <Route path="/user-pages/register-1" component={Register1} />

          <Route path="/organizations/create" component={Organizatios} />

          <Route path="/employee/create" component={Employee} />

          <Route path="/cost/create" component={Cost} />

          <Route path="/attendence/create" component={Attendence} />

          <Route path="/announcement/create" component={Announcement} />

          <Route path="/leave-request/create" component={LeaveRequest} />

          <Route path="/payroll/create" component={Payroll} />

          <Route path="/error-pages/error-404" component={Error404} />
          <Route path="/error-pages/error-500" component={Error500} />

          <Redirect to="/dashboard" />
        </Switch>
      </Suspense>
    );
  }
}

export default AppRoutes;