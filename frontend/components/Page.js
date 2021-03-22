import Header from "./Header";
export default function Page({ children }) {
  return (
    <>
      <Header />
      <h2>This is Page Component</h2>
      {children}
    </>
  );
}
