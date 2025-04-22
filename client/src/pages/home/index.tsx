import { motion } from "framer-motion";

export const HomePage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1>Bem-vindo à Página Inicial</h1>
    </motion.div>
  );
};
