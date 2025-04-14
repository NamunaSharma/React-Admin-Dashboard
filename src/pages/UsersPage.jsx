import {
  DollarSign,
  Users,
  ShoppingBag,
  TrendingUp,
  WandSparklesIcon,
} from "lucide-react";
import React from "react";
import { motion } from "framer-motion";
import StatCard from "../components/common/StatCard";
import UserGrowthChart from "../components/users/UserGrowthChart";
import UsersTable from "../components/users/UserTable";
import UserActivityHeatmap from "../components/users/UserActivityHeatmap";
import UserDemographicsChart from "../components/users/UserDemographicsChart";
import Header from "../components/common/Header";

const UsersPage = () => {
  return (
    <div className="flex-1 overflow-auto relative z-10">
      <Header title="Users" />
      <main className="max-w-7xl mx-auto py-6 px-4 lg:px-8 xl:px-20">
        <motion.div
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <StatCard
            name="Total Sales"
            icon={DollarSign}
            value="$12,345"
            color="#6366f1"
          />
          <StatCard
            name="New Users"
            icon={Users}
            value="$1,234"
            color="#885CF6"
          />
          <StatCard
            name="Total Products"
            icon={ShoppingBag}
            value="$345"
            color="#EC4899"
          />
          <StatCard
            name="Conversion Rate"
            icon={TrendingUp}
            value="$12.45%"
            color="#10b981"
          />
        </motion.div>
        <UsersTable />

        {/*Chart Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
          <UserGrowthChart />
          <UserActivityHeatmap />
          <UserDemographicsChart />
        </div>
      </main>
    </div>
  );
};

export default UsersPage;
