const navItems = [
  { label: 'Characters', path: '' },
  { label: 'Comics', path: '' }
]

const NavItem = ({ children, path }) => {
  return (
    <li className="navigation__list-item">
      <a className="navigation__link" href={path}>
        {children}
      </a>
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