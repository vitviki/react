import { GRID_CARD_ITEMS } from "../constants/index";
import StatsCard from "../components/StatsCard";
const TopStatsGrid = () => {
  return (
    <div className="flex gap-4 w-full">
      {GRID_CARD_ITEMS.map((item) => (
        <StatsCard
          key={item.key}
          label={item.label}
          path={item.path}
          icon={item.icon}
          figures={item.figures}
          addons={item.addons}
          bgColor={item.bgColor}
        />
      ))}
    </div>
  );
};

export default TopStatsGrid;
