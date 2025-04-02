import { Outlet, Link } from "react-router-dom";
import css from "./Layout.module.css";

function Layout() {
  return (
    <div className={css.wrapper}>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>

      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
