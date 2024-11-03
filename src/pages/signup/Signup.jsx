import { SignUp } from '@clerk/clerk-react';
import './signup.css';

const Signup = () => {
    return (
        <div className="signUp">
            <SignUp path="/sign-up" signInUrl='/sign-in' />
        </div>
    )
}

export default Signup