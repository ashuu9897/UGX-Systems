"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  BarChart,
  Bar,
} from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const averagePowerData = [
  { year: 2009, value: 1000 },
  { year: 2010, value: 1500 },
  { year: 2012, value: 3000 },
  { year: 2014, value: 1200 },
  { year: 2016, value: 1800 },
  { year: 2018, value: 2200 },
  { year: 2019, value: 1600 },
];

const currentPowerData = Array.from({ length: 15 }, () => ({
  value: Math.floor(Math.random() * 500) + 1300,
}));

// const generateRandomValue = () => {
//   return Math.floor(Math.random() * 500);
// };

export function Dashboard() {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-semibold">Dashboard</h1>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="grid gap-6 lg:col-span-1">
          <div className="grid gap-6 sm:grid-cols-2">
            <Card className="bg-white">
              <CardContent className="p-6 flex justify-between items-start">
                <div>
                  <h3 className="text-sm font-medium text-gray-500">Fans</h3>
                  <p className="text-3xl font-semibold mt-2">27</p>
                  <p className="text-sm text-gray-500 mt-2">
                    Power Consumption
                  </p>
                  <p className="text-3xl font-bold">270</p>
                </div>
                <div className="h-12 w-12 bg-emerald-400 rounded-full flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-fan text-white"
                  >
                    <path d="M10.827 16.379a6.082 6.082 0 0 1-8.618-7.002l5.412 1.45a6.082 6.082 0 0 1 7.002-8.618l-1.45 5.412a6.082 6.082 0 0 1 8.618 7.002l-5.412-1.45a6.082 6.082 0 0 1-7.002 8.618l1.45-5.412Z" />
                    <path d="M12 12v.01" />
                  </svg>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white">
              <CardContent className="p-6 flex justify-between items-start">
                <div>
                  <h3 className="text-sm font-medium text-gray-500">Light</h3>
                  <p className="text-3xl font-semibold mt-2">65</p>
                  <p className="text-sm text-gray-500 mt-2">
                    Power Consumption
                  </p>
                  <p className="text-3xl font-bold">876</p>
                </div>
                <div className="h-12 w-12 bg-orange-400 rounded-full flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                    />
                  </svg>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white">
              <CardContent className="p-6 flex justify-between items-start">
                <div>
                  <h3 className="text-sm font-medium text-gray-500">
                    Refrigerator
                  </h3>
                  <p className="text-3xl font-semibold mt-2">4</p>
                  <p className="text-sm text-gray-500 mt-2">
                    Power Consumption
                  </p>
                  <p className="text-3xl font-bold">0</p>
                </div>
                <div className="h-12 w-12 bg-yellow-400 rounded-full flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="lucide lucide-refrigerator text-white"
                  >
                    <path d="M5 6a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6Z" />
                    <path d="M5 10h14" />
                    <path d="M15 7v6" />
                  </svg>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white">
              <CardContent className="p-6 flex justify-between items-start">
                <div>
                  <h3 className="text-sm font-medium text-gray-500">
                    Air Condition
                  </h3>
                  <p className="text-3xl font-semibold mt-2">852</p>
                  <p className="text-sm text-gray-500 mt-2">
                    Power Consumption
                  </p>
                  <p className="text-3xl font-bold">65</p>
                </div>
                <div className="h-12 w-12 bg-violet-400 rounded-full flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <Card className="bg-white lg:col-span-2">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-base font-medium">
              Average power Consumption (kW/h)
            </CardTitle>
            <Select defaultValue="this-week">
              <SelectTrigger className="w-[120px]">
                <SelectValue placeholder="Select time" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="this-week">This Week</SelectItem>
                <SelectItem value="last-week">Last Week</SelectItem>
                <SelectItem value="last-month">Last Month</SelectItem>
              </SelectContent>
            </Select>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={averagePowerData}>
                  <CartesianGrid
                    strokeDasharray="3 3"
                    className="stroke-gray-200"
                  />
                  <XAxis dataKey="year" className="text-xs" />
                  <YAxis className="text-xs" />
                  <Line
                    type="monotone"
                    dataKey="value"
                    stroke="#2563eb"
                    strokeWidth={2}
                    dot={{ r: 4 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card className="bg-white">
          <CardHeader>
            <CardTitle className="text-base font-medium">
              Power Consumption
            </CardTitle>
          </CardHeader>
          <CardContent className="flex items-center justify-between">
            <div className="text-center">
              <div className="space-y-1">
                <div className="flex justify-center">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <div
                      key={i}
                      className="w-1 h-12 bg-blue-200 mx-0.5 rounded-full"
                    />
                  ))}
                </div>
                <p className="text-2xl font-semibold">2,095</p>
                <p className="text-sm text-gray-500">Heater</p>
              </div>
            </div>
            <div className="relative">
              <div className="relative h-32 w-32">
                <svg className="h-full w-full" viewBox="0 0 100 100">
                  <circle
                    className="stroke-violet-200"
                    cx="50"
                    cy="50"
                    r="40"
                    strokeWidth="20"
                    fill="none"
                  />
                  <circle
                    className="stroke-violet-500"
                    cx="50"
                    cy="50"
                    r="40"
                    strokeWidth="20"
                    fill="none"
                    strokeDasharray="251.2"
                    strokeDashoffset="208.5"
                    transform="rotate(-90 50 50)"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <span className="text-2xl font-semibold">17%</span>
                    <span className="block text-xs text-gray-500">used</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center">
              <div className="space-y-1">
                <div className="flex justify-center">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <div
                      key={i}
                      className="w-1 h-12 bg-red-200 mx-0.5 rounded-full"
                    />
                  ))}
                </div>
                <p className="text-2xl font-semibold">2,360</p>
                <p className="text-sm text-gray-500">Lights</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white">
          <CardHeader>
            <CardTitle className="text-base font-medium">
              Current Power Consumption (kW/h)
            </CardTitle>
            <p className="text-4xl font-semibold text-blue-600">1635.00</p>
          </CardHeader>
          <CardContent>
            <div className="h-[200px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={currentPowerData}>
                  <CartesianGrid
                    strokeDasharray="3 3"
                    className="stroke-gray-200"
                  />
                  <XAxis hide />
                  <YAxis hide />
                  <Bar dataKey="value" fill="#06b6d4" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
