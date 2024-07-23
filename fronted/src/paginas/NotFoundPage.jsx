import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div className="flex flex-col h-screen justify-center items-center">
      <Link
        to="/"
        className="basis-1/12 w-full flex justify-start text-3xl ml-8"
      >
        Home
      </Link>
      <div className="basis-11/12 h-full flex justify-center items-center">
        <h1>404 Not Found</h1>
      </div>
    </div>
  );
}
