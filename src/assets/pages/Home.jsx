import HomeNavbar from "../components/HomeNavbar";
import Button from "../components/Button";
import Cards from "../components/Cards";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="bg-[#212121] font-mono pb-24">
      <HomeNavbar />
      <div className="flex flex-col justify-center items-center gap-10 mt-32">
        <h6 className="text-primary">Welcome</h6>
        <h1 className="text-white text-5xl text-center w-2/6">
          Find Solutions to Your{" "}
          <span className="text-primary">Coding Errors</span> Instantly
        </h1>
        <p className="text-gray-500">
          Join a community of developers helping each other debug, solve, and
          learn.
        </p>
        <Link to="/signup">
          <Button content="Join Us" bg="true" />
        </Link>
      </div>
      <div className="mt-24 grid grid-cols-3 gap-10 px-10">
        <Cards heading="Vast Community" content="Real-time solutions from experienced developers" icon="community"/>
        <Cards heading="Friendly Developers" content="Collaborate and learn from a community of coders" icon="friendly"/>
        <Cards heading="Gamified Experience" content="Share your knowledge and earn reputation points" icon="game"/>
      </div>
    </div>
  );
}
