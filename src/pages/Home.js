import Footer from "../compo/Footer";
import Header from "../compo/Header";
import MainPage from '../compo/MainPage';

export default function Home() {
  return (
    <>
      <Header />
        <MainPage pageName="Home Page" />
      <Footer />
    </>
  );
}
