import { useRouter } from 'next/router'
import dayjs from 'dayjs'
import {
  useCheckTotalAmountSpentQuery,
  useFindOneUserQuery,
  useGetUserBalanceQuery,
  useToggleUserConfirmationFromAdminMutation,
} from '../../../generated/graphql'
import { calculateVipStaus } from '../../../helpers/calculateVipStatus'

const UserDetails = () => {
  const router = useRouter()

  const { data: user, refetch } = useFindOneUserQuery({
    variables: {
      userId:
        typeof router.query.userId === 'string' ? router.query.userId : '',
    },
  })

  const { data: userBalance } = useGetUserBalanceQuery({
    variables: {
      userId:
        typeof router.query.userId === 'string' ? router.query.userId : '',
    },
  })

  const { data: totalSpent } = useCheckTotalAmountSpentQuery({
    variables: {
      userId:
        typeof router.query.userId === 'string' ? router.query.userId : '',
    },
  })

  const walletBalace = userBalance?.getUserBalance
  const currUser = user?.findOneUser
  const vipStatus = calculateVipStaus(Number(totalSpent?.checkTotalAmountSpent))

  const [toggleUserConfirmation] = useToggleUserConfirmationFromAdminMutation({
    variables: {
      userId: Number(currUser?.id),
    },
  })

  const handleToggleConfirmation = () => {
    toggleUserConfirmation()
    refetch({
      userId: currUser?.id,
    })
  }

  return (
    <>
      <div className="">
        <div className="container mx-auto my-5 p-5">
          <div className="no-wrap profile-container md:flex ">
            {/* <!-- Left Side --> */}
            <div className="w-full md:mx-2 md:w-3/12">
              {/* <!-- Profile Card --> */}
              <div className="border-t-4 border-green-800 bg-white p-3">
                <div className="image overflow-hidden">
                  <img
                    className="mx-auto h-auto w-full"
                    src="/images/logo_6.png"
                    alt="profile_image"
                  />
                </div>
                <h1 className="my-1 text-xl font-bold leading-8 text-gray-900">
                  {currUser?.firstName} {currUser?.lastName}
                </h1>
                <h3 className="font-lg text-semibold leading-6 text-gray-600">
                  <span className="font-bold">Withdrawable</span>:{' '}
                  {walletBalace?.currency}
                  {walletBalace?.withdrawable}
                </h3>
                <h3 className="font-lg text-semibold leading-6 text-gray-600">
                  <span className="font-bold">Bonus</span>:{' '}
                  {walletBalace?.currency}
                  {walletBalace?.withdrawable}
                </h3>
                <h3 className="font-lg text-semibold leading-6 text-gray-600">
                  <span className="font-bold">VIP Status</span>:{' '}
                  {vipStatus.level}
                </h3>
                <h3 className="font-lg text-semibold leading-6 text-gray-600">
                  <span className="font-bold">Joined</span>:{' '}
                  {dayjs(currUser?.createdAt).format('MMMM DD YYYY')}
                </h3>
                <ul className="mt-3 divide-y rounded bg-gray-100 py-2 px-3 text-gray-600 shadow-sm hover:text-gray-700 hover:shadow">
                  <li className="flex items-center py-3">
                    <span>Status</span>
                    <span className="ml-auto">
                      {currUser?.confirmed ? (
                        <span className="rounded bg-green-800 py-1 px-2 text-sm text-white">
                          Active
                        </span>
                      ) : (
                        <span className="rounded bg-red-500 py-1 px-2 text-sm text-white">
                          Inactive
                        </span>
                      )}
                    </span>
                  </li>
                  <li className="flex items-center py-3">
                    {currUser?.confirmed ? (
                      <button
                        onClick={() => handleToggleConfirmation()}
                        className="text-1xl w-full rounded-md bg-red-600 px-4 py-1 font-medium text-white transition duration-300 hover:bg-gray-700"
                      >
                        Deactivate
                      </button>
                    ) : (
                      <button
                        onClick={() => handleToggleConfirmation()}
                        className="text-1xl w-full rounded-md bg-green-800 px-4 py-1 font-medium text-white transition duration-300 hover:bg-gray-700"
                      >
                        Activate
                      </button>
                    )}
                  </li>
                </ul>
              </div>
              {/* <!-- End of profile card --> */}
              <div className="my-4"></div>
            </div>
            {/* <!-- Right Side --> */}
            <div className="mx-2 h-64 w-full md:w-9/12">
              {/* <!-- Profile tab --> */}
              {/* <!-- About Section --> */}
              <div className="rounded-sm bg-white p-3 shadow-sm">
                <div className="flex items-center space-x-2 font-semibold leading-8 text-gray-900">
                  <span className="text-green-800">
                    <svg
                      className="h-5"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                  </span>
                  <span className="text-base font-bold tracking-wide">
                    About
                  </span>
                </div>
                <div className="about-container text-gray-700">
                  <div className="grid text-sm md:grid-cols-2">
                    <div className="grid grid-cols-2">
                      <div className="px-4 py-2 font-bold">First Name</div>
                      <div className="px-4 py-2">{currUser?.firstName}</div>
                    </div>
                    <div className="grid grid-cols-2">
                      <div className="px-4 py-2 font-bold">Last Name</div>
                      <div className="px-4 py-2">{currUser?.lastName}</div>
                    </div>
                    <div className="grid grid-cols-2">
                      <div className="px-4 py-2 font-bold">Gender</div>
                      <div className="px-4 py-2">{currUser?.gender}</div>
                    </div>
                    <div className="grid grid-cols-2">
                      <div className="px-4 py-2 font-bold">Contact No.</div>
                      <div className="px-4 py-2">{currUser?.mobileNumber}</div>
                    </div>
                    <div className="grid grid-cols-2">
                      <div className="px-4 py-2 font-bold">Country</div>
                      <div className="px-4 py-2">{currUser?.country}</div>
                    </div>
                    <div className="grid grid-cols-2">
                      <div className="px-4 py-2 font-bold">State</div>
                      <div className="px-4 py-2">{currUser?.state}</div>
                    </div>
                    <div className="grid grid-cols-2">
                      <div className="px-4 py-2 font-bold">Email.</div>
                      <div className="ml-n2 px-4 py-2">
                        <a
                          className="text-blue-800"
                          href="mailto:jane@example.com"
                        >
                          {currUser?.email}
                        </a>
                      </div>
                    </div>
                    <div className="grid grid-cols-2">
                      <div className="px-4 py-2 font-bold">Birthday</div>
                      <div className="px-4 py-2">
                        {dayjs(currUser?.dateOfBirth).format('MMMM DD, YYYY')}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- End of about section --> */}

              <div className="my-4"></div>

              {/* <!-- Experience and education --> */}
              <div className="rounded-sm bg-white p-3 shadow-sm">
                <div className="grid grid-cols-2">
                  <div>
                    <div className="mb-3 flex items-center space-x-2 font-semibold leading-8 text-gray-900">
                      <span className="text-base font-bold tracking-wide">
                        Latest Transactions
                      </span>
                    </div>
                    <ul className="list-inside space-y-2">
                      <li>
                        <div className="text-teal-600">Deposited $200</div>
                        <div className="text-xs text-gray-500">March 2020</div>
                      </li>
                      <li>
                        <div className="text-teal-600">Deposited $200</div>
                        <div className="text-xs text-gray-500">March 2020</div>
                      </li>
                      <li>
                        <div className="text-teal-600">Deposited $200</div>
                        <div className="text-xs text-gray-500">March 2020</div>
                      </li>
                      <li>
                        <div className="text-teal-600">Deposited $200</div>
                        <div className="text-xs text-gray-500">March 2020</div>
                      </li>
                      <li>
                        <div className="text-teal-600">Deposited $200</div>
                        <div className="text-xs text-gray-500">March 2020</div>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <div className="mb-3 flex items-center space-x-2 font-semibold leading-8 text-gray-900">
                      <span className="text-base font-bold tracking-wide">
                        Latest Purchses
                      </span>
                    </div>
                    <ul className="list-inside space-y-2">
                      <li>
                        <div className="text-teal-600">
                          Purchased Seasons greetings
                        </div>
                        <div className="text-xs text-gray-500">March 2020</div>
                      </li>
                      <li>
                        <div className="text-teal-600">
                          Purchased Seasons greetings
                        </div>
                        <div className="text-xs text-gray-500">March 2020</div>
                      </li>
                      <li>
                        <div className="text-teal-600">
                          Purchased Seasons greetings
                        </div>
                        <div className="text-xs text-gray-500">March 2020</div>
                      </li>
                      <li>
                        <div className="text-teal-600">
                          Purchased Seasons greetings
                        </div>
                        <div className="text-xs text-gray-500">March 2020</div>
                      </li>
                      <li>
                        <div className="text-teal-600">
                          Purchased Seasons greetings
                        </div>
                        <div className="text-xs text-gray-500">March 2020</div>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* <!-- End of Experience and education grid --> */}
              </div>
              {/* <!-- End of profile tab --> */}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default UserDetails
