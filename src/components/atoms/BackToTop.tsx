import { clsx } from "clsx";
import { AnimatePresence, m } from "framer-motion";
import { memo } from "react";
import { MdKeyboardArrowUp } from "react-icons/md";
import { useScroll } from "~hooks/useScroll";
import { backToTopAnimation } from "~lib/utils/constants";

export const BackToTop = () => {
  const scroll = useScroll();
  const height = 150;

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence mode="wait">
      {scroll >= height ? (
        <m.div
          key={height}
          {...backToTopAnimation}
          className="fixed bottom-16 right-2.5 md:right-4 md:bottom-4"
        >
          <button
            type="button"
            aria-label="back to top"
            className={clsx(
              "rounded-md bg-rose-400 p-1.5 transition ease-in-out",
              "hover:bg-rose-500 dark:bg-blue-500 dark:hover:bg-blue-600"
            )}
            onClick={handleClick}
          >
            <MdKeyboardArrowUp className="text-white" size="32" />
          </button>
        </m.div>
      ) : null}
    </AnimatePresence>
  );
};

memo(BackToTop);
