import { useLocation } from "react-router-dom";
//import Dashboard from "./Dashboard";
import BackButton from "./BackButton";

export default function()
{
    const location=useLocation();
    const username=location.state?.username || "Guest";
    return (
    <div>
    <h1>{"Welcome -"+ username}</h1>
    <BackButton />
    </div>
    )
}
