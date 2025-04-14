import React from 'react'
import Header from "../components/common/Header";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  DollarSign,
  Package,
  TrendingUp,
  WandSparklesIcon,
} from "lucide-react";
import StatCard from "../components/common/StatCard";
import DailyOrderChart from "../components/orders/DailyOrderChart";
import SalesChannelChart from '../components/overview/SalesChannelChart';
import CategoryDistributionChart from '../components/overview/CategoryDistributionChart';
import OrdersTable from '../components/orders/OrdersTable';
const OrderPage = () => {
  return (
    <div className="flex-1 overflow-auto relative z-10">
      <Header title="Sales" />
      <main className="max-w-7xl mx-auto py-6 px-4 lg:px-8 xl:px-20 gap-8">
        <motion.div
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <StatCard
            name="Total Products"
            icon={Package}
            value="$12,345"
            color="#6366f1"
          />
          <StatCard
            name="Top Selling"
            icon={TrendingUp}
            value="$1,234"
            color="#885CF6"
          />
          <StatCard
            name="Low Stock"
            icon={WandSparklesIcon}
            value="$345"
            color="#EC4899"
          />
          <StatCard
            name="Total Revenue"
            icon={DollarSign}
            value="$12.45%"
            color="#10b981"
          />
        </motion.div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        <DailyOrderChart />
        <CategoryDistributionChart/>
        </div>
        <OrdersTable />
        </main>
        </div>
  )
}

export default OrderPage