import { useParams, Link } from "react-router-dom";

export default function ClubPage() {
const clubName = useParams().id;

return (
<>
<h1>Hi we are the {clubName}</h1>
<Link to={`/clubs/${clubName}/recruitment`}>Apply to {clubName}</Link>
</>
);
}