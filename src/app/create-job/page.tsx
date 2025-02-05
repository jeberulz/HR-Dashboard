import FormLayout from '@/components/layouts/FormLayout';

const jobTypes = [
  { id: 'full-time', name: 'Full-time' },
  { id: 'part-time', name: 'Part-time' },
  { id: 'contract', name: 'Contract' },
  { id: 'internship', name: 'Internship' },
];

const locations = [
  { id: 'remote', name: 'Remote' },
  { id: 'hybrid', name: 'Hybrid' },
  { id: 'onsite', name: 'On-site' },
];

export default function CreateJobPage() {
  return (
    <FormLayout currentStep={1} totalSteps={3}>
      <div className="space-y-8">
        <div>
          <h2 className="text-lg font-medium text-gray-900">Basic Information</h2>
          <p className="mt-1 text-sm text-gray-500">
            Start with the basic information about the position.
          </p>
        </div>

        <div className="space-y-6">
          {/* Job Title */}
          <div>
            <label
              htmlFor="title"
              className="block text-sm font-medium text-gray-700"
            >
              Job Title
            </label>
            <div className="mt-1">
              <input
                type="text"
                name="title"
                id="title"
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                placeholder="e.g. Senior Frontend Developer"
              />
            </div>
          </div>

          {/* Department */}
          <div>
            <label
              htmlFor="department"
              className="block text-sm font-medium text-gray-700"
            >
              Department
            </label>
            <div className="mt-1">
              <input
                type="text"
                name="department"
                id="department"
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                placeholder="e.g. Engineering"
              />
            </div>
          </div>

          {/* Job Type */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Job Type
            </label>
            <div className="mt-2 space-y-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-4">
              {jobTypes.map((type) => (
                <div key={type.id} className="flex items-center">
                  <input
                    id={type.id}
                    name="job-type"
                    type="radio"
                    className="h-4 w-4 border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                  <label
                    htmlFor={type.id}
                    className="ml-3 block text-sm font-medium text-gray-700"
                  >
                    {type.name}
                  </label>
                </div>
              ))}
            </div>
          </div>

          {/* Location */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Location Type
            </label>
            <div className="mt-2 space-y-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-4">
              {locations.map((location) => (
                <div key={location.id} className="flex items-center">
                  <input
                    id={location.id}
                    name="location"
                    type="radio"
                    className="h-4 w-4 border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                  <label
                    htmlFor={location.id}
                    className="ml-3 block text-sm font-medium text-gray-700"
                  >
                    {location.name}
                  </label>
                </div>
              ))}
            </div>
          </div>

          {/* Description */}
          <div>
            <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-700"
            >
              Job Description
            </label>
            <div className="mt-1">
              <textarea
                id="description"
                name="description"
                rows={4}
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                placeholder="Describe the role and responsibilities..."
              />
            </div>
          </div>

          {/* Requirements */}
          <div>
            <label
              htmlFor="requirements"
              className="block text-sm font-medium text-gray-700"
            >
              Requirements
            </label>
            <div className="mt-1">
              <textarea
                id="requirements"
                name="requirements"
                rows={4}
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                placeholder="List the key requirements and qualifications..."
              />
            </div>
          </div>
        </div>
      </div>
    </FormLayout>
  );
} 