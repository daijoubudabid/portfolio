import { Poppins } from "next/font/google";
import Head from "next/head";
import { Cursor } from "./Cursor";
import { Navbar } from "./Navbar";
import { ToggleButton } from "./ToggleButton";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
});

const metaData = {
  title: "Dabid.",
  description: "My Portfolio",
};

export const Layout = ({ children }) => {
  return (
    <div className={`${poppins.className}`}>
      <Head>
        <title>{metaData.title}</title>
        <meta name="description" content={metaData.description} />
      </Head>
      <Cursor />
      <ToggleButton />
      <Navbar />
      {children}
    </div>
  );
};
