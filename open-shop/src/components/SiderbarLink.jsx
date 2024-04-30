import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const SiderbarLink = ({ label, icon, path }) => {
  const { pathname } = useLocation();
  return (
    <Link
      to={path}
      className={`flex items-center gap-2 font-light py-2 px-2 hover:bg-neutral-700 active:bg-neutral-700 rounded-xl text-xl
      ${
        path === pathname
          ? "bg-neutral-700 font-semibold text-white"
          : "text-neutral-400"
      }
      `}
    >
      <span className="text-2xl">{icon}</span>
      <span className=" font-palanquin">{label}</span>
    </Link>
  );
};

export default SiderbarLink;
