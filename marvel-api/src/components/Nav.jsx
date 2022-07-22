import { NavLink } from "react-router-dom"

const navItems = [
  { label: 'Characters', path: '/characters' },
  { label: 'Comics', path: '/comics' }
]

const NavItem = ({ children, path }) => {
  return (
    <li className="navigation__list-item">
      <NavLink className="navigation__link" to={path}>
        {children}
      </NavLink>
    </li>
  )
}

const Navigation = () => {
  return (
    <nav className="navigation">
      <ul className="navigation__list">
        {navItems.map((item) => <NavItem key={item.label} path={item.path}>{item.label}</NavItem>)}
      </ul>
    </nav>
  )
}

export default Navigation;