import { useLocation, useNavigate } from "react-router-dom";
interface Iprops {
  toggleClass: boolean;
  setToggleClass: (val: boolean) => void;
}

const Sidebar = ({ toggleClass, setToggleClass }: Iprops) => {
  const location = useLocation();
  const navigate = useNavigate();
  const handleMenuClick = (path: string) => {
    navigate(path);
    setToggleClass(false);
    document.body.classList.remove("overflow-hidden");
  };

  return (
    <aside
      id="side-menus"
      className={` ${toggleClass ? "sidebar-open" : "sidebar-close"} `}
    >
      <div className="side-navbar">
        <div>
          {/* <Logo /> */}
          <div className="d-flex py-2 ps-3 align-items-center justify-content-end">
            <div
              className={`ml-auto mr-5 pt-9 pb-10 d-md-none d-block  ${
                !toggleClass ? "sidebar-close" : ""
              }`}
              onClick={() => {
                setToggleClass(false);
                document.body.classList.remove("overflow-hidden");
              }}
            ></div>
          </div>

          <nav className="border-0">
            {/* Nav Menus Listing */}
            <div className="menus">
              <ul className="ps-0 mb-0">
                <li
                  className={`mb-3 cursor-pointer ${
                    location.pathname === "/dashboard" ? "active" : ""
                  }`}
                >
                  <span
                    className="nav-link d-flex align-items-center py-2 mx-3 ps-4 rounded-pill"
                    onClick={() => handleMenuClick("/dashboard")}
                  >
                    <span className="d-flex align-items-center fw-semibold">
                      <img
                        className="me-2"
                        style={{ width: "20px" }}
                        src="/static/img/my-services-icon.svg"
                      ></img>
                      My services
                    </span>
                  </span>
                </li>
                <li
                  className={`mb-3 cursor-pointer ${
                    location.pathname === "/myOrders" ? "active" : ""
                  }`}
                >
                  <span
                    className="nav-link d-flex align-items-center py-2 mx-3 ps-4 rounded-pill "
                    onClick={() => handleMenuClick("/myOrders")}
                  >
                    <span className="d-flex align-items-center fw-semibold">
                      <img
                        className="me-2" 
                        style={{ width: "20px",  }}
                        src="/static/img/my-offers-icon.svg"
                      ></img>
                      My Orders
                    </span>
                  </span>
                </li>
                <li
                  className={`mb-3 cursor-pointer ${
                    location.pathname === "/payments" ? "active" : ""
                  } `}
                >
                  <span
                    className="nav-link d-flex align-items-center py-2 mx-3 ps-4 rounded-pill"
                    onClick={() => handleMenuClick("/payments")}
                  >
                    <span className="d-flex align-items-center fw-semibold">
                      <img
                        className="me-2"
                        style={{ width: "20px" }}
                        src="/static/img/payments-icons.svg"
                      ></img>
                      Payments
                    </span>
                  </span>
                </li>
                <li
                  className={`mb-3 cursor-pointer ${
                    location.pathname === "/subscription" ? "active" : ""
                  } `}
                >
                  <span
                    className="nav-link d-flex align-items-center py-2 mx-3 ps-4 rounded-pill"
                    onClick={() => handleMenuClick("/subscription")}
                  >
                    <span className="d-flex align-items-center fw-semibold">
                      <img
                        className="me-2"
                        style={{ width: "20px" }}
                        src="/static/img/subscription-icon.svg"
                      ></img>
                      Subscription
                    </span>
                  </span>
                </li>
                <li
                  className={`mb-3 cursor-pointer ${
                    location.pathname === "/setting" ? "active" : ""
                  } `}
                >
                  <span
                    className="nav-link d-flex align-items-center py-2 mx-3 ps-4 rounded-pill"
                    onClick={() => handleMenuClick("/setting")}
                  >
                    <span className="d-flex align-items-center fw-semibold">
                      <img
                        className="me-2"
                        style={{ width: "20px" }}
                        src="/static/img/settings-icon.svg"
                      ></img>
                      Setting
                    </span>
                  </span>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
