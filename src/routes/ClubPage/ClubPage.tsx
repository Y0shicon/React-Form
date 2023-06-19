import {useState} from "react";

import AdminClubPage from "./AdminClubPage.tsx"
import UserClubPage from "./UserClubPage.tsx"

import clubPageCSS from "./ClubPage.module.css"

export default function ClubPage() {

    const [isAdmin, setIsAdmin] = useState(true)

    function handleOnClick() {
        // window.location.href = `/clubs/${clubName}/recruitment`
        setIsAdmin((prev) => (!prev))
    }

    return (
        <>
            {isAdmin ? <AdminClubPage /> : <UserClubPage />}
            <button onClick={handleOnClick} className={clubPageCSS.loginButton}>{isAdmin ? 'Logout' : 'Login as Admin'}</button>
        </>
    )
}