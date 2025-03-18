import React from "react";
import SummaryCard from "./SummaryCard";
import {
  FaUsers,
  FaBuilding,
  FaMoneyBillWave,
  FaFileAlt,
  FaCheckCircle,
  FaHourglassHalf,
  FaTimesCircle,
} from "react-icons/fa";

const AdminSummary = () => {
  return (
    <div className="p-6 sm:p-8 bg-gray-900 text-white">
      <h3 className="text-2xl sm:text-3xl font-semibold mb-6">Dashboard Overview</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <SummaryCard icon={<FaUsers className="text-white" />} text="Total Employees" number={14} />
        <SummaryCard icon={<FaBuilding className="text-white" />} text="Total Departments" number={3} />
        <SummaryCard icon={<FaMoneyBillWave className="text-white" />} text="Monthly Salary" number="$890" />
      </div>

      <div className="mt-12 p-6 sm:p-8 bg-gray-800 rounded-lg shadow-md">
        <h4 className="text-xl sm:text-2xl font-semibold text-white mb-6">Leave Details</h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <SummaryCard icon={<FaFileAlt className="text-white" />} text="Leave Applied" number={2} />
          <SummaryCard icon={<FaCheckCircle className="text-white" />} text="Leave Approved" number={3} />
          <SummaryCard icon={<FaHourglassHalf className="text-white" />} text="Leave Pending" number={3} />
          <SummaryCard icon={<FaTimesCircle className="text-white" />} text="Leave Rejected" number={0} />
        </div>
      </div>
    </div>
  );
};

export default AdminSummary;