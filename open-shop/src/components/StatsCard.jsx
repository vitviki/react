import { Link } from "react-router-dom";

const StatsCard = ({ label, path, icon, figures, addons, bgColor }) => {
  return (
    <Link
      to={path}
      className="flex items-center flex-1 bg-white p-3 gap-4 rounded-xl shadow-lg"
    >
      <div
        className={`flex justify-center items-center text-2xl ${bgColor} text-white p-3 rounded-full`}
      >
        {icon}
      </div>
      <div className="flex flex-col gap-[4px]">
        <p className=" font-palanquin text-[13px] leading-3 text-slate-600">
          {label}
        </p>
        <div className="flex gap-2 items-center font-montserrat">
          <h3 className="font-bold text-md tracking-widest">{figures}</h3>
          <span
            className={`text-[11px] tracking-wider font-semibold ${
              addons[0] === "+" ? "text-green-700" : "text-red-700"
            }`}
          >
            {addons}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default StatsCard;
