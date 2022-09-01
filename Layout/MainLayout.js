import Header from "../Components/Header/header";
import Footer from "../Components/Footer/footer";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <div>{children}</div>
      <Footer />
    </>
  );
}
