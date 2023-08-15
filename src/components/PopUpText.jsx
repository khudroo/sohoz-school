import { motion } from "framer-motion";

const PopUpText = ({title, desc, more}) => {
  return (
    <motion.div
      className="container card w-96 bg-transparent shadow-xl image-full"
      initial={{ scale: 0 }}
      animate={{ rotate: 360, scale: 1 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 50,
      }}
    >
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>
          {desc}
        </p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">{more}</button>
        </div>
      </div>
    </motion.div>
  );
};

export default PopUpText;

<script>AOS.init();</script>;
