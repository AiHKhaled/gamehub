import styles from "../styles/Home.module.css";
import { motion } from "framer-motion/dist/framer-motion";

const variants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: { scale: 1, opacity: 1, transition: { delay: 3 } },
};

export default function Home() {
  return (
    <div className={styles.home}>
      <motion.div
        className="title"
        initial="hidden"
        animate="visible"
        variants={variants}
      >
        <h2>Welcome to Gaming Vibes</h2>
      </motion.div>
      <div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
          deleniti rem aspernatur odit hic autem neque repellat alias? Debitis
          veniam inventore ipsum similique quos animi ipsa asperiores fuga dolor
          id. Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
          deleniti rem aspernatur odit hic autem neque repellat alias? Debitis
          veniam inventore ipsum similique quos animi ipsa asperiores fuga dolor
          id. Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
          deleniti rem aspernatur odit hic autem neque repellat alias? Debitis
          veniam inventore ipsum similique quos animi ipsa asperiores fuga dolor
          id.
        </p>
      </div>
    </div>
  );
}
