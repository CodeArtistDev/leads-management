import { ArrowDown, Plus } from 'lucide-react'
import React, { useState } from 'react'
import StatsCards from './StatsCards'
import LeadsTable from './LeadsTable'
import NewLeadModal from './NewLeadModal'


const LeadsContent = () => {

  const [ isModelOpen, setIsModelOpen ] = useState(false);
  const [ leads, setLeads ] = useState([
    {
      id: '#3068',
      customer: 'Olivia Rhye',
      company: 'Empire Mark',
      email: 'rhye@empiremark.io',
      phone: '+1 (218) 609-3149',
      value: '$1,821.02',
      tag: 'Important',
      source: 'Facebook',
      status: 'Customer',
      created: 'Just now'
    },
    {
      id: '#3065',
      customer: 'Phoenix Baker',
      company: 'Wit Ventures',
      email: 'baker@witventures.com',
      phone: '+1 (326) 507-6709',
      value: '$8,398.70',
      tag: 'Follow up',
      source: 'Facebook',
      status: 'Qualified',
      created: '44 mins ago'
    },
    {
      id: '#3064',
      customer: 'Lana Steiner',
      company: 'Factor Four',
      email: 'steiner@factorfour.com',
      phone: '+1 (208) 608-6292',
      value: '$5,286.94',
      tag: 'Review',
      source: 'LinkedIn',
      status: 'Working',
      created: '3 hr ago'
    },
    {
      id: '#3063',
      customer: 'Demi Wilkinson',
      company: 'Market Square',
      email: 'wilkinson@marketsq.com',
      phone: '+1 (317) 234-6462',
      value: '$2,968.95',
      tag: 'Follow up',
      source: 'Dribbble',
      status: 'Contacted',
      created: '7 hr ago'
    },
    {
      id: '#3062',
      customer: 'Candice Wu',
      company: 'Voice Firm',
      email: 'candice@voicefirm.com',
      phone: '+1 (860) 539-0761',
      value: '$7,005.23',
      tag: 'Review',
      source: 'LinkedIn',
      status: 'Qualified',
      created: '12 hr ago'
    },
    {
      id: '#3061',
      customer: 'Natali Craig',
      company: 'Maxus Media',
      email: 'natali@maxusmedia.net',
      phone: '+1 (540) 683-1441',
      value: '$2,595.82',
      tag: 'Review',
      source: 'UpWork',
      status: 'Proposal Sent',
      created: 'Yesterday'
    }
  ])

  const addNewLead = (newLead) => {
    const newId = '#' + (3069 + leads.length);
    const newLeadEntry = {
      ...newLead,
      id: newId,
      tag: 'Review',
      created: 'Just now'
    };
    setLeads([ newLeadEntry, ...leads ]);
  };

  return (
    <main className='flex-1 p-6'>
      <div className="mb-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2 ms-2">
          <div className="flex flex-col items-start justify-between">
            <h2 className="text-xl font-bold text-gray-900">LeadsManagement</h2>
            <h3 className='text-gray-500 text-sm font-medium mt-1'>Organize leads and track their progress effectively here</h3>
          </div>
          <div className="flex flex-col mt-4 sm:mt-0 sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto">
            <button onClick={() => setIsModelOpen(true)} className='bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-blue-700'>
              <Plus className='w-4 h-4' />
              <span className='font-medium'>New Leads</span>
            </button>
            <button className='bg-white border border-gray-300 px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-gray-50'>
              <ArrowDown className='w-4 h-4' />
              <span className='font-medium'>Export</span>
            </button>
          </div>
        </div>
      </div>
      <hr className='ms-2 mb-4 text-gray-200' />

      <StatsCards />
      <LeadsTable leads={leads} />

      {isModelOpen && (
        <NewLeadModal 
          onClose={() => setIsModelOpen(false)}
          onSubmit={addNewLead}
        />
      )}
    </main>
  )
}

export default LeadsContent