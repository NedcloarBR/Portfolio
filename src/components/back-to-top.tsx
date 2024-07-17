"use client"

import { Button } from "@/components/ui";
import { Link } from "@/navigation";
import { ArrowUp } from "lucide-react";
import { MouseEvent, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function BackToTop() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    function handleScroll() {
      const section = document.getElementById("start");
      if (section) {
        const isVisible = scrollY > (section.offsetHeight - 100);
        setShowButton(isVisible);
      }
    }

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function handleClick(event: MouseEvent<HTMLAnchorElement>) {
    const section = document.getElementById("start");
    event.preventDefault();
    section?.scrollIntoView({ behavior: "smooth", block: "end" });
  }

  return (
    <AnimatePresence>
      {showButton && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ ease: "easeInOut", duration: 0.5 }}
          className="fixed bottom-8 right-8 flex items-center justify-center"
          style={{ width: "48px", height: "48px" }}
        >
          <Button className="rounded-full p-0 w-full h-full bg-blue-300 flex items-center justify-center">
            <Link className="w-full h-full flex items-center justify-center" href="#start" onClick={handleClick}>
              <ArrowUp />
            </Link>
          </Button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
