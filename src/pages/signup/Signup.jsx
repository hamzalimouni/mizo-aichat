import { SignUp } from '@clerk/clerk-react';
import styles from './signup.css';

const Signup = () => {
    return (
        <div className={styles.container}>
            <SignUp path="/sign-up" />
        </div>
    )
}

export default Signup