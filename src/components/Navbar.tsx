import NavbarLink from "./NavbarLink";

const Navbar = () => {
  return (
    <nav className="border-b bg-blue-100">
      <ul className="flex gap-4 p-4 max-w-4xl mx-auto">
        <li>
          <NavbarLink to="/">Home</NavbarLink>
        </li>
        <li>
          <NavbarLink to="/about">About</NavbarLink>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;
