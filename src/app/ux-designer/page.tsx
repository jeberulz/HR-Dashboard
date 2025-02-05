import JobProfileLayout from '@/components/layouts/JobProfileLayout';

const jobDetails = {
  title: 'UX Designer',
  department: 'Design',
  location: 'Remote',
  salary: '$80,000 - $120,000',
  experience: '3-5 years',
  type: 'Full-time',
};

const responsibilities = [
  'Lead the UX design process for various projects from conception to launch',
  'Create wireframes, prototypes, and high-fidelity designs',
  'Conduct user research and usability testing',
  'Collaborate with product managers and developers',
  'Mentor junior designers and contribute to design system',
];

const requirements = [
  "Bachelor's degree in Design, HCI, or related field",
  '3-5 years of experience in UX design',
  'Strong portfolio demonstrating end-to-end design process',
  'Proficiency in design tools (Figma, Sketch, etc.)',
  'Experience with user research and usability testing',
  'Excellent communication and collaboration skills',
];

const benefits = [
  'Competitive salary and equity',
  'Health, dental, and vision insurance',
  'Unlimited PTO',
  'Remote work options',
  'Professional development budget',
  'Home office setup allowance',
];

export default function UXDesignerPage() {
  return (
    <JobProfileLayout
      title={jobDetails.title}
      department={jobDetails.department}
      location={jobDetails.location}
    >
      <div className="space-y-8">
        {/* Overview */}
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-lg font-medium text-gray-900 mb-4">Overview</h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <div>
              <h3 className="text-sm font-medium text-gray-500">Experience</h3>
              <p className="mt-1 text-sm text-gray-900">{jobDetails.experience}</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-500">Type</h3>
              <p className="mt-1 text-sm text-gray-900">{jobDetails.type}</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-500">Salary Range</h3>
              <p className="mt-1 text-sm text-gray-900">{jobDetails.salary}</p>
            </div>
          </div>
        </div>

        {/* Responsibilities */}
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-lg font-medium text-gray-900 mb-4">
            Responsibilities
          </h2>
          <ul className="space-y-3">
            {responsibilities.map((item, index) => (
              <li key={index} className="flex items-start">
                <span className="flex-shrink-0 h-5 w-5 text-blue-500">
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </span>
                <span className="ml-3 text-sm text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Requirements */}
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-lg font-medium text-gray-900 mb-4">Requirements</h2>
          <ul className="space-y-3">
            {requirements.map((item, index) => (
              <li key={index} className="flex items-start">
                <span className="flex-shrink-0 h-5 w-5 text-blue-500">
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </span>
                <span className="ml-3 text-sm text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Benefits */}
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-lg font-medium text-gray-900 mb-4">
            Benefits & Perks
          </h2>
          <ul className="space-y-3">
            {benefits.map((item, index) => (
              <li key={index} className="flex items-start">
                <span className="flex-shrink-0 h-5 w-5 text-blue-500">
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </span>
                <span className="ml-3 text-sm text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </JobProfileLayout>
  );
} 