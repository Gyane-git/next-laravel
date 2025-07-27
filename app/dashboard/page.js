"use client";
import { useState } from 'react';

export default function DashboardBody() {
  const [stats] = useState([
    { title: 'Total Users', value: '1,234', change: '+12%', color: 'text-green-600' },
    { title: 'Revenue', value: '$45,678', change: '+8%', color: 'text-green-600' },
    { title: 'Orders', value: '892', change: '-3%', color: 'text-red-600' },
    { title: 'Growth', value: '23.5%', change: '+5%', color: 'text-green-600' }
  ]);

  const [recentActivity] = useState([
    { id: 1, action: 'New user registered', time: '2 minutes ago', type: 'user' },
    { id: 2, action: 'Payment received', time: '15 minutes ago', type: 'payment' },
    { id: 3, action: 'Order completed', time: '1 hour ago', type: 'order' },
    { id: 4, action: 'New message received', time: '2 hours ago', type: 'message' },
    { id: 5, action: 'System backup completed', time: '3 hours ago', type: 'system' }
  ]);

  const getActivityIcon = (type) => {
    switch (type) {
      case 'user':
        return '👤';
      case 'payment':
        return '💳';
      case 'order':
        return '📦';
      case 'message':
        return '💬';
      case 'system':
        return '⚙️';
      default:
        return '📋';
    }
  };

  return (
    <main className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-8 py-8 bg-blue-100">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                  <p className="text-2xl font-semibold text-gray-900">{stat.value}</p>
                </div>
                <div className={`text-sm font-medium ${stat.color}`}>
                  {stat.change}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Recent Activity */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm">
              <div className="px-6 py-4 border-b border-gray-200">
                <h3 className="text-lg font-medium text-gray-900">Recent Activity</h3>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  {recentActivity.map((activity) => (
                    <div key={activity.id} className="flex items-center space-x-3">
                      <div className="text-lg">{getActivityIcon(activity.type)}</div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900">{activity.action}</p>
                        <p className="text-sm text-gray-500">{activity.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <button className="w-full text-left px-4 py-3 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors">
                  <div className="flex items-center space-x-3">
                    <span className="text-blue-600">➕</span>
                    <span className="text-sm font-medium text-gray-900">Add New User</span>
                  </div>
                </button>
                <button className="w-full text-left px-4 py-3 bg-green-50 hover:bg-green-100 rounded-lg transition-colors">
                  <div className="flex items-center space-x-3">
                    <span className="text-green-600">📊</span>
                    <span className="text-sm font-medium text-gray-900">View Reports</span>
                  </div>
                </button>
                <button className="w-full text-left px-4 py-3 bg-purple-50 hover:bg-purple-100 rounded-lg transition-colors">
                  <div className="flex items-center space-x-3">
                    <span className="text-purple-600">⚙️</span>
                    <span className="text-sm font-medium text-gray-900">Settings</span>
                  </div>
                </button>
                <button className="w-full text-left px-4 py-3 bg-orange-50 hover:bg-orange-100 rounded-lg transition-colors">
                  <div className="flex items-center space-x-3">
                    <span className="text-orange-600">💬</span>
                    <span className="text-sm font-medium text-gray-900">Messages</span>
                  </div>
                </button>
              </div>
            </div>

            {/* System Status */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-4">System Status</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Server Status</span>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    Online
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Database</span>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    Connected
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">API Status</span>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                    Maintenance
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
    </main>
  );
}