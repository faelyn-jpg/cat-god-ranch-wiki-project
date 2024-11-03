import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <>
      <div className="background"></div>
      <div className="container">
        <div className="header-wrapper">
          <header>
            <div className="header-image">Header image goes here</div>
            <div className="header-name">Cat God Ranch Wiki</div>
            <nav>
              <ul className="header-nav">
                <li>One</li>
                <li>Two</li>
                <li>Three</li>
              </ul>
            </nav>
          </header>
        </div>
        <main className="main">
          <div>
            <Outlet />
          </div>
        </main>
      </div>
      <footer>faelyn-jpg</footer>
    </>
  )
}

export default Layout
