// Layout che centralizza la Navbar
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Navbar />

      {/* Spazio dove verranno caricate le pagine */}
      <main className="container py-4">
        <Outlet />
      </main>
    </>
  );
};

export default Layout;