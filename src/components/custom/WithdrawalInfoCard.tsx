import {
  useGetAllWithdrawalRequestsQuery,
  useDeductUserBalanceMutation,
} from '../../generated/graphql'

export const WithdrawalInfoCard = () => {
  const { data: requests, refetch } = useGetAllWithdrawalRequestsQuery({
    variables: {
      skip: 0,
      take: 20,
    },
  })

  const [deductUserBalance] = useDeductUserBalanceMutation()

  const handleDeduct = async (amount: string, userId: number) => {
    await deductUserBalance({
      variables: {
        userId,
        amount,
        currency: 'NGN',
        wallet: 'ACCOUNT',
      },
    })
    refetch({
      skip: 0,
      take: 20,
    })
  }

  return (
    <div className="w-full min-w-full px-4 xl:w-5/12">
      <div className="relative mb-6 flex w-full min-w-full flex-col break-words rounded bg-gray-100 shadow-lg">
        <div className="mb-0 rounded-t border-0 bg-red-300 px-4 py-3">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full max-w-full flex-1 flex-grow px-4">
              <h3 className="text-blueGray-700 text-base font-semibold">
                Withdrawals
              </h3>
            </div>
            <div className="relative w-full max-w-full flex-1 flex-grow px-4 text-right">
              <button
                className="mb-1 mr-1 rounded bg-indigo-500 px-3 py-1 text-xs font-bold uppercase text-white outline-none focus:outline-none active:bg-indigo-600"
                type="button"
                style={{ transition: 'all .15s ease' }}
              >
                See all
              </button>
            </div>
          </div>
        </div>
        <div className="block w-full overflow-x-auto">
          {/* Projects table */}
          <table className="w-full border-collapse items-center bg-transparent">
            <thead className="thead-light">
              <tr>
                <th className="bg-blueGray-50 text-blueGray-500 border-blueGray-100 whitespace-nowrap border border-l-0 border-r-0 border-solid px-6 py-3 text-left align-middle text-base font-bold uppercase">
                  Username
                </th>
                <th className="bg-blueGray-50 text-blueGray-500 border-blueGray-100 whitespace-nowrap border border-l-0 border-r-0 border-solid px-6 py-3 text-left align-middle text-base font-bold uppercase">
                  Amount
                </th>
                <th className="bg-blueGray-50 text-blueGray-500 border-blueGray-100 whitespace-nowrap border border-l-0 border-r-0 border-solid px-6 py-3 text-left align-middle text-base font-bold uppercase">
                  Bank
                </th>
                <th className="bg-blueGray-50 text-blueGray-500 border-blueGray-100 whitespace-nowrap border border-l-0 border-r-0 border-solid px-6 py-3 text-left align-middle text-base font-bold uppercase">
                  Account Name
                </th>
                <th className="bg-blueGray-50 text-blueGray-500 border-blueGray-100 whitespace-nowrap border border-l-0 border-r-0 border-solid px-6 py-3 text-left align-middle text-base font-bold uppercase">
                  Account Number
                </th>
                <th className="bg-blueGray-50 text-blueGray-500 border-blueGray-100 whitespace-nowrap border border-l-0 border-r-0 border-solid px-6 py-3 text-left align-middle text-base font-bold uppercase"></th>
                {/* <th
                          className="px-6 py-3 text-xs font-semibold text-left uppercase align-middle border border-l-0 border-r-0 border-solid bg-blueGray-50 text-blueGray-500 border-blueGray-100 whitespace-nowrap"
                          style={{ minWidth: "140px" }}
                        ></th> */}
              </tr>
            </thead>
            <tbody>
              {requests?.getAllWithdrawalRequests.map((requests) => (
                <tr>
                  <th className="whitespace-nowrap border-t-0 border-l-0 border-r-0 p-4 px-6 text-left align-middle text-xs">
                    {requests.accountName}
                  </th>
                  <td className="whitespace-nowrap border-t-0 border-l-0 border-r-0 p-4 px-6 align-middle text-xs">
                    NGN{requests.amount}
                  </td>
                  <td className="whitespace-nowrap border-t-0 border-l-0 border-r-0 p-4 px-6 align-middle text-xs">
                    {requests.bank}
                  </td>
                  <td className="whitespace-nowrap border-t-0 border-l-0 border-r-0 p-4 px-6 align-middle text-xs">
                    {requests.accountName}
                  </td>
                  <td className="whitespace-nowrap border-t-0 border-l-0 border-r-0 p-4 px-6 align-middle text-xs">
                    {requests.accountNumber}
                  </td>
                  <td className="whitespace-nowrap border-t-0 border-l-0 border-r-0 p-4 px-6 align-middle text-xs">
                    {/* <Link href={`/dashboard/user/${user.id}`}> */}
                    <button
                      onClick={() =>
                        handleDeduct(requests.amount, requests.userId as number)
                      }
                      className="text-1xl rounded-md bg-indigo-600 px-4 py-2 font-medium text-white transition duration-300 hover:bg-gray-700"
                    >
                      Approve
                    </button>
                    {/* </Link> */}
                  </td>
                  {/* <td className="p-4 px-6 text-xs align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap">
                          <div className="flex items-center">
                            <span className="mr-2">60%</span>
                            <div className="relative w-full">
                              <div className="flex h-2 overflow-hidden text-xs bg-red-200 rounded">
                                <div
                                  style={{ width: "60%" }}
                                  className="flex flex-col justify-center text-center text-white bg-red-500 shadow-none whitespace-nowrap"
                                ></div>
                              </div>
                            </div>
                          </div>
                        </td> */}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
