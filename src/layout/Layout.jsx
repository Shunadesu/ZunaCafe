import { Suspense } from "react";
import { Loader, Navbar } from "../components";
import { Toaster } from "react-hot-toast";
import PropTypes from "prop-types";

const Layout = ({ children }) => {
  return (
    <Suspense fallback={<Loader />}>
      <div className="min-h-screen">
        <main className="px-32 w-full">
        <Navbar />
            <div className="flex flex-col w-full">
              {children}
            </div>  
        </main>
      </div>
      <Toaster />
    </Suspense>
  );
};
Layout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Layout;