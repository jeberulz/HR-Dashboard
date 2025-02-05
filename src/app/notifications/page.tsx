import ListLayout from '@/components/layouts/ListLayout';

const notifications = [
  {
    id: 1,
    title: 'New application received',
    description: 'Sarah Wilson applied for UX Designer position',
    time: '2 hours ago',
    read: false,
  },
  {
    id: 2,
    title: 'Interview scheduled',
    description: 'Interview with Michael Chen for Frontend Developer position',
    time: '4 hours ago',
    read: true,
  },
  {
    id: 3,
    title: 'Candidate feedback submitted',
    description: 'John Doe submitted feedback for Software Engineer interview',
    time: '1 day ago',
    read: false,
  },
  // Add more notifications as needed
];

export default function NotificationsPage() {
  return (
    <ListLayout title="Notifications">
      <div className="space-y-4">
        {/* Filter tabs */}
        <div className="border-b border-gray-200">
          <nav className="-mb-px flex space-x-8" aria-label="Tabs">
            <button className="border-blue-500 text-blue-600 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm">
              All
            </button>
            <button className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm">
              Unread
            </button>
            <button className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm">
              Read
            </button>
          </nav>
        </div>

        {/* Bulk actions */}
        <div className="bg-white px-4 py-3 border-b border-gray-200 sm:px-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <input
                type="checkbox"
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <button className="text-sm text-gray-700 hover:text-gray-900">
                Mark all as read
              </button>
              <button className="text-sm text-gray-700 hover:text-gray-900">
                Delete selected
              </button>
            </div>
          </div>
        </div>

        {/* Notifications list */}
        <div className="bg-white shadow overflow-hidden sm:rounded-md">
          <ul className="divide-y divide-gray-200">
            {notifications.map((notification) => (
              <li
                key={notification.id}
                className={`${
                  notification.read ? 'bg-white' : 'bg-blue-50'
                } hover:bg-gray-50`}
              >
                <div className="px-4 py-4 sm:px-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <input
                        type="checkbox"
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                      />
                      <div>
                        <p className="text-sm font-medium text-gray-900">
                          {notification.title}
                        </p>
                        <p className="text-sm text-gray-500">
                          {notification.description}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <time className="text-sm text-gray-500">
                        {notification.time}
                      </time>
                      <button className="p-1 rounded-full hover:bg-gray-100">
                        <svg
                          className="h-5 w-5 text-gray-400"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </ListLayout>
  );
} 