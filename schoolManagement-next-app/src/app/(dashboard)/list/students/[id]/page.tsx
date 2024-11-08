import Announcement from "@/components/Announcement";
import BigCalendar from "@/components/BigCalendar";
import Performance from "@/components/Performance";
import Image from "next/image";
import Link from "next/link";
import React from "react";


const SingleStudentPage = () => {
  return (
    <div className="flex-1 p-4 flex flex-col gap-4 xl:flex-row">
      {/* left */}
      <div className="w-full xl:w-2/3">
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="bg-sky py-6 px-4 rounded-md flex-1 flex gap-4">
            <div className="w-1/3">
              <Image
                src={"/https://th.bing.com/th/id/OIP.AN49M9MfvNY0G0gOag6DZgHaHa?w=196&h=196&c=7&r=0&o=5&dpr=1.3&pid=1.7"}
                alt=""
                width={144}
                height={144}
                className="w-36 h-36 rounded-full object-cover"
              />
            </div>
            <div className="w-2/3 flex flex-col justify-between gap-4">
              <h1 className="text-xl font-semibold">Leonard snyder</h1>
              <p className="text-sm text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
                dolores.
              </p>
              <div className="flex items-center justify-between gap-2 flex-wrap text-xs font-medium">
                    <div className="w-full md:w-1/3 flex items-center gap-2 lg:w-full 2xl:w-1/3">
                        <Image src={'/blood.png'} alt="" width={14} height={14}/>
                        <span>A+</span>
                    </div>
                    <div className="w-full md:w-1/3 flex items-center gap-2 lg:w-full 2xl:w-1/3">
                        <Image src={'/date.png'} alt="" width={14} height={14}/>
                        <span>January 2025</span>
                    </div>
                    <div className="w-full md:w-1/3 flex items-center gap-2 lg:w-full 2xl:w-1/3">
                        <Image src={'/mail.png'} alt="" width={14} height={14}/>
                        <span>user@gmail.com</span>
                    </div>
                    <div className="w-full md:w-1/3 flex items-center gap-2 lg:w-full 2xl:w-1/3">
                        <Image src={'/phone.png'} alt="" width={14} height={14}/>
                        <span>+1 23456 7899</span>
                    </div>
              </div>
            </div>
          </div>
          <div className="flex-1 flex gap-4 justify-between flex-wrap">
                {/* card */}
                <div className="bg-white p-4 rounded-md flex w-full gap-4 md:w-[48%] xl:w-[45%] 2xl:w-[48%]">
                    <Image src={'/singleAttendance.png'} alt="" width={24} height={24} className="w-6 h-6"/>
                    <div className="">
                        <h1 className="text-xl font-semibold">90%</h1>
                        <span className="text-sm text-gray-400">Attendance</span>
                    </div>
                </div>

                <div className="bg-white p-4 rounded-md flex w-full gap-4 md:w-[48%] xl:w-[45%] 2xl:w-[48%]">
                    <Image src={'/singleBranch.png'} alt="" width={24} height={24} className="w-6 h-6"/>
                    <div className="">
                        <h1 className="text-xl font-semibold">6th</h1>
                        <span className="text-sm text-gray-400">Grade</span>
                    </div>
                </div>

                <div className="bg-white p-4 rounded-md flex w-full gap-4 md:w-[48%] xl:w-[45%] 2xl:w-[48%]">
                    <Image src={'/singleLesson.png'} alt="" width={24} height={24} className="w-6 h-6"/>
                    <div className="">
                        <h1 className="text-xl font-semibold">18</h1>
                        <span className="text-sm text-gray-400">Lessons</span>
                    </div>
                </div>

                <div className="bg-white p-4 rounded-md flex w-full gap-4 md:w-[48%] xl:w-[45%] 2xl:w-[48%]">
                    <Image src={'/singleClass.png'} alt="" width={24} height={24} className="w-6 h-6"/>
                    <div className="">
                        <h1 className="text-xl font-semibold">6A</h1>
                        <span className="text-sm text-gray-400">Classes</span>
                    </div>
                </div>

                
          </div>
        </div>

        <div className="mt-4 bg-white rounded-md p-4 h-[800px]">
            <h1>Student&apos;s Schedule</h1>
            <BigCalendar/>
        </div>
      </div>
      {/* right */}
      <div className="w-full xl:w-1/3 flex flex-col gap-4">
        <div className="bg-white p-4 rounded-md">
                <h1 className="text-xl font-semibold">Shortscuts</h1>
                <div className="mt-4 flex gap-4 flex-wrap text-xs text-gray-500">
                    <Link  href={`/list/lessons?classId=${2}`} className="p-3 rounded-md bg-lightSky">Student&apos;s Lessons</Link>
                    <Link href={`/list/teachers?classId=${2}`} className="p-3 rounded-md bg-purpleLight" >Student&apos;s Teachers</Link>
                    <Link href={`/list/results?studentId=${"student2"}`} className="p-3 rounded-md bg-yellowLight">Student&apos;s Results</Link>
                    <Link href={`/list/exams?classId=${2}`} className="p-3 rounded-md bg-lightSky">Student&apos;s exam</Link>
                    <Link href={`/list/assignments?classId=${2}`} className="p-3 rounded-md bg-purpleLight">Student&apos;s Assignments</Link>    
                </div>
        </div>
        <Performance/>
        <Announcement/>
      </div>
    </div>
  );
};

export default SingleStudentPage;
