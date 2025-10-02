import { NavLink } from "react-router";

const NavbarLink = ({
  to,
  children,
}: {
  to: string;
  children: React.ReactNode;
}) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `font-medium ${isActive ? "text-blue-600" : "text-gray-800"}`
      }
    >
      {children}
    </NavLink>
  );
};
export default NavbarLink;
