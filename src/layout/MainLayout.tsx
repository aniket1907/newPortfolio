import type { ReactNode } from "react";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";

interface Props {
  children: ReactNode;
}

const MainLayout = ({ children }: Props) => {
  return (
    <div className="flex flex-col min-h-screen bg-dark text-white">
      <Navbar />

      <main className="flex-1 pt-20 px-6 md:px-16">
        {children}
      </main>

      <Footer />
    </div>
  );
};

export default MainLayout;