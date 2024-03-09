import { signInWithGoogle } from '../../firebase';
import './index.scss'

const Login = () => {
    return (
        <div className="dashboard">
            <button onClick={signInWithGoogle} className='dash-button'>
                Sign in with google
            </button>
        </div>
    )
}

export default Login;
