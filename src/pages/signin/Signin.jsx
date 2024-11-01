import { SignIn } from '@clerk/clerk-react'
import styles from './signin.css'

const Signin = () => {
    return (
        <div className={styles.container}>
            <SignIn path="/sign-in" />
        </div>
    )
}

export default Signin