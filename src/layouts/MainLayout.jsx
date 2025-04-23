import React, { Suspense } from "react";
import Navbar from "../Components/Navbar/Navbar";
import { Outlet, useNavigation } from "react-router-dom";
import Footer from "../Components/Footer/Footer";
import LoadingSpinner from "../Components/LoadingSpinner/LoadingSpinner";
import useDocumentTitle from "../hooks/useDocumentTitle";
import { AnimatePresence, motion } from "framer-motion";

const MainLayout = () => {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";
  useDocumentTitle();

  return (
    <div className="bg-[#F6F8FA] min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 w-full">
        <div className="max-w-[1320px] mx-auto px-4 md:px-8 lg:px-0">
          <Suspense fallback={<LoadingSpinner />}>
            <AnimatePresence mode="wait">
              {isLoading ? (
                <LoadingSpinner />
              ) : (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <Outlet />
                </motion.div>
              )}
            </AnimatePresence>
          </Suspense>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
