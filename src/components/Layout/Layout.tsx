import { Outlet, Link } from "react-router-dom";
import css from "./Layout.module.css";

function Layout() {
  return (
    <div className={css.wrapper}>
      <nav className={css.navbar}>
        <div className={css.upperPart}>
          <div>Tree</div>
          <div>
            <Link to="/about">Bag</Link>
          </div>
          <div>
            <Link to="/about">Search</Link>
          </div>
        </div>

        <div className={css.lowerPart}>
          <div>
            <Link to="/settings">Settings</Link>
          </div>
          <div>
            <Link to="/logout">logout</Link>
          </div>
        </div>
      </nav>

      <div className={css.openContent}>
        <div>
          <div className={css.titles}>
            <div className={css.title}>Oak Tree Cemetery</div>
            <div className={css.description}>Process Manager</div>
          </div>

          <div>
            <button>Organizations</button>
            <button>Contractors</button>
            <button>Clients</button>
          </div>
        </div>

        <div className={css.lowerTitle}>All Funeral Services © 2015-2025</div>
      </div>

      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
