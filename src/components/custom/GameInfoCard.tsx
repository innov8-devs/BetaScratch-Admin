import { useFindAllGamesPaginatedQuery } from '../../generated/graphql'
import Link from 'next/link'

export const GameInfoCard = () => {
  const { data: games } = useFindAllGamesPaginatedQuery({
    variables: {
      skip: 0,
      take: 5,
    },
  })
  return (
    <div className="mb-12 w-full px-4 xl:mb-0 xl:w-7/12 min-w-full">
      <div className="relative mb-6 flex w-full min-w-full flex-col break-words rounded bg-gray-100 shadow-lg">
        <div className="mb-0 rounded-t border-0 px-4 py-3 bg-orange-300">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full max-w-full flex-1 flex-grow px-4">
              <h3 className="text-blueGray-700 text-base font-semibold">
                Games
              </h3>
            </div>
            <div className="relative w-full max-w-full flex-1 flex-grow px-4 text-right">
              <Link href="/dashboard/game">
                <button
                  className="mb-1 mr-1 rounded bg-indigo-500 px-3 py-1 text-xs font-bold uppercase text-white outline-none focus:outline-none active:bg-indigo-600"
                  type="button"
                  style={{ transition: 'all .15s ease' }}
                >
                  See all
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="block w-full overflow-x-auto">
          {/* Projects table */}
          <table className="w-full border-collapse items-center bg-transparent">
            <thead>
              <tr>
                <th className="bg-blueGray-50 text-blueGray-500 border-blueGray-100 whitespace-nowrap border border-l-0 border-r-0 border-solid px-6 py-3 text-left align-middle text-bold font-bold uppercase">
                  Name
                </th>
                <th className="bg-blueGray-50 text-blueGray-500 border-blueGray-100 whitespace-nowrap border border-l-0 border-r-0 border-solid px-6 py-3 text-left align-middle text-bold font-bold uppercase">
                  Game Id
                </th>
                <th className="bg-blueGray-50 text-blueGray-500 border-blueGray-100 whitespace-nowrap border border-l-0 border-r-0 border-solid px-6 py-3 text-left align-middle text-bold font-bold uppercase">
                  Category
                </th>
                <th className="bg-blueGray-50 text-blueGray-500 border-blueGray-100 whitespace-nowrap border border-l-0 border-r-0 border-solid px-6 py-3 text-left align-middle text-bold font-bold uppercase">
                  Availability
                </th>
              </tr>
            </thead>
            <tbody>
              {games?.findAllGamesPaginated?.map((game) => (
                <tr>
                  <th className="whitespace-nowrap border-t-0 border-l-0 border-r-0 p-4 px-6 text-left align-middle text-xs">
                    {game.name}
                  </th>
                  <td className="whitespace-nowrap border-t-0 border-l-0 border-r-0 p-4 px-6 align-middle text-xs">
                    {game.gameId}
                  </td>
                  <td className="whitespace-nowrap border-t-0 border-l-0 border-r-0 p-4 px-6 align-middle text-xs">
                    {game.category}
                  </td>
                  <td className="whitespace-nowrap border-t-0 border-l-0 border-r-0 p-4 px-6 align-middle text-xs">
                    {game.availability}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
