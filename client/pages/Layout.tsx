import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Article from './Article'

function Layout() {
  return (
    <>
      <div className="background">
        <div className="container">
          <Header />
          <main className="main">
            <div>
              <Article />
            </div>
          </main>
        </div>
        <Footer />
      </div>
    </>
  )
}

export default Layout
