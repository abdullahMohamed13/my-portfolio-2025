import { Outlet } from "react-router-dom";
import { motion } from "framer-motion";
import Footer from "@/components/Footer";
import ScrollToTopComponent from '../components/ScrollToTopComponent';

export default function Layout() {
    return <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col min-h-screen"
          >
            <ScrollToTopComponent />
            <main className="flex-grow">
                <Outlet />
            </main>
            <Footer />
        </motion.div>
}