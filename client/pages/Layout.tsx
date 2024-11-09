import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'

function Layout() {
  return (
    <>
      <div className="background">
        <div className="container">
          <Header />
          <main className="main">
            <div>
              <Outlet />
            </div>
          </main>
        </div>
        <Footer />
      </div>
    </>
  )
}

export default Layout
