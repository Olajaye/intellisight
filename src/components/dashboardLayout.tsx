'use client'; 
import { useState } from 'react';
import Link from 'next/link';
import { ThemeToggle } from './theme-toggle';
import { TbHomeFilled } from "react-icons/tb";
import { DiGoogleAnalytics } from "react-icons/di";
import { RiContactsLine } from "react-icons/ri";
// import { CiSettings } from "react-icons/ci";
import { IoMdMenu } from "react-icons/io";


export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="flex min-h-screen dark:bg-white">
      {/* Sidebar */}
      <div className={`hidden md:block w-64 text-white dark:text-black  p-4 transition-all duration-300 border-e border-white dark:border-black ${
          !isSidebarOpen ? '-ml-64' : ''
        }`}
      >
        <div className="text-2xl font-bold mb-6 mt-2 dark:text-yellow light:text-black border dark:border-yellow rounded-full p-4">INTELLISIGHT</div>
        <nav>
          <ul className="space-y-2">
            <li className='flex items-center space-x-2 hover:bg-yellow hover:text-black rounded px-2'>
              <TbHomeFilled className='w-7 h-7' />
              <Link
                href="/dashboard"
                className="block p-2 rounded"
              >
                Home
              </Link>
            </li>
            <li className='flex items-center space-x-2 hover:bg-yellow hover:text-black rounded px-2'>
              <DiGoogleAnalytics className='w-7 h-7' />
              <Link
                href="/dashboard/analytics"
                className="block p-2 rounded "
              >
                Analytics
              </Link>
            </li>
            
            <li className='flex items-center space-x-2 hover:bg-yellow hover:text-black rounded px-2'>
              <RiContactsLine className='w-7 h-7'  />
              <Link
                href="/dashboard/profile"
                className="block p-2 rounded"
              >
                Profile
              </Link>
            </li>
            {/* <li className='flex items-center space-x-2 hover:bg-yellow hover:text-black rounded px-2'>
              <CiSettings className='w-7 h-7' />
              <Link
                href="/dashboard/settings"
                className="block p-2 rounded"
              >
                Settings
              </Link>
            </li> */}
          </ul>
        </nav>
      </div>

      {/* Main Content */}
      <main className="flex-1 dark:bg-white">
        <div className="dark:bg-white h-full">
          <nav className='flex justify-between dark:bg-white p-4 border-b-[1px] border-white dark:border-black'>
            <button
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="p-2 bg-yellow text-white rounded border border-white hidden md:block"
            >
              {isSidebarOpen ? 'Close Sidebar' : 'Open Sidebar'}
            </button>

            <div className='flex justify-center items-center  md:hidden'>
              <IoMdMenu className='w-7 h-7' />
            </div>

            <div>
              <ThemeToggle />
            </div>
          </nav>
          <div className='dark:bg-black'>
            {children}
          </div>
        </div>
      </main>
    </div>
  );
}