import { useFindAllUsersQuery } from '../../generated/graphql'
import dayjs from 'dayjs'
import Link from 'next/link'

export const UserInfoCard = () => {
  const { data: users } = useFindAllUsersQuery({
    variables: {
      skip: 0,
      take: 5,
    },
  })
  return (
    <div className="w-full px-4 mb-12 xl:mb-0 xl:w-7/12 min-w-full">
      <div className="relative flex flex-col w-full min-w-0 mb-6 break-words bg-gray-100 rounded shadow-lg">
        <div className="px-4 py-3 mb-0 border-0 rounded-t bg-green-300">
          <div className="flex flex-wrap items-center">
            <div className="relative flex-1 flex-grow w-full max-w-full px-4">
              <h3 className="text-base font-semibold text-blueGray-700">
                Users
              </h3>
            </div>
            <div className="relative flex-1 flex-grow w-full max-w-full px-4 text-right">
              <Link href="/dashboard/user">
                <button
                  className="px-3 py-1 mb-1 mr-1 text-xs font-bold text-white uppercase bg-indigo-500 rounded outline-none focus:outline-none active:bg-indigo-600"
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
          <table className="items-center w-full bg-transparent border-collapse">
            <thead>
              <tr>
                <th className="px-6 py-3 text-base font-bold text-left uppercase align-middle border border-l-0 border-r-0 border-solid bg-blueGray-50 text-blueGray-500 border-blueGray-100 whitespace-nowrap">
                  Name
                </th>
                <th className="px-6 py-3 text-base font-bold text-left uppercase align-middle border border-l-0 border-r-0 border-solid bg-blueGray-50 text-blueGray-500 border-blueGray-100 whitespace-nowrap">
                  Email
                </th>
                <th className="px-6 py-3 text-base font-bold text-left uppercase align-middle border border-l-0 border-r-0 border-solid bg-blueGray-50 text-blueGray-500 border-blueGray-100 whitespace-nowrap">
                  Balance
                </th>
                <th className="px-6 py-3 text-base font-bold text-left uppercase align-middle border border-l-0 border-r-0 border-solid bg-blueGray-50 text-blueGray-500 border-blueGray-100 whitespace-nowrap">
                  Joined
                </th>
              </tr>
            </thead>
            <tbody>
              {users?.findAllUsers?.map((user) => (
                <tr>
                  <th className="p-4 px-6 text-xs text-left align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap">
                    {user.firstName} {user.lastName}
                  </th>
                  <td className="p-4 px-6 text-xs align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap">
                    {user.email}
                  </td>
                  <td className="p-4 px-6 text-xs align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap">
                    {user.wallet?.currency}
                    {user.wallet?.withdrawable}
                  </td>
                  <td className="p-4 px-6 text-xs align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap">
                    {dayjs(user.createdAt).format('MMMM DD YYYY')}
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
