export const HeaderStatCards = () => {
  return (
    <div className="flex flex-wrap">
      <div className="w-full px-4 lg:w-6/12 xl:w-3/12">
        <div className="relative mb-6 flex min-w-0 flex-col break-words rounded bg-white shadow-lg xl:mb-0">
          <div className="flex-auto p-4">
            <div className="flex flex-wrap">
              <div className="relative w-full max-w-full flex-1 flex-grow pr-4">
                <h5 className="text-blueGray-400 text-xs font-bold uppercase">
                  Products Sold
                </h5>
                <span className="text-blueGray-700 text-xl font-semibold">
                  80,213
                </span>
              </div>
              <div className="relative w-auto flex-initial pl-4">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-red-500 p-3 text-center text-white shadow-lg">
                  <i className="far fa-chart-bar"></i>
                </div>
              </div>
            </div>
            <p className="text-blueGray-400 mt-4 text-sm">
              <span className="mr-2 text-emerald-500">
                <i className="fas fa-arrow-up"></i> 3.48%
              </span>
              <span className="whitespace-nowrap">Since last month</span>
            </p>
          </div>
        </div>
      </div>
      <div className="w-full px-4 lg:w-6/12 xl:w-3/12">
        <div className="relative mb-6 flex min-w-0 flex-col break-words rounded bg-white shadow-lg xl:mb-0">
          <div className="flex-auto p-4">
            <div className="flex flex-wrap">
              <div className="relative w-full max-w-full flex-1 flex-grow pr-4">
                <h5 className="text-blueGray-400 text-xs font-bold uppercase">
                  Total Balance
                </h5>
                <span className="text-blueGray-700 text-xl font-semibold">
                  $5,287
                </span>
              </div>
              <div className="relative w-auto flex-initial pl-4">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-orange-500 p-3 text-center text-white shadow-lg">
                  <i className="fas fa-chart-pie"></i>
                </div>
              </div>
            </div>
            <p className="text-blueGray-400 mt-4 text-sm">
              <span className="mr-2 text-red-500">
                <i className="fas fa-arrow-down"></i> 3.48%
              </span>
              <span className="whitespace-nowrap">Since last week</span>
            </p>
          </div>
        </div>
      </div>
      <div className="w-full px-4 lg:w-6/12 xl:w-3/12">
        <div className="relative mb-6 flex min-w-0 flex-col break-words rounded bg-white shadow-lg xl:mb-0">
          <div className="flex-auto p-4">
            <div className="flex flex-wrap">
              <div className="relative w-full max-w-full flex-1 flex-grow pr-4">
                <h5 className="text-blueGray-400 text-xs font-bold uppercase">
                  Sale Profit
                </h5>
                <span className="text-blueGray-700 text-xl font-semibold">
                  $21,345
                </span>
              </div>
              <div className="relative w-auto flex-initial pl-4">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-pink-500 p-3 text-center text-white shadow-lg">
                  <i className="fas fa-users"></i>
                </div>
              </div>
            </div>
            <p className="text-blueGray-400 mt-4 text-sm">
              <span className="mr-2 text-orange-500">
                <i className="fas fa-arrow-down"></i> 1.10%
              </span>
              <span className="whitespace-nowrap">Since yesterday</span>
            </p>
          </div>
        </div>
      </div>
      <div className="w-full px-4 lg:w-6/12 xl:w-3/12">
        <div className="relative mb-6 flex min-w-0 flex-col break-words rounded bg-white shadow-lg xl:mb-0">
          <div className="flex-auto p-4">
            <div className="flex flex-wrap">
              <div className="relative w-full max-w-full flex-1 flex-grow pr-4">
                <h5 className="text-blueGray-400 text-xs font-bold uppercase">
                  Total Expenses
                </h5>
                <span className="text-blueGray-700 text-xl font-semibold">
                  $2,345
                </span>
              </div>
              <div className="relative w-auto flex-initial pl-4">
                <div className="bg-lightBlue-500 inline-flex h-12 w-12 items-center justify-center rounded-full p-3 text-center text-white shadow-lg">
                  <i className="fas fa-percent"></i>
                </div>
              </div>
            </div>
            <p className="text-blueGray-400 mt-4 text-sm">
              <span className="mr-2 text-emerald-500">
                <i className="fas fa-arrow-up"></i> 12%
              </span>
              <span className="whitespace-nowrap">Since last month</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
