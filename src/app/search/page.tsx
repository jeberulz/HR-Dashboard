import { useState } from 'react';
import DashboardLayout from '@/components/layouts/DashboardLayout';

const categories = [
  { id: 'all', name: 'All' },
  { id: 'jobs', name: 'Jobs' },
  { id: 'candidates', name: 'Candidates' },
  { id: 'resources', name: 'Resources' },
];

const filters = [
  {
    id: 'status',
    name: 'Status',
    options: [
      { value: 'active', label: 'Active' },
      { value: 'inactive', label: 'Inactive' },
      { value: 'draft', label: 'Draft' },
    ],
  },
  {
    id: 'location',
    name: 'Location',
    options: [
      { value: 'remote', label: 'Remote' },
      { value: 'onsite', label: 'On-site' },
      { value: 'hybrid', label: 'Hybrid' },
    ],
  },
];

export default function SearchPage() {
  return (
    <DashboardLayout>
      <div className="min-h-screen bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Search Header */}
          <div className="mb-8">
            <div className="relative">
              <div className="flex items-center">
                <input
                  type="text"
                  className="block w-full pl-4 pr-12 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Search for jobs, candidates, or resources..."
                />
                <button className="absolute right-3 p-2">
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
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Categories */}
          <div className="mb-8">
            <div className="sm:hidden">
              <select className="block w-full rounded-md border-gray-300 py-2">
                {categories.map((category) => (
                  <option key={category.id}>{category.name}</option>
                ))}
              </select>
            </div>
            <div className="hidden sm:block">
              <nav className="flex space-x-4" aria-label="Categories">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    className="px-3 py-2 text-sm font-medium text-gray-600 hover:text-gray-900"
                  >
                    {category.name}
                  </button>
                ))}
              </nav>
            </div>
          </div>

          <div className="lg:grid lg:grid-cols-12 lg:gap-8">
            {/* Filters */}
            <div className="hidden lg:block lg:col-span-3">
              <div className="space-y-6">
                {filters.map((filter) => (
                  <div key={filter.id}>
                    <h3 className="text-sm font-medium text-gray-900">
                      {filter.name}
                    </h3>
                    <div className="mt-2 space-y-2">
                      {filter.options.map((option) => (
                        <div key={option.value} className="flex items-center">
                          <input
                            type="checkbox"
                            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                          />
                          <label className="ml-3 text-sm text-gray-600">
                            {option.label}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Results */}
            <div className="mt-6 lg:mt-0 lg:col-span-9">
              <div className="bg-white shadow rounded-lg">
                <div className="px-4 py-5 sm:p-6">
                  <h3 className="text-lg font-medium text-gray-900">
                    Search Results
                  </h3>
                  <div className="mt-4">
                    <p className="text-gray-500">
                      Start typing to see search results
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
} 