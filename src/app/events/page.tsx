import DashboardLayout from '@/components/layouts/DashboardLayout';

const events = [
  {
    id: 1,
    title: 'Technical Interview - Frontend Developer',
    type: 'Interview',
    date: '2024-02-15',
    time: '10:00 AM',
    duration: '1 hour',
    location: 'Google Meet',
    participants: [
      {
        name: 'Michael Chen',
        role: 'Candidate',
        avatar: '/avatars/michael.jpg',
      },
      {
        name: 'John Doe',
        role: 'Interviewer',
        avatar: '/avatars/john.jpg',
      },
    ],
  },
  {
    id: 2,
    title: 'Design Portfolio Review - UX Designer',
    type: 'Interview',
    date: '2024-02-16',
    time: '2:00 PM',
    duration: '45 minutes',
    location: 'Zoom',
    participants: [
      {
        name: 'Sarah Wilson',
        role: 'Candidate',
        avatar: '/avatars/sarah.jpg',
      },
      {
        name: 'Jane Smith',
        role: 'Interviewer',
        avatar: '/avatars/jane.jpg',
      },
    ],
  },
  // Add more events as needed
];

const eventTypes = [
  { id: 'all', name: 'All Events' },
  { id: 'interviews', name: 'Interviews' },
  { id: 'team-meetings', name: 'Team Meetings' },
  { id: 'reviews', name: 'Reviews' },
];

export default function EventsPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-semibold text-gray-900">Events</h1>
            <p className="mt-1 text-sm text-gray-500">
              Schedule and manage your recruitment events.
            </p>
          </div>
          <button className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700">
            Schedule Event
          </button>
        </div>

        {/* Event Type Filter */}
        <div className="bg-white rounded-lg shadow">
          <div className="px-4 py-3">
            <nav className="flex space-x-2" aria-label="Event Types">
              {eventTypes.map((type) => (
                <button
                  key={type.id}
                  className={`px-4 py-2 text-sm font-medium rounded-md ${
                    type.id === 'all'
                      ? 'bg-blue-50 text-blue-700'
                      : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  {type.name}
                </button>
              ))}
            </nav>
          </div>
        </div>

        {/* Events List */}
        <div className="space-y-4">
          {events.map((event) => (
            <div
              key={event.id}
              className="bg-white rounded-lg shadow hover:shadow-md transition-shadow"
            >
              <div className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex items-start space-x-4">
                    {/* Calendar Icon */}
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">
                        <svg
                          className="w-6 h-6 text-blue-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                          />
                        </svg>
                      </div>
                    </div>

                    {/* Event Details */}
                    <div>
                      <h3 className="text-base font-medium text-gray-900">
                        {event.title}
                      </h3>
                      <div className="mt-1 space-y-1">
                        <div className="flex items-center text-sm text-gray-500">
                          <svg
                            className="w-4 h-4 mr-1.5 text-gray-400"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                          {event.date} at {event.time} ({event.duration})
                        </div>
                        <div className="flex items-center text-sm text-gray-500">
                          <svg
                            className="w-4 h-4 mr-1.5 text-gray-400"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                            />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                          </svg>
                          {event.location}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Participants */}
                  <div className="flex items-center space-x-2">
                    <div className="flex -space-x-2">
                      {event.participants.map((participant, index) => (
                        <img
                          key={index}
                          className="w-8 h-8 rounded-full border-2 border-white"
                          src={participant.avatar}
                          alt={participant.name}
                          title={`${participant.name} (${participant.role})`}
                        />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="mt-4 flex justify-end space-x-3">
                  <button className="px-3 py-1.5 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50">
                    Reschedule
                  </button>
                  <button className="px-3 py-1.5 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700">
                    Join Call
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
} 