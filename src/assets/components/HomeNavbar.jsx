import { Link } from "react-router-dom";
import logo from "/images/landing page/console.error(!).svg";
import Button from "./Button";

export default function HomeNavbar() {
  return (
    <div className="flex justify-between px-96 py-5">
      <img src={logo} alt="" />

      <ul className="flex gap-10 items-center">
        <li>
          <Link to="/login">
            <Button content="Login" bg="false"/>
          </Link>
        </li>
        <li>
          <Link to="/signup">
            <Button content="Join Us" bg="true"/>
          </Link>
        </li>
      </ul>
    </div>
  );
}
