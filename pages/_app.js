import { Layout } from "@/components/Layout";
import Transition from "@/components/Transition";
import "@/styles/globals.css";
import { motion } from "framer-motion";
import { ThemeProvider } from "next-themes";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  return (
    <ThemeProvider attribute="class" defaultTheme="dark">
      <Layout>
        {/* <AnimatePresence mode="wait"> */}
        <motion.div key={router.route} className="h-full">
          <Transition />
          <Component {...pageProps} />
        </motion.div>
        {/* </AnimatePresence> */}
      </Layout>
    </ThemeProvider>
  );
}
