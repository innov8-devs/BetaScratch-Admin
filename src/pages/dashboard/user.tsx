import {
  useFindAllUsersQuery,
  useTotalUserCountQuery,
} from '../../generated/graphql'
import dayjs from 'dayjs'
import {
  ArrowCircleLeftIcon,
  ArrowCircleRightIcon,
} from '@heroicons/react/outline'
import { useState } from 'react'
import Link from 'next/link'

export const User = () => {
  const [pagination, setPagination] = useState({ skip: 0, take: 10 })

  const { data: users, refetch } = useFindAllUsersQuery({
    variables: {
      skip: pagination.skip,
      take: pagination.take,
    },
  })

  const { data: userTotal } = useTotalUserCountQuery()

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
      <div className="mb-12 w-full min-w-full px-4 xl:mb-0 xl:w-full">
        <div className="relative mb-6 flex w-full min-w-full flex-col break-words rounded bg-gray-100 shadow-lg">
          <div className="mb-0 rounded-t border-0 px-4 py-3 bg-green-300">
            <div className="flex flex-wrap items-center">
              <div className="relative w-full max-w-full flex-1 flex-grow px-4">
                <h3 className="text-blueGray-700 text-base font-semibold">
                  Users
                </h3>
              </div>
              <div className="relative w-full max-w-full flex-1 flex-grow px-4 text-right">
                <button className="mr-1 mb-1 rounded px-3 py-1 text-xs font-bold uppercase text-black outline-none focus:outline-none">
                  <div className="relative flex w-full max-w-full flex-1 flex-grow space-x-4 px-4 text-right">
                    <span>
                      {userTotal && pagination.skip <= 0 ? null : (
                        <ArrowCircleLeftIcon
                          width={25}
                          onClick={() => handlePrev()}
                        />
                      )}
                    </span>
                    <span>
                      {userTotal &&
                      pagination.take >=
                        userTotal.totalUserCount._count ? null : (
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
                  <th className="bg-blueGray-50 text-blueGray-500 border-blueGray-100 whitespace-nowrap border border-l-0 border-r-0 border-solid px-6 py-3 text-left align-middle text-xs font-bold uppercase">
                    Name
                  </th>
                  <th className="bg-blueGray-50 text-blueGray-500 border-blueGray-100 whitespace-nowrap border border-l-0 border-r-0 border-solid px-6 py-3 text-left align-middle text-xs font-semibold uppercase">
                    Email
                  </th>
                  <th className="bg-blueGray-50 text-blueGray-500 border-blueGray-100 whitespace-nowrap border border-l-0 border-r-0 border-solid px-6 py-3 text-left align-middle text-xs font-semibold uppercase">
                    Withdrawable
                  </th>
                  <th className="bg-blueGray-50 text-blueGray-500 border-blueGray-100 whitespace-nowrap border border-l-0 border-r-0 border-solid px-6 py-3 text-left align-middle text-xs font-semibold uppercase">
                    Bonus
                  </th>
                  <th className="bg-blueGray-50 text-blueGray-500 border-blueGray-100 whitespace-nowrap border border-l-0 border-r-0 border-solid px-6 py-3 text-left align-middle text-xs font-semibold uppercase">
                    Gender
                  </th>
                  <th className="bg-blueGray-50 text-blueGray-500 border-blueGray-100 whitespace-nowrap border border-l-0 border-r-0 border-solid px-6 py-3 text-left align-middle text-xs font-semibold uppercase">
                    Status
                  </th>
                  <th className="bg-blueGray-50 text-blueGray-500 border-blueGray-100 whitespace-nowrap border border-l-0 border-r-0 border-solid px-6 py-3 text-left align-middle text-xs font-semibold uppercase">
                    Joined
                  </th>
                  <th className="bg-blueGray-50 text-blueGray-500 border-blueGray-100 whitespace-nowrap border border-l-0 border-r-0 border-solid px-6 py-3 text-left align-middle text-xs font-semibold uppercase"></th>
                </tr>
              </thead>
              <tbody>
                {users?.findAllUsers?.map((user) => (
                  <tr key={user.id}>
                    <th className="whitespace-nowrap border-t-0 border-l-0 border-r-0 p-4 px-6 text-left align-middle text-xs">
                      {user.firstName} {user.lastName}
                    </th>
                    <td className="whitespace-nowrap border-t-0 border-l-0 border-r-0 p-4 px-6 align-middle text-xs">
                      {user.email}
                    </td>
                    <td className="whitespace-nowrap border-t-0 border-l-0 border-r-0 p-4 px-6 align-middle text-xs">
                      {user.wallet?.currency}
                      {user.wallet?.withdrawable}
                    </td>
                    <td className="whitespace-nowrap border-t-0 border-l-0 border-r-0 p-4 px-6 align-middle text-xs">
                      {user.wallet?.currency}
                      {user.wallet?.bonus}
                    </td>
                    <td className="whitespace-nowrap border-t-0 border-l-0 border-r-0 p-4 px-6 align-middle text-xs">
                      {user.gender}
                    </td>
                    <td className="whitespace-nowrap border-t-0 border-l-0 border-r-0 p-4 px-6 align-middle text-xs">
                      {user.confirmed ? (
                        <span className="inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800">
                          Active
                        </span>
                      ) : (
                        <span className="inline-flex rounded-full bg-red-100 px-2 text-xs font-semibold leading-5 text-red-800">
                          Inactive
                        </span>
                      )}
                    </td>
                    <td className="whitespace-nowrap border-t-0 border-l-0 border-r-0 p-4 px-6 align-middle text-xs">
                      {dayjs(user.createdAt).format('MMMM DD YYYY')}
                    </td>
                    <td className="whitespace-nowrap border-t-0 border-l-0 border-r-0 p-4 px-6 align-middle text-xs">
                      <Link href={`/dashboard/user/${user.id}`}>
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
