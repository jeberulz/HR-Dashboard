import { ReactNode } from 'react';

interface FormLayoutProps {
  children: ReactNode;
  currentStep?: number;
  totalSteps?: number;
}

const FormLayout = ({ children, currentStep = 1, totalSteps = 1 }: FormLayoutProps) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="w-full mx-auto py-8 px-4 sm:px-6 lg:px-8">
        {/* Progress indicator */}
        {totalSteps > 1 && (
          <div className="mb-8">
            <div className="relative">
              <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200">
                <div
                  style={{ width: `${(currentStep / totalSteps) * 100}%` }}
                  className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"
                ></div>
              </div>
              <div className="flex justify-between text-sm text-gray-600">
                {Array.from({ length: totalSteps }, (_, i) => (
                  <div
                    key={i}
                    className={`${
                      i + 1 <= currentStep ? 'text-blue-600 font-medium' : ''
                    }`}
                  >
                    Step {i + 1}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Form content */}
        <div className="bg-white shadow rounded-lg">
          <div className="px-6 py-8">
            {children}
          </div>
        </div>

        {/* Action buttons */}
        <div className="mt-6 flex justify-end space-x-4">
          <button
            type="button"
            className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50"
          >
            Back
          </button>
          <button
            type="button"
            className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700"
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default FormLayout; 