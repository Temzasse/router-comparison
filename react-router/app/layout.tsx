import { Link, Outlet } from "react-router";

export default function Layout() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/" prefetch="intent">
              Home
            </Link>
          </li>
          <li>
            <Link to="/profile" prefetch="intent">
              Profile
            </Link>
          </li>
          <li>
            <Link to="/settings" prefetch="intent">
              Settings
            </Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
}
