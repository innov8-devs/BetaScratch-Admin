import dayjs from 'dayjs'
import {
  ArrowCircleLeftIcon,
  ArrowCircleRightIcon,
} from '@heroicons/react/outline'
import { useState } from 'react'
import Link from 'next/link'
import {
  useFindAllGamesPaginatedQuery,
  useTotalGameCountQuery,
} from '../../generated/graphql'

export const User = () => {
  const [pagination, setPagination] = useState({ skip: 0, take: 10 })

  const { data: games, refetch } = useFindAllGamesPaginatedQuery({
    variables: {
      skip: pagination.skip,
      take: pagination.take,
    },
  })

  const { data: gameTotal } = useTotalGameCountQuery()

  const handleNext = () => {
    let take = pagination.take + 10
    let skip = pagination.take
    refetch({
      skip,
      take,
    })
    setPagination({
      skip,
      take,
    })
  }

  const handlePrev = () => {
    let take = pagination.take - 10
    let skip = pagination.skip - 10
    refetch({
      skip,
      take,
    })
    setPagination({
      skip,
      take,
    })
  }

  return (
    <div className="py-4">
      <div className="mb-12 w-full px-4 xl:mb-0 xl:w-full">
        <div className="relative mb-6 flex w-full min-w-full flex-col break-words rounded bg-gray-100 shadow-lg">
          <div className="mb-0 rounded-t border-0 px-4 py-3 bg-orange-300">
            <div className="flex flex-wrap items-center">
              <div className="relative w-full max-w-full px-4">
                <div className="flex w-full justify-between">
                  <h3 className="text-blueGray-700 text-base font-semibold">
                    Games
                  </h3>
                  <Link href={'/dashboard/game/new'}>
                    <button className="text-1xl rounded-md bg-indigo-600 px-4 py-1 font-medium text-white transition duration-300 hover:bg-gray-700">
                      Add
                    </button>
                  </Link>
                </div>
              </div>
              <div className="relative w-full max-w-full flex-1 flex-grow px-4 text-right">
                <button className="mr-1 mb-1 rounded px-3 py-1 text-xs font-bold uppercase text-black outline-none focus:outline-none">
                  <div className="relative flex w-full max-w-full flex-1 flex-grow space-x-4 px-4 text-right">
                    <span>
                      {gameTotal && pagination.skip <= 0 ? null : (
                        <ArrowCircleLeftIcon
                          width={25}
                          onClick={() => handlePrev()}
                        />
                      )}
                    </span>
                    <span>
                      {gameTotal &&
                      pagination.take >=
                        gameTotal.totalGameCount._count ? null : (
                        <ArrowCircleRightIcon
                          width={25}
                          onClick={() => handleNext()}
                        />
                      )}
                    </span>
                  </div>
                </button>
              </div>
            </div>
          </div>
          <div className="block w-full overflow-x-auto">
            {/* Projects table */}
            <table className="w-full border-collapse items-center bg-transparent">
              <thead>
                <tr>
                  <th className="bg-blueGray-50 text-blueGray-500 border-blueGray-100 whitespace-nowrap border border-l-0 border-r-0 border-solid px-6 py-3 text-left align-middle text-xs font-semibold uppercase">
                    Name
                  </th>
                  <th className="bg-blueGray-50 text-blueGray-500 border-blueGray-100 whitespace-nowrap border border-l-0 border-r-0 border-solid px-6 py-3 text-left align-middle text-xs font-semibold uppercase">
                    Category
                  </th>
                  <th className="bg-blueGray-50 text-blueGray-500 border-blueGray-100 whitespace-nowrap border border-l-0 border-r-0 border-solid px-6 py-3 text-left align-middle text-xs font-semibold uppercase">
                    GameId
                  </th>
                  {/* <th className="bg-blueGray-50 text-blueGray-500 border-blueGray-100 whitespace-nowrap border border-l-0 border-r-0 border-solid px-6 py-3 text-left align-middle text-xs font-semibold uppercase">
                    Bonus
                  </th> */}
                  <th className="bg-blueGray-50 text-blueGray-500 border-blueGray-100 whitespace-nowrap border border-l-0 border-r-0 border-solid px-6 py-3 text-left align-middle text-xs font-semibold uppercase">
                    Availability
                  </th>
                  {/* <th className="bg-blueGray-50 text-blueGray-500 border-blueGray-100 whitespace-nowrap border border-l-0 border-r-0 border-solid px-6 py-3 text-left align-middle text-xs font-semibold uppercase">
                    Price
                  </th> */}
                  <th className="bg-blueGray-50 text-blueGray-500 border-blueGray-100 whitespace-nowrap border border-l-0 border-r-0 border-solid px-6 py-3 text-left align-middle text-xs font-semibold uppercase">
                    Created
                  </th>
                  <th className="bg-blueGray-50 text-blueGray-500 border-blueGray-100 whitespace-nowrap border border-l-0 border-r-0 border-solid px-6 py-3 text-left align-middle text-xs font-semibold uppercase"></th>
                </tr>
              </thead>
              <tbody>
                {games?.findAllGamesPaginated?.map((game) => (
                  <tr key={game.id}>
                    <th className="whitespace-nowrap border-t-0 border-l-0 border-r-0 p-4 px-6 text-left align-middle text-xs">
                      {game.name}
                    </th>
                    <td className="whitespace-nowrap border-t-0 border-l-0 border-r-0 p-4 px-6 align-middle text-xs">
                      {game.category}
                    </td>
                    <td className="whitespace-nowrap border-t-0 border-l-0 border-r-0 p-4 px-6 align-middle text-xs">
                      {game.gameId}
                    </td>
                    <td className="whitespace-nowrap border-t-0 border-l-0 border-r-0 p-4 px-6 align-middle text-xs">
                      {game.availability}
                    </td>
                    {/* <td className="whitespace-nowrap border-t-0 border-l-0 border-r-0 p-4 px-6 align-middle text-xs">
                      {game.description.substring(2)}...
                    </td> */}
                    <td className="whitespace-nowrap border-t-0 border-l-0 border-r-0 p-4 px-6 align-middle text-xs">
                      {dayjs(game.createdAt).format('MMMM DD YYYY')}
                    </td>
                    <td className="whitespace-nowrap border-t-0 border-l-0 border-r-0 p-4 px-6 align-middle text-xs">
                      <Link href={`/dashboard/game/${game.id}`}>
                        <button className="text-1xl rounded-md bg-indigo-600 px-4 py-2 font-medium text-white transition duration-300 hover:bg-gray-700">
                          View
                        </button>
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default User
