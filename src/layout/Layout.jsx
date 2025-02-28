import { Suspense } from "react";
import { Loader } from "../components";
import { Toaster } from "react-hot-toast";
import PropTypes from "prop-types";

const Layout = ({ children }) => {
  return (
    <Suspense fallback={<Loader />}>
      <div className="m-auto justify-center flex items-center w-full">
            <div className="flex flex-col w-full m-auto py-4">
              {children}
            </div>  
      </div>
      <Toaster />
    </Suspense>
  );
};
Layout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Layout;