import {SignInButton} from "@clerk/clerk-react"
import MockLogo from "../assets/MockLogo.png"

const SignInPage = () => {
    return (
        <div className="signin">
            <img src={MockLogo} alt="mock logo" className="logo"/>
            <p>Sign In to view the 3D </p>
            <SignInButton/>
        </div>
    )
}
export default SignInPage