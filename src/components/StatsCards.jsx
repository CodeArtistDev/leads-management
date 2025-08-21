import React from 'react'

const StatsCards = () => {

  const stats = [
    { label: 'New', value: '127', color: 'text-gray-500'},
    { label: 'Contacted', value: '705k', color: 'text-gray-500'},
    { label: 'Qualified', value: '249k', color: 'text-gray-500'},
    { label: 'Working', value: '57k', color: 'text-gray-500'},
    { label: 'Proposal Sent', value: '1.1k', color: 'text-gray-500'},
    { label: 'Customer', value: '3.7k', color: 'text-green-600'},
    { label: 'Lost Leads', value: '5.2k', color: 'text-red-600'}
  ]

  return (
    <div className='grid  grid-cols-7 m-1 mb-6 bg-white overflow-hidden rounded-lg border border-gray-200'>
      {
        stats.map((stat, index) => (
          <div key={index} className='py-3  text-left px-6 '>
            <div className={` text-sm mb-1 font-bold ${stat.color}`}>{stat.label}</div>
            <div className={`text-2xl font-bold `}>{stat.value}</div>
          </div>
        ))
      }
    </div>
  )
}

export default StatsCards