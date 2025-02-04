import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import { Fragment } from "react";

export default function CommonLayout({ children }) {
  return (
    <Fragment>
      <Navbar />
      <div className="min-h-screen w-[90%] m-auto px-8 my-4">{children}</div>
      <Footer />
    </Fragment>
  );
}
