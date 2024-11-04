import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <>
      <div className="background">
        <div className="container">
          <div className="header-wrapper">
            <header>
              <div className="header-image">
                <img src="../../images/cat-god-ranch-logo.png" alt="" />
              </div>
              <h2 className="header-name text-shadow">Cat God Ranch Wiki</h2>
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
        <footer>
          Cat God Ranch is owned by Crazy Potato Game Studio
          <br /> Cat God Ranch wiki is not associated with Cat God Ranch or
          Crazy Potato Game Studio.
        </footer>
      </div>
    </>
  )
}

export default Layout
