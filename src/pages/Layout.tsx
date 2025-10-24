import { Outlet } from "react-router-dom";
import Footer from "@/components/Footer";
import ScrollToTopComponent from '../components/ScrollToTopComponent';
import FadeInOnScroll from "@/components/FadeInOnScroll";

export default function Layout() {
    return ( 
        <FadeInOnScroll
            direction="down"
            className="flex flex-col min-h-screen selection:bg-primary selection:text-white"
        >
            <ScrollToTopComponent />
            <main className="flex-grow">
                <Outlet />
            </main>
            <Footer />
        </FadeInOnScroll>
    )
}