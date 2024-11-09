import dropdown from '../../assets/sprites.svg?url'

function Header() {
  return (
    <div className="header-wrapper">
      <header>
        <div className="header-image">
          <img src="../../images/cat-god-ranch-logo.png" alt="" />
        </div>
        <h2 className="header-name text-shadow">Cat God Ranch Wiki</h2>
        <nav>
          <ul className="header-nav">
            <li className="hover">
              One
              <svg className="dropdown dropdown-toggle">
                <use xlinkHref={`${dropdown}#dropdown`} />
              </svg>
            </li>
            <li className="hover">
              Two
              <svg className="dropdown dropdown-toggle">
                <use xlinkHref={`${dropdown}#dropdown`} />
              </svg>
            </li>{' '}
            <li className="hover">
              Three
              <svg className="dropdown dropdown-toggle">
                <use xlinkHref={`${dropdown}#dropdown`} />
              </svg>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  )
}

export default Header
