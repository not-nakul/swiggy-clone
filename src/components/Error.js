import { Link, useRouteError } from "react-router-dom";

import WideContainer from "./UI/WideContainer";

function Error() {
  const err = useRouteError();

  return (
    <WideContainer className="flex flex-col justify-center items-center gap-6 h-screen">
      <img
        src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/connection_error_bsppck"
        className="h-96"
      />

      <div className="text-center">
        <h1 className="text-2xl font-bold">{err.status}</h1>
        <p className="text-slate-500">{err.statusText}</p>
      </div>

      <Link to="/">
        <button className="p-3 border rounded-lg font-semibold bg-orange-200 hover:text-white hover:bg-orange-500 transition-colors">
          Return
        </button>
      </Link>
    </WideContainer>
  );
}

export default Error;
