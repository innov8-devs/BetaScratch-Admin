import Login from '../../pages/login'
import { fetchStorageItem } from '../../utils/storage.util'
import { Sidebar } from './SideBar'

export const Layout: React.FC<{}> = ({ children }) => {
  const currUser = fetchStorageItem('user')

  return (
    // <div className="w-full">
    //   <Sidebar />
    //   <div className="relative bg-blueGray-100 md:ml-64">{children}</div>
    // </div>

    <div className="w-full">
      {!currUser ? (
        <Login />
      ) : (
        <>
          <Sidebar />
          <div className="relative bg-blueGray-100 md:ml-64">{children}</div>
        </>
      )}
    </div>
  )
}
