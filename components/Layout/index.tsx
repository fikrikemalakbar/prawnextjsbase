
import Header from "../Header"
import Footer from "../Footer"
import styles from "./Layout.module.css"
import { ReactNode } from "react";


interface LayoutProps {
    children: ReactNode;
}
const Layout = (props: LayoutProps) => {
    const {children} = props;
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.content}>{children}</div>
      <Footer />
    </div>
  )
}

export default Layout
