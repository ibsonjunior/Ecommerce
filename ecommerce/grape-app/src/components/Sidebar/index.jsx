import { Link, Route, Routes } from 'react-router-dom';

function Sidebar({ statusSidebar, setSidebar }) {
  return (
    <>
      <>
        <div
          id="sidebar"
          className={`sidebar${statusSidebar ? "--open" : "--close"}`}
        >
          <button
            className="sidebar__btn"
            type="button"
            id="btn__close"
            onClick={() => {
              setSidebar(!statusSidebar);
            }}
            tabIndex={1}
          >
            fechar
          </button>

          <Link
            className="nav-link"
            to="/Vinhos"
          >
            Vinhos
          </Link>
        </div>
      </>
    </>
  );
}

export default Sidebar;