import SignUpForm from "../../components/pages/SignUp/SignUpForm";
import Footer from "../../components/shared/Footer/Footer";
import Navbar from "../../components/shared/navbar/Navbar";
const SignUp = () => {
    return (
      <div className="SignUp-page">
          <Navbar/>
          <SignUpForm/>
        <Footer/>
      </div>
    );
  };
  
  export default SignUp;
  