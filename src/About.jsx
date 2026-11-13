
import { Outlet } from "react-router-dom";

import BackButton from "./BackButton";
export default function About() {

   return (

    <div>

      <h1>About</h1>
      <BackButton />
      <Outlet />

    </div>

  );

}