import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../firebase";
import { logout as logoutHandle } from "../store/auth";
import Dropdown from "ui/Dropdown";
import ReactTooltip from "react-tooltip";

export default function Home() {
  const dispach = useDispatch();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    dispach(logoutHandle());
    navigate("/", { replace: true });
  };

  const { user } = useSelector((state) => state.auth);
  if (user) {
    return (
      <>
        <ReactTooltip
          place="top"
          type="dark"
          effect="solid"
          className="!py-1 !px-3"
        />
        <header className="px-4 w-full shadow-header">
          <div className="container mx-auto h-16 flex items-center">
            <div>
              <Link to="/">Firebase + React + Tailwind Authendtication</Link>
            </div>
            <div className="ml-auto relative">
              <Dropdown label={user.displayName} handleLogout={handleLogout} />
            </div>
          </div>
        </header>
      </>
    );
  }

  return (
    <>
      <Link to="/register">Register</Link>
      <Link to="/login">Login</Link>
    </>
  );
}
