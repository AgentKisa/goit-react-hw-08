import css from "./Layout.module.css";
import AppBar from "../AppBar/Appbar";

export default function Layout({ children }) {
  return (
    <div className={css.container}>
      <AppBar />
      {children}
      {/* <Toaster position="top-right" reverseOrder={false} /> */}
    </div>
  );
}
