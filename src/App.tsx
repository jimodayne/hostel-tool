import { Suspense, useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { BrowserRouter as Router } from 'react-router-dom';
import MainRoutes from './routes';
import { auth } from 'src/services';
import { Spin } from 'antd';
import 'antd/dist/antd.css';

function App() {
    const [user, loading, error] = useAuthState(auth);

    useEffect(() => {
        console.log('user!', user);
    }, [user]);

    return (
        <div style={{ minHeight: '100vh', padding: '1rem' }}>
            <Router>
                <Suspense fallback={<Spin />}>
                    <MainRoutes />
                </Suspense>
            </Router>
        </div>
    );
}

export default App;
