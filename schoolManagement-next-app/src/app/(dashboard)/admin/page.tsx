import Announcement from '@/components/Announcement'
import AttendanceChart from '@/components/AttendanceChart'
import AttendanceChartContainer from '@/components/AttendanceChartContainer'
import CountChart from '@/components/CountChart'
import CountChartContainer from '@/components/CountChartContainer'
import EventCalendar from '@/components/EventCalendar'
import FinanceChart from '@/components/FinanceChart'
import UserCard from '@/components/UserCard'
import React from 'react'

const AdminPage = () => {
  return (
    <div className='p-4 flex gap-4 flex-col md:flex-row'>
      {/* left */}
      <div className='w-full lg:w-2/3 flex flex-col gap-8'>
        {/* user card */}
        <div className='flex gap-4 justify-between flex-wrap'>
          <UserCard type='admin'/>
          <UserCard type='student'/>
          <UserCard type='teacher'/>
          <UserCard type='parent'/>
        </div>

        <div>
          {/* middle chart */}
          <div className='flex gap-4 flex-col lg:flex-row'>
              {/* count chart */}
              <div className='w-full lg:w-1/3 h-[450px]'>
                  <CountChartContainer/>
              </div>
              {/* attendence chart */}
              <div className='w-full lg:w-2/3 h-[450px]'>
                  <AttendanceChartContainer/>
              </div>
          </div>
          {/* bottom chart */}
          <div className='w-full h-[500px] mt-4 '>
              <FinanceChart/>
          </div>
        </div>
      </div>
      {/* right */}
      <div className='w-full lg:w-1/3 flex flex-col gap-8'>
          <EventCalendar/>
          <Announcement/>
      </div>
    </div>
  )
}

export default AdminPage