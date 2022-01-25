import { motion } from "framer-motion";
const Home = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1, transition: { duration: 0.5 } }}
    exit={{ opacity: 0 }}
  >
    <div style={{ paddingTop: "40vh" }}>About Page</div>
  </motion.div>
);
export default Home;
