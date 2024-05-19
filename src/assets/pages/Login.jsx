import Input from "../components/Input";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="flex flex-col items-center justify-between h-screen bg-[#212121]">
      <div className="flex flex-col items-center gap-10">
        <h1 className="text-white text-3xl mt-32">Join Us For Free</h1>
        <form className="flex flex-col gap-5">
          <Input type="email" name="email" placeholder="Your Email" />
          <Input type="password" name="password" placeholder="Your Password" />
          <Input type="submit" value="Join Us" />
        </form>
      </div>
      <div className="mb-24">
        <Link to="/signup" className="text-white transition-all hover:underline">
            Don&apos;t have an account? Join Us
        </Link>
      </div>
    </div>
  );
}
