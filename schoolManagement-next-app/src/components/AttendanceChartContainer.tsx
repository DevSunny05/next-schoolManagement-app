import React from 'react'
import AttendanceChart from './AttendanceChart'
import Image from 'next/image'
import prisma from '@/lib/prisma'

const AttendanceChartContainer = async() => {

    const today=new Date()
    const dayOfweek=today.getDay()
    const daySinceMonday=dayOfweek===0?6:dayOfweek-1

    const lastMonday=new Date(today)
    lastMonday.setDate(today.getDate()-daySinceMonday)


    console.log(dayOfweek)

    const resData =await prisma.attendance.findMany({
        where:{
            date:{
                gte:lastMonday
            }
        },
        select:{
            date:true,
            present:true
        }
    })

    // console.log(data)
    const daysOfweek=["Mon","Tue","Wed","Thu","Fri"]

    const attendanceMap:{[key:string]:{present:number;absent:number}}={
        Mon:{ present:0,absent:0},
        Tue:{ present:0,absent:0},
        Wed:{ present:0,absent:0},
        Thu:{ present:0,absent:0},
        Fri:{ present:0,absent:0},
        
    }

    resData.forEach((item)=>{
        const itemDate=new Date(item.date)

        if(dayOfweek>=1 && dayOfweek<=5){
            const dayName=daysOfweek[dayOfweek-1]

            if(item.present){
                attendanceMap[dayName].present+=1
            }else{
                attendanceMap[dayName].absent+=1
            }
        }
    })

    const data=daysOfweek.map(day=>({
        name:day,
        present:attendanceMap[day].present,
        absent:attendanceMap[day].absent
    }))

    console.log(attendanceMap)
  return (
    <div className='bg-white rounded-lg p-4 h-full'>
    <div className='flex justify-between items-center'>
     <h1 className="text-lg font-semibold">Attendance</h1>
     <Image src={'/moreDark.png'} alt='' width={20} height={20}/>
    </div>
    <AttendanceChart data={data}/>
    </div>
  )
}

export default AttendanceChartContainer