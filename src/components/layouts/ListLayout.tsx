'use client'

import { ReactNode, useState } from 'react';

interface ListLayoutProps {
  children: ReactNode;
  title?: string;
}

const ListLayout = ({ children, title }: ListLayoutProps) => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  return (
    <div className="h-screen flex flex-col">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-semibold text-gray-900">{title}</h1>
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setIsFilterOpen(!isFilterOpen)}
                className="md:hidden px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
              >
                Filters
              </button>
              <button className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700">
                New Item
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="flex-1 flex overflow-hidden">
        {/* Filters sidebar */}
        <aside
          className={`w-64 border-r border-gray-200 bg-white overflow-y-auto ${
            isFilterOpen ? 'block' : 'hidden'
          } md:block`}
        >
          <div className="px-4 py-6">
            <h2 className="text-lg font-medium text-gray-900 mb-4">Filters</h2>
            {/* Filter content goes here */}
          </div>
        </aside>

        {/* Main content */}
        <main className="flex-1 overflow-y-auto bg-white">
          <div className="px-4 sm:px-6 lg:px-8 py-6">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};

export default ListLayout; 