import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <>
      <header className="title">
        <h1>Wiki!</h1>
      </header>
      <main className="main">
        <Outlet />
      </main>
      <footer>faelyn-jpg</footer>
    </>
  )
}

export default Layout
