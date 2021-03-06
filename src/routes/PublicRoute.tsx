import { Route } from 'react-router-dom';
import { RouteProps } from './';

function PublicROute(props: RouteProps) {
    const { Component, authenticated, ...rest } = props;
    return (
        <Route {...rest}>
            <Component />
        </Route>
    );
}

export default PublicROute;
