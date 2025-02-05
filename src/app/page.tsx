'use client'

import React from 'react'
import Image from 'next/image'
import { Briefcase, Users, Calendar, CheckSquare } from 'lucide-react'

const stats = [
  { icon: Briefcase, label: 'Active jobs', value: '21' },
  { icon: Users, label: 'Candidates', value: '100' },
  { icon: Calendar, label: 'Events', value: '4' },
  { icon: CheckSquare, label: 'To do list', value: '10' },
]

const jobCategories = [
  {
    title: 'HR Manager',
    image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80',
  },
  {
    title: 'UX Designers',
    image: 'https://images.unsplash.com/photo-1587440871875-191322ee64b0?auto=format&fit=crop&q=80',
  },
  {
    title: 'Software Engineers',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80',
  },
  {
    title: 'Program Managers',
    image: 'https://images.unsplash.com/photo-1531538606174-0f90ff5dce83?auto=format&fit=crop&q=80',
  },
  {
    title: 'Marketing Execs',
    image: 'https://images.unsplash.com/photo-1552581234-26160f608093?auto=format&fit=crop&q=80',
  },
]

const trainingModules = [
  {
    title: 'How to spot top talent',
    description: 'Training on how to spot top talent in a busy world',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80',
  },
  {
    title: 'Onboarding Senior Executives',
    description: 'Training on how to onboard senior executives',
    image: 'https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?auto=format&fit=crop&q=80',
  },
  {
    title: 'Company policy documents',
    description: 'Training on company policies and handbook',
    image: 'https://images.unsplash.com/photo-1664575602554-2087b04935a5?auto=format&fit=crop&q=80',
  },
]

export default function Home() {
  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-[32px] font-semibold mb-1">Hello Mr John</h1>
          <p className="text-gray-500">Happy Monday - 07/02/2025</p>
        </div>
        <div className="w-10 h-10 rounded-full overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80"
            alt="Profile"
            width={40}
            height={40}
            className="object-cover"
          />
        </div>
      </div>

      <div className="grid grid-cols-4 gap-4 mb-12">
        {stats.map(({ icon: Icon, label, value }) => (
          <div key={label} className="bg-white rounded-[20px] p-6 shadow-sm">
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <div className="text-primary">
                  <Icon size={20} className="text-[#2865EC]" />
                </div>
                <p className="text-[#8C8C8C] text-base">{label}</p>
              </div>
              <p className="text-[40px] font-semibold text-black">{value}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mb-12 bg-white rounded-lg p-4 border border-[#F1F1F3]">
        <h2 className="text-lg font-medium mb-4">Create a new job</h2>
        <div className="grid grid-cols-5 gap-4">
          {jobCategories.map((job) => (
            <div key={job.title} className="bg-white rounded-lg p-4 border border-[#F1F1F3]">
              <div className="relative h-32 mb-4 rounded-xl overflow-hidden">
                <Image
                  src={job.image}
                  alt={job.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex items-center gap-2">
                <Briefcase size={16} className="text-primary" />
                <span className="text-sm text-gray-600">{job.title}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-lg font-medium mb-2">Training modules</h2>
        <p className="text-gray-500 text-sm mb-4">Training about how to spot top talent in a busy world</p>
        <div className="grid grid-cols-3 gap-4">
          {trainingModules.map((module) => (
            <div key={module.title} className="bg-white rounded-2xl overflow-hidden shadow-sm">
              <div className="relative h-48">
                <Image
                  src={module.image}
                  alt={module.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-medium mb-2">{module.title}</h3>
                <p className="text-sm text-gray-500">{module.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
} 