import Dropdown from "./Dropdown";

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            snap
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#sub-menu"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="sub-menu">
            <ul className="navbar-nav">
              <Dropdown
                title="Feature"
                item1= "Todo list"
                item2="Calendar"
                item3="Reminders"
                item4="Planning"
              />
              <Dropdown
                title="Company"
                item1="History"
                item2="Our Team"
                item3="Blog"
              />
              <Dropdown title="Careers" />
              <Dropdown title="About" />
            </ul>
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Login
                </a>
              </li>
              <li className="nav-item">
                <button>Register</button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
