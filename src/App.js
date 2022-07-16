import { lazy, Suspense, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import "./App.scss";
import Loading from './components/shared/Loading/Loading';
import { IntlProvider } from "react-intl";
import ScrollToTop from "./ScrollToTop";
import Aos from 'aos';
// import "aos/dist/aos.css";
// import {useSelector} from 'react-redux';


const Home = lazy(() => import("./page/Home/Home"));
const SignUp = lazy(() => import("./page/SignUp/SignUp"));



function App() {
  // const language = useSelector((state) => state.language.language);

  // useEffect(() => {
  //   Aos.init({
  //     duration:1250,
  //     once: true
  //   })
  // }, [])
  return (
    <Router>
      <Suspense fallback={<Loading />}>
      <IntlProvider>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/SignUp" element={<SignUp />} />
        </Routes>
      </IntlProvider>
      </Suspense>
    </Router>
  );
}

export default App;
