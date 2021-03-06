import { ComponentType, lazy } from 'react';
import PublicRoute from './PublicRoute';
import * as ROUTES from 'src/constants/routes';
import { Switch } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';

const LandingModule = lazy(() => import('src/modules/landing'));
const LoginModule = lazy(() => import('src/modules/login'));
const DashboardModule = lazy(() => import('src/modules/dashboard'));

export interface RouteProps {
    Component: ComponentType<any>;
    authenticated?: boolean;
    path: string;
    exact?: boolean;
}

const MainRoutes = () => {
    return (
        <Switch>
            <PublicRoute exact={true} path={ROUTES.PUBLIC.LANDING} Component={LandingModule} />
            <PublicRoute path={ROUTES.PUBLIC.LOGIN} Component={LoginModule} />
            <PrivateRoute path={ROUTES.PRIVATE.HOME} Component={DashboardModule} />
        </Switch>
    );
};

export default MainRoutes;
