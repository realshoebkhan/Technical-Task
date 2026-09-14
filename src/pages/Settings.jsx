import { useState } from 'react';
import { User, Bell, Save, CheckCircle2 } from 'lucide-react';

export default function Settings() {
  const [saved, setSaved] = useState(false);
  const [emailAlerts, setEmailAlerts] = useState(true);
  const [desktopNotifs, setDesktopNotifs] = useState(true);
  const [autoAssign, setAutoAssign] = useState(false);
  const [profile, setProfile] = useState({
    name: 'Alex Johnson',
    email: 'alex.support@company.com',
    role: 'Senior Support Specialist',
    timezone: 'Asia/Kolkata (IST)',
  });

  const handleSave = (e) => {
    e.preventDefault();
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <div className="space-y-6 w-full">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Settings</h1>
        <p className="text-gray-600 mt-1">
          Manage your account preferences and support dashboard configurations
        </p>
      </div>

      {saved && (
        <div className="p-4 bg-green-50 border border-green-200 rounded-xl flex items-center gap-3 text-green-800 transition">
          <CheckCircle2 size={20} className="text-green-600 flex-shrink-0" />
          <p className="text-sm font-medium">Settings saved successfully!</p>
        </div>
      )}

      <form onSubmit={handleSave} className="space-y-6">
        {/* Profile Card */}
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-100">
            <div className="p-2 bg-blue-100 rounded-lg text-blue-600">
              <User size={20} />
            </div>
            <div>
              <h2 className="text-lg font-semibold text-gray-900">Support Profile</h2>
              <p className="text-xs text-gray-500">Your public identity visible on customer tickets</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
              <input
                type="text"
                value={profile.name}
                onChange={(e) => setProfile({ ...profile, name: e.target.value })}
                className="w-full px-3.5 py-2.5 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
              <input
                type="email"
                value={profile.email}
                onChange={(e) => setProfile({ ...profile, email: e.target.value })}
                className="w-full px-3.5 py-2.5 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Role</label>
              <input
                type="text"
                value={profile.role}
                onChange={(e) => setProfile({ ...profile, role: e.target.value })}
                className="w-full px-3.5 py-2.5 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Timezone</label>
              <select
                value={profile.timezone}
                onChange={(e) => setProfile({ ...profile, timezone: e.target.value })}
                className="w-full px-3.5 py-2.5 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
              >
                <option>Asia/Kolkata (IST)</option>
                <option>UTC (GMT+0)</option>
                <option>America/New_York (EST)</option>
                <option>America/Los_Angeles (PST)</option>
              </select>
            </div>
          </div>
        </div>

        {/* Notifications */}
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-100">
            <div className="p-2 bg-yellow-100 rounded-lg text-yellow-600">
              <Bell size={20} />
            </div>
            <div>
              <h2 className="text-lg font-semibold text-gray-900">Notifications</h2>
              <p className="text-xs text-gray-500">Configure how and when you receive ticket alerts</p>
            </div>
          </div>

          <div className="space-y-4">
            <label className="flex items-start justify-between cursor-pointer p-3 hover:bg-gray-50 rounded-lg transition">
              <div>
                <p className="text-sm font-medium text-gray-900">Email Notifications for Urgent Tickets</p>
                <p className="text-xs text-gray-500">Get an instant email alert when high priority tickets are submitted</p>
              </div>
              <input
                type="checkbox"
                checked={emailAlerts}
                onChange={(e) => setEmailAlerts(e.target.checked)}
                className="mt-1 h-4 w-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
              />
            </label>

            <label className="flex items-start justify-between cursor-pointer p-3 hover:bg-gray-50 rounded-lg transition">
              <div>
                <p className="text-sm font-medium text-gray-900">Browser Push Notifications</p>
                <p className="text-xs text-gray-500">Show desktop notifications for new customer replies</p>
              </div>
              <input
                type="checkbox"
                checked={desktopNotifs}
                onChange={(e) => setDesktopNotifs(e.target.checked)}
                className="mt-1 h-4 w-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
              />
            </label>

            <label className="flex items-start justify-between cursor-pointer p-3 hover:bg-gray-50 rounded-lg transition">
              <div>
                <p className="text-sm font-medium text-gray-900">Auto-Assign Tickets</p>
                <p className="text-xs text-gray-500">Automatically assign unassigned tickets when opening details</p>
              </div>
              <input
                type="checkbox"
                checked={autoAssign}
                onChange={(e) => setAutoAssign(e.target.checked)}
                className="mt-1 h-4 w-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
              />
            </label>
          </div>
        </div>

        {/* Action Button */}
        <div className="flex justify-end">
          <button
            type="submit"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition shadow-sm"
          >
            <Save size={16} />
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
}
