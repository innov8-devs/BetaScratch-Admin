import type { NextPage } from 'next'
import { UserInfoCard } from '../components/custom/UserInfoCard'
import { WithdrawalInfoCard } from '../components/custom/WithdrawalInfoCard'
import { Header } from '../components/global/Header'
import { Navbar } from '../components/global/Nabar'
import { GameInfoCard } from '../components/custom/GameInfoCard'

const Home: NextPage = () => {
  return (
    <>
      <Navbar />
      {/* Header */}
      <Header />
      <div className="dashboard-margin">
        {/* <div className="flex flex-wrap">
            <LineChart />
            <BarChart />
          </div> */}
        <div className="flex flex-wrap items-center justify-center margin-top">
          <UserInfoCard />
          <WithdrawalInfoCard />
          <GameInfoCard />
        </div>
        <footer className="block py-4">
          <div className="container px-4 mx-auto">
            <hr className="mb-4 border-b-1 border-blueGray-200" />
            <div className="flex flex-wrap items-center justify-center md:justify-between">
              <div className="w-full px-4 md:w-4/12">
                <div className="py-1 text-sm font-semibold text-blueGray-500">
                  Copyright © {new Date().getFullYear()}{' '}
                  <a
                    href="/"
                    className="py-1 text-sm font-semibold text-blueGray-500 hover:text-blueGray-700"
                  >
                    BetaScratch
                  </a>
                </div>
              </div>
              <div className="w-full px-4 md:w-8/12">
                <ul className="flex flex-wrap justify-center list-none md:justify-end">
                  <li>
                    <a
                      href="https://www.creative-tim.com"
                      className="block px-3 py-1 text-sm font-semibold text-blueGray-600 hover:text-blueGray-800"
                    >
                      BetaScratch
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.creative-tim.com/presentation"
                      className="block px-3 py-1 text-sm font-semibold text-blueGray-600 hover:text-blueGray-800"
                    >
                      About Us
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}

export default Home
