'use client'
import React from 'react';
import { Bar, XAxis, YAxis, ResponsiveContainer, PieChart, Pie, Cell, BarChart as RechartsBarChart } from 'recharts';

const visitorData = [
  { month: 'Jan', website: 30, mobile: 45 },
  { month: 'Feb', website: 40, mobile: 55 },
  { month: 'Mar', website: 35, mobile: 65 },
  { month: 'Apr', website: 45, mobile: 75 },
  { month: 'May', website: 40, mobile: 45 },
];

const walletData = [
  { name: 'Manual Wallet', value: 45 },
  { name: 'Exchange Wallet', value: 55 },
];

const COLORS = ['#e5e047', '#ffd700'];

function BarChart() {
  return (
    <div className="text-white p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Visitors Chart */}
        <div className="bg-black p-6 rounded-3xl shadow-xl">
          <h2 className="text-lg mb-4">Active Visitors</h2>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <RechartsBarChart data={visitorData}>
                <XAxis dataKey="month" stroke="#fff" />
                <YAxis stroke="#fff" />
                <Bar dataKey="website" fill="#ffd700" name="Website Visitors"  width={20}/>
                <Bar dataKey="mobile" fill="#ff69b4" name="Mobile Visitors" width={20}/>
              </RechartsBarChart>
            </ResponsiveContainer>
          </div>
          <div className="flex justify-center gap-8 mt-4">
            <div className="flex items-center">
              <div className="w-3 h-3 bg-[#ffd700] rounded-full mr-2"></div>
              <span>Website Visitors</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-[#ff69b4] rounded-full mr-2"></div>
              <span>Mobile Visitors</span>
            </div>
          </div>
        </div>

        {/* Wallet Usage Chart */}
        <div className="bg-black p-6 rounded-3xl shadow-xl">
          <h2 className="text-lg mb-4">Wallet Usage</h2>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={walletData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={100}
                  fill="#8884d8"
                  paddingAngle={5}
                  dataKey="value"
                >
                  {walletData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="flex justify-center gap-8 mt-4">
            <div className="flex items-center">
              <div className="w-3 h-3 bg-[#e5e047] rounded-full mr-2"></div>
              <span>Manual Wallet: 45%</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-[#ffd700] rounded-full mr-2"></div>
              <span>Exchange Wallet: 55%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BarChart;