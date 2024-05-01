import React from "react";
import TransactionChart from "./TransactionChart";
import BuyerProfileChart from "./BuyerProfileChart";
import RecentOrders from "./RecentOrders";
import PopularProducts from "./PopularProducts";
import TopStatsGrid from "./TopStatsGrid";

const Dashboard = () => {
  return (
    <div className="px-2 py-5 flex flex-col gap-4">
      <TopStatsGrid />
      <div className=" flex gap-4 w-full">
        <TransactionChart />
        <BuyerProfileChart />
      </div>
      <div className="flex gap-4 w-full">
        <RecentOrders />
        <PopularProducts />
      </div>
    </div>
  );
};

export default Dashboard;
