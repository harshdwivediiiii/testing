"use client"
import React from "react"
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts"

const barData = [
  { name: "Jan", alerts: 10 },
  { name: "Feb", alerts: 20 },
  { name: "Mar", alerts: 8 },
  { name: "Apr", alerts: 15 },
]

const lineData = [
  { name: "Mon", users: 120 },
  { name: "Tue", users: 160 },
  { name: "Wed", users: 100 },
  { name: "Thu", users: 190 },
  { name: "Fri", users: 220 },
  { name: "Sat", users: 119 },
  { name: "Sun", users: 225 },
]

const pieData = [
  { name: "Sound", value: 45 },
  { name: "Vibration", value: 30 },
  { name: "Other", value: 25 },
]

const COLORS = ["#4F46E5", "#10B981", "#FBBF24"]

export default function AnalyticsDashboard() {
  return (
    <div className="bg-background text-foreground min-h-screen p-6 space-y-10 transition-colors duration-300">
      <h1 className="text-4xl font-bold">Analytics Dashboard</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {[
          { title: "Total Users", value: "1,254" },
          { title: "Alerts Triggered", value: "347" },
          { title: "Active Devices", value: "112" },
          { title: "Avg Alerts/User", value: "5.6" },
        ].map((card, idx) => (
          <div
            key={idx}
            className="bg-card text-card-foreground p-5 rounded-2xl shadow hover:shadow-lg transition"
          >
            <h2 className="text-lg font-semibold text-muted-foreground">{card.title}</h2>
            <p className="text-3xl font-bold mt-2">{card.value}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-card text-card-foreground p-6 rounded-2xl shadow">
          <h2 className="text-xl font-semibold mb-4">Monthly Alerts</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={barData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="alerts" fill="#4F46E5" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-card text-card-foreground p-6 rounded-2xl shadow">
          <h2 className="text-xl font-semibold mb-4">Daily Active Users</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={lineData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="users"
                stroke="#8B5CF6"
                strokeWidth={3}
                dot={{ r: 6 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="bg-card text-card-foreground p-6 rounded-2xl shadow max-w-xl mx-auto">
        <h2 className="text-xl font-semibold mb-4">Alert Types Distribution</h2>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={pieData}
              cx="50%"
              cy="50%"
              outerRadius={100}
              fill="#8884d8"
              dataKey="value"
              label
            >
              {pieData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
