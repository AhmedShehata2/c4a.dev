import Footer from "../compo/Footer";
import Header from "../compo/Header";
import MainPage from '../compo/MainPage';


export default function Html() {
  return (
    <>
      <Header />
        <MainPage pageName="HTML Page" />
      <Footer />
    </>
  );
}
