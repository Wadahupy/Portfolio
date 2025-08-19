import { motion } from "framer-motion";

const MarqueeTicker = () => {
  return (
    <div className="overflow-x-hidden whitespace-nowrap bg-primary text-black py-2">
      <div className="flex">
        <motion.div
          className="flex text-7xl font-black  font-header flex-shrink-0"
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
        >
          {[...Array(10)].map((_, i) => (
            <span key={i}> WORKS &bull; </span>
          ))}
        </motion.div>
        {/* <motion.div
          className="flex text-7xl font-black font-header flex-shrink-0"
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
        >
          {[...Array(10)].map((_, i) => (
            <span key={i}> WORKS &bull; </span>
          ))}
        </motion.div> */}
      </div>
    </div>
  );
};

export default MarqueeTicker;
