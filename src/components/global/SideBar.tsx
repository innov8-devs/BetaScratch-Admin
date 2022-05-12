import Link from 'next/link'
import { CogIcon, LogoutIcon } from '@heroicons/react/outline'
import { useRouter } from 'next/router'

import { useState } from 'react'
import { UserDropdown } from './UserDropdown'
import { NotificationDropdown } from './NotificationDropdown'
import { DashNavigation } from './DashNavigation'
import { LogOut } from '../../utils/auth.util'

export const Sidebar = () => {
  const router = useRouter()
  const [collapseShow, setCollapseShow] = useState('hidden')

  const handleLogout = async () => {
    LogOut()
    router.replace('/login')
  }

  return (
    <>
      <nav className="relative z-10 flex flex-wrap items-center justify-between px-6 py-4 bg-white shadow-xl md:fixed md:left-0 md:top-0 md:bottom-0 md:block md:w-64 md:flex-row md:flex-nowrap md:overflow-hidden md:overflow-y-auto">
        <div className="flex flex-wrap items-center justify-between w-full px-0 mx-auto md:min-h-full md:flex-col md:flex-nowrap md:items-stretch">
          {/* Toggler */}
          <button
            className="px-3 py-1 text-xl leading-none text-black bg-transparent border border-transparent border-solid rounded opacity-50 cursor-pointer md:hidden"
            type="button"
            onClick={() => setCollapseShow('bg-white m-2 py-3 px-6')}
          >
            <i className="fas fa-bars"></i>
          </button>
          {/* Brand */}
          <Link href="/">
            <div className="inline-block p-4 px-0 mr-0 text-sm font-bold text-left uppercase text-blueGray-600 whitespace-nowrap md:block md:pb-2">
              BetaScratch
            </div>
          </Link>
          {/* User */}
          <ul className="flex flex-wrap items-center list-none md:hidden">
            <li className="relative inline-block">
              <NotificationDropdown />
            </li>
            <li className="relative inline-block">
              <UserDropdown />
            </li>
          </ul>
          {/* Collapse */}
          <div
            className={
              'absolute top-0 left-0 right-0 z-40 h-auto flex-1 items-center overflow-y-auto overflow-x-hidden rounded shadow md:relative md:mt-4 md:flex md:flex-col md:items-stretch md:opacity-100 md:shadow-none ' +
              collapseShow
            }
          >
            {/* Collapse header */}
            <div className="block pb-4 mb-4 border-b border-solid border-blueGray-200 md:hidden md:min-w-full">
              <div className="flex flex-wrap">
                <div className="w-6/12">
                  <Link href="/">
                    <div className="inline-block p-4 px-0 mr-0 text-sm font-bold text-left uppercase text-blueGray-600 whitespace-nowrap md:block md:pb-2">
                      BetaScratch
                    </div>
                  </Link>
                </div>
                <div className="flex justify-end w-6/12">
                  <button
                    type="button"
                    className="px-3 py-1 text-xl leading-none text-black bg-transparent border border-transparent border-solid rounded opacity-50 cursor-pointer md:hidden"
                    onClick={() => setCollapseShow('hidden')}
                  >
                    <i className="fas fa-times"></i>
                  </button>
                </div>
              </div>
            </div>
            {/* Navigation */}
            <DashNavigation />
            {/* Divider */}
            <hr className="my-4 md:min-w-full" />
            {/* Heading */}
            {/* Navigation */}
            <ul className="flex flex-col list-none md:mb-4 md:min-w-full md:flex-col">
              <li className="items-center">
                <Link href="/">
                  <div className="block py-3 text-xs font-bold uppercase text-blueGray-700 hover:text-blueGray-500">
                    <span className="flex">
                      <CogIcon width={20} />
                      <p className="pl-2">Settings</p>
                    </span>
                  </div>
                </Link>
              </li>

              <li
                className="items-center cursor-pointer"
                onClick={() => handleLogout()}
              >
                <div className="block py-3 text-xs font-bold uppercase text-blueGray-700 hover:text-blueGray-500">
                  <span className="flex">
                    <LogoutIcon width={20} />
                    <p className="pl-2">Logout</p>
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}
