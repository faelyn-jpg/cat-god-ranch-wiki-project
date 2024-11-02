import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <>
      <header className="title">
        <h1>Cat God Ranch Wiki</h1>
      </header>
      <main className="main">
        <Outlet />
      </main>
      <footer>faelyn-jpg</footer>
    </>
  )
}

export default Layout
