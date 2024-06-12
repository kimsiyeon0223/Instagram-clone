import Promotion from "../../Components/Promotion";
import * as S from "./style";
import InstagramLogo from "../../assets/InstagramLogo";
import FacebookWhiteIcon from "../../assets/FacknbookWhiteIcon.png";
import Or from "../../Components/Or";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/");
  };

  const handleSignup = () => {
    alert("회원가입이 완료되었습니다.");
    handleLogin();
  };

  return (
    <S.Layout>
      <S.Main>
        <S.SignupSection>
          <InstagramLogo width="175" height="51" />
          <S.BigGrayText1>Sign up to see photos and videos</S.BigGrayText1>
          <S.BigGrayText>from your friends.</S.BigGrayText>
          <S.FacebookLoginBtn>
            <img
              src={FacebookWhiteIcon}
              width="16"
              height="16"
              alt="Facebook Login"
            />
            <S.LoginBtnMessage>Log in with Facebook</S.LoginBtnMessage>
          </S.FacebookLoginBtn>
          <Or />
          <S.EmailInput placeholder="Mobile Number of Email" />
          <S.NameInput placeholder="Full Name" />
          <S.UsernameInput placeholder="Username" />
          <S.PwInput placeholder="Password" />
          <S.LearnMore>
            <div>People who use our service may have uploaded</div>
            <S.LearnMoreMessages>
              <div>your contact information to Instagram.</div>
              <S.BlueText>Learn More</S.BlueText>
            </S.LearnMoreMessages>
          </S.LearnMore>
          <S.Policy>
            <S.PolicyFlex>
              <div>By signing up, you agree to our Terms , </div>
              <S.BlueText>Privacy</S.BlueText>
            </S.PolicyFlex>
            <S.PolicyFlex>
              <S.BlueText>Policy</S.BlueText>
              and
              <S.BlueText>Cookies Policy .</S.BlueText>
            </S.PolicyFlex>
          </S.Policy>
          <S.SignupBtn onClick={handleSignup}>Sign up</S.SignupBtn>
        </S.SignupSection>
        <S.LoginSection>
          <div>Have an account?</div>
          <S.LoginBtn onClick={handleLogin}>Log in</S.LoginBtn>
        </S.LoginSection>
        <Promotion />
      </S.Main>
    </S.Layout>
  );
};

export default Signup;
