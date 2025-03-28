import {UserButton,OrganizationSwitcher} from "@clerk/clerk-react";

const Header = () => {
    return (
        <header className="header">

            <OrganizationSwitcher
            appearance={{
                elements: {
                    organizationPreviewAvatarBox:"size-8",
                }
            }}
            />
            <UserButton
            appearance={{
                elements: {
                    userButtonAvatarBox: "size-8",
                }
            }}/>
        </header>
    )
}
export default Header;