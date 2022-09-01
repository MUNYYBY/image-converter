import Header from "../Components/Header/header";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <div>{children}</div>
    </>
  );
}
