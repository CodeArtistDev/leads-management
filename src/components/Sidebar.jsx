import React from 'react'
import {
  Globe,
  Home,
  Users,
  Mail,
  Phone,
  FileText,
  Layers,
  ChartNoAxesCombined,
  ListCollapse,
  FileCog,
  FolderSearch,
  LifeBuoy
} from 'lucide-react';

const Sidebar = () => {
  return (
    <div className="w-24  bg-white border-r border-gray-200 flex flex-col justify-between">
        <div className="p-6 mb-4 border border-gray-200 flex items-center justify-center">
            <Globe className='w-8 h-8  text-blue-600' />
        </div>

        <nav className='flex-1 px-4'>
          <div className="space-y-2">
            <a href="#" className="flex items-center px-3 py-1  rounded-lg hover:bg-gray-100">
              <Home className='w-6 h-6 ' />
            </a>
            <a href="#" className="flex items-center px-3 py-1.5  rounded-lg hover:bg-gray-100">
              <Users className='w-6 h-6 ' />
            </a>
            <a href="#" className="flex items-center px-3 py-1.5  rounded-lg hover:bg-gray-100">
              <Mail className='w-6 h-6 ' />
            </a>
            <a href="#" className="flex items-center px-3 py-1.5  rounded-lg hover:bg-gray-100">
              <Phone className='w-6 h-6 ' />
            </a>
            <a href="#" className="flex items-center px-3 py-1.5  rounded-lg hover:bg-gray-100">
              <FileText className='w-6 h-6 ' />
            </a>
            <a href="#" className="flex items-center px-3 py-1.5  rounded-lg hover:bg-gray-100">
              <Layers className='w-6 h-6 ' />
            </a>
            <a href="#" className="flex items-center px-3 py-1.5  rounded-lg hover:bg-gray-100">
              <ListCollapse className='w-6 h-6 ' />
            </a>
            <a href="#" className="flex items-center px-3 py-1.5  rounded-lg hover:bg-gray-100">
              <ChartNoAxesCombined className='w-6 h-6 ' />
            </a>
            <a href="#" className="flex items-center px-3 py-1.5  rounded-lg hover:bg-gray-100">
              <FileCog className='w-6 h-6 ' />
            </a>            
          </div>
        </nav>

    <div className="p-4">
      <a href="#" className="flex items-center px-3 py-1.5 rounded-lg hover:bg-gray-100">
        <FolderSearch className='w-6 h-6' />
      </a>
      <a href="#" className="flex items-center px-3 py-1.5 rounded-lg hover:bg-gray-100">
        <LifeBuoy className='w-6 h-6' />
      </a>
    </div>

    </div>
  )
}

export default Sidebar