import React from 'react'
import Sidebar from './components/Sidebar'
import Header from './components/Header'
import StatsCards from './components/StatsCards'
import LeadsTable from './components/LeadsTable'
import LeadsContent from './components/LeadsContent'

const App = () => {
  return (
    <div className='flex h-screen bg-gray-50'>
      <Sidebar />
      <div className='flex-1 overflow-auto'>
        <Header />
        <LeadsContent />
      </div>
      
    </div>
  )
}

export default App