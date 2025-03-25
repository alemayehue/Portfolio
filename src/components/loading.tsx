"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulating a loading delay (e.g., fetching data)
    const timeout = setTimeout(() => setLoading(false), 3000); 

    return () => clearTimeout(timeout);
  }, []);

  if (loading) {
    return (
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="fixed inset-0 flex items-center justify-center bg-black text-white"
      >
        <motion.h2
          initial={{ scale: 0.8 }}
          animate={{ scale: 1.1 }}
          transition={{ repeat: Infinity, duration: 1, ease: "easeInOut" }}
          className="text-2xl font-bold animate-pulse"
        >
          Loading...
        </motion.h2>
      </motion.div>
    );
  }

  return <h1 className="text-center text-3xl">Content Loaded!</h1>;
}
