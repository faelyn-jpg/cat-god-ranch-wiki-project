import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <>
      <div className="title">
        <h1>Wiki!</h1>
      </div>
      <div className="main">
        <Outlet />
      </div>
      <footer>faelyn-jpg</footer>
    </>
  )
}

export default Layout
