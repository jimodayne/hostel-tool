import { Button } from 'antd';
import { signInWithGoogle } from 'src/services';

const LoginForm = () => {
    return <Button onClick={signInWithGoogle}>Đăng nhập với Google</Button>;
};
export default LoginForm;
