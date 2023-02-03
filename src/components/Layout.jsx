import Head from "next/head";
import { Box } from "@chakra-ui/react";

import Navbar from "./Navbar";
import Footer from "./Footer";
import PropTypes from "prop-types";

const Layout = ({ children }) => (
  <>
    <Head>
      <title>Real Estate</title>
    </Head>
    <Box maxWidth={"1280px"} m={"auto"}>
      <Navbar />
      <main>{children}</main>
      <footer>
        <Footer />
      </footer>
    </Box>
  </>
);

Layout.propTypes = {
  children: PropTypes.element
};

export default Layout;
