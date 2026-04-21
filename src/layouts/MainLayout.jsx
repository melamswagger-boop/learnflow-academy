import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Toast from "../components/Toast";
import { useAppContext } from "../context/AppContext";

function MainLayout() {
  const { toast } = useAppContext();

  return (
    <div className="site-shell">
      <Navbar />
      <main className="site-main">
        <Outlet />
      </main>
      <Footer />
      <Toast message={toast} />
    </div>
  );
}

export default MainLayout;
