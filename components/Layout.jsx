import { Box } from "@chakra-ui/react";
import Nav from "./Nav/Nav";
import styles from "../styles/Home.module.css";

const Layout = ({ children }) => (
  <Box className={styles.container}>
    <Nav />
    {children}
  </Box>
);
export default Layout;
