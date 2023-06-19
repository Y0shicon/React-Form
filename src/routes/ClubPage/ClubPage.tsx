import {useState} from "react";

import AdminClubPage from "./AdminClubPage.tsx"
import UserClubPage from "./UserClubPage.tsx"

const BUTTON_STYLES = {
    position : "absolute",
    top : "10px",
    right : "10px"
}

export default function ClubPage() {

    const [isAdmin, setIsAdmin] = useState(true)

    function handleOnClick() {
        // window.location.href = `/clubs/${clubName}/recruitment`
        setIsAdmin((prev) => (!prev))
    }

    return (
        <>
            {isAdmin ? <AdminClubPage /> : <UserClubPage />}
            <button onClick={handleOnClick} style={BUTTON_STYLES}>{isAdmin ? 'Logout' : 'Login as Admin'}</button>
        </>
    )
}