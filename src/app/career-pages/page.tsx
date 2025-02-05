import FormLayout from '@/components/layouts/FormLayout';

const careerPages = [
  {
    id: 1,
    title: 'Main Career Site',
    url: 'careers.company.com',
    status: 'Published',
    lastUpdated: '2024-02-10',
    views: 1250,
    applications: 45,
  },
  {
    id: 2,
    title: 'Engineering Careers',
    url: 'careers.company.com/engineering',
    status: 'Draft',
    lastUpdated: '2024-02-12',
    views: 800,
    applications: 28,
  },
  // Add more pages as needed
];

export default function CareerPagesPage() {
  return (
    <FormLayout>
      <div className="space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">Career Pages</h1>
          <p className="mt-1 text-sm text-gray-500">
            Manage and customize your career pages to attract top talent.
          </p>
        </div>

        {/* Quick Actions */}
        <div className="bg-white shadow rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <div className="sm:flex sm:items-center sm:justify-between">
              <div>
                <h3 className="text-lg font-medium text-gray-900">
                  Career Pages Overview
                </h3>
                <p className="mt-1 text-sm text-gray-500">
                  Create and manage your career pages to showcase your company
                  culture and open positions.
                </p>
              </div>
              <div className="mt-4 sm:mt-0">
                <button className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700">
                  Create New Page
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Pages Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {careerPages.map((page) => (
            <div
              key={page.id}
              className="bg-white shadow rounded-lg hover:shadow-md transition-shadow duration-200"
            >
              <div className="p-6">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">
                      {page.title}
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">{page.url}</p>
                  </div>
                  <span
                    className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      page.status === 'Published'
                        ? 'bg-green-100 text-green-800'
                        : 'bg-yellow-100 text-yellow-800'
                    }`}
                  >
                    {page.status}
                  </span>
                </div>

                <div className="mt-6 grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm font-medium text-gray-500">Views</p>
                    <p className="mt-1 text-2xl font-semibold text-gray-900">
                      {page.views}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500">
                      Applications
                    </p>
                    <p className="mt-1 text-2xl font-semibold text-gray-900">
                      {page.applications}
                    </p>
                  </div>
                </div>

                <div className="mt-6">
                  <p className="text-sm text-gray-500">
                    Last updated {page.lastUpdated}
                  </p>
                </div>

                <div className="mt-6 flex space-x-3">
                  <button className="flex-1 inline-flex justify-center items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
                    Edit
                  </button>
                  <button className="flex-1 inline-flex justify-center items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700">
                    View Live
                  </button>
                </div>
              </div>
            </div>
          ))}

          {/* Add New Page Card */}
          <div className="bg-gray-50 shadow-sm rounded-lg border-2 border-dashed border-gray-300 p-6 flex items-center justify-center hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
            <div className="text-center">
              <svg
                className="mx-auto h-12 w-12 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                />
              </svg>
              <h3 className="mt-2 text-sm font-medium text-gray-900">
                Create a new page
              </h3>
              <p className="mt-1 text-sm text-gray-500">
                Get started by creating a new career page
              </p>
              <button className="mt-4 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700">
                Add Page
              </button>
            </div>
          </div>
        </div>
      </div>
    </FormLayout>
  );
} 