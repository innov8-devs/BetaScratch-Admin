import Link from 'next/link' 
import { useState } from 'react'
import {
  CashIcon,
  DesktopComputerIcon,
  UserGroupIcon,
  CreditCardIcon,
  TableIcon,
  CurrencyDollarIcon,
  BriefcaseIcon,
  PuzzleIcon,
  SpeakerphoneIcon,
  UserCircleIcon,
} from '@heroicons/react/outline'

export const DashNavigation = () => {
  return (
    <ul className="flex list-none flex-col md:min-w-full md:flex-col">
      <li className="cursor-pointer items-center">
        <Link href="/">
          <div className="text-blueGray-700 hover:text-blueGray-500 block py-3 text-xs font-bold uppercase">
            <span className="flex items-center space-x-2">
              <DesktopComputerIcon width={20} />
              <p>Dashboard</p>
            </span>
          </div>
        </Link>
      </li>
      <li className="cursor-pointer items-center">
        <Link href="/dashboard/user">
          <div className="text-blueGray-700 hover:text-blueGray-500 block py-3 text-xs font-bold uppercase">
            <span className="flex items-center space-x-2">
              <UserGroupIcon width={20} />
              <p>Users</p>
            </span>
          </div>
        </Link>
      </li>
      <li className="cursor-pointer items-center">
        <Link href="/">
          <div className="text-blueGray-700 hover:text-blueGray-500 block py-3 text-xs font-bold uppercase">
            <span className="flex items-center space-x-2">
              <CreditCardIcon width={20} />
              <p>Purchases</p>
            </span>
          </div>
        </Link>
      </li>
      <li className="cursor-pointer items-center">
        <Link href="/">
          <div className="text-blueGray-700 hover:text-blueGray-500 block py-3 text-xs font-bold uppercase">
            <span className="flex items-center space-x-2">
              <TableIcon width={20} />
              <p>Transactions</p>
            </span>
          </div>
        </Link>
      </li>
      <li className="cursor-pointer items-center">
        <Link href="/">
          <div className="text-blueGray-700 hover:text-blueGray-500 block py-3 text-xs font-bold uppercase">
            <span className="flex items-center space-x-2">
              <CashIcon width={20} />
              <p>Wallet</p>
            </span>
          </div>
        </Link>
      </li>
      <li className="cursor-pointer items-center">
        <Link href="/">
          <div className="text-blueGray-700 hover:text-blueGray-500 block py-3 text-xs font-bold uppercase">
            <span className="flex items-center space-x-2">
              <CurrencyDollarIcon width={20} />
              <p>Cashback</p>
            </span>
          </div>
        </Link>
      </li>
      <li className="cursor-pointer items-center">
        <Link href="/">
          <div className="text-blueGray-700 hover:text-blueGray-500 block py-3 text-xs font-bold uppercase">
            <span className="flex items-center space-x-2">
              <BriefcaseIcon width={20} />
              <p>Withdrawal</p>
            </span>
          </div>
        </Link>
      </li>
      <li className="cursor-pointer items-center">
        <Link href="/dashboard/game">
          <div className="text-blueGray-700 hover:text-blueGray-500 block py-3 text-xs font-bold uppercase">
            <span className="flex items-center space-x-2">
              <PuzzleIcon width={20} />
              <p>Games</p>
            </span>
          </div>
        </Link>
      </li>
      <li className="cursor-pointer items-center">
        <Link href="/">
          <div className="text-blueGray-700 hover:text-blueGray-500 block py-3 text-xs font-bold uppercase">
            <span className="flex items-center space-x-2">
              <SpeakerphoneIcon width={20} />
              <p>Deals</p>
            </span>
          </div>
        </Link>
      </li>
      <li className="cursor-pointer items-center">
        <Link href="/">
          <div className="text-blueGray-700 hover:text-blueGray-500 block py-3 text-xs font-bold uppercase">
            <span className="flex items-center space-x-2">
              <UserCircleIcon width={20} />
              <p>VIP Status</p>
            </span>
          </div>
        </Link>
      </li>
    </ul>
  )
}
