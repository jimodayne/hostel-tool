import { Route, Redirect } from 'react-router-dom';
import { RouteProps } from './';

function PrivateRoute(props: RouteProps) {
    const { Component, authenticated, ...rest } = props;
    return (
        <Route
            {...rest}
            render={props =>
                authenticated === true ? (
                    <Component {...props} />
                ) : (
                    <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
                )
            }
        />
    );
}

export default PrivateRoute;
