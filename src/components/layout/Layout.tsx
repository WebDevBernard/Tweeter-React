import { Link } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../../store/auth-context";
import { ArrowLeftIcon } from "@heroicons/react/outline";
import { icons } from "../styles/heroicons-style";

const Layout = (props: any) => {
  const { notification } = useContext<any>(AuthContext);
  return (
    <div className="flex-1 max-w-[600px] border-2 overflow-auto no-scrollbar relative ">
      <div className="text-secondary_text flex justify-between items-center top-0 sticky p-3 z-10 bg-bg opacity-90 font-bold text-xl space-x-2">
        <Link to={"/"}>
          {window.location.href.match("comments") ? (
            <div className="text-xl space-x-2 flex ">
              <ArrowLeftIcon className={`${icons}`} />
              <p>Tweets</p>
            </div>
          ) : (
            <p>Home</p>
          )}
        </Link>
        <p>{notification}</p>
      </div>
      {props.children}
    </div>
  );
};

export default Layout;
