import Promotion from "../../Components/Promotion";
import * as S from "./style";
import InstagramLogo from "../../assets/InstagramLogo";
import FacebookWhiteIcon from "../../assets/FacknbookWhiteIcon.png";
import Or from "../../Components/Or";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/");
  };

  const handleSignup = () => {
    if (!email || !fullName || !username || !password) {
      alert("모든 필드를 한번 더 확인해주세요!");
    } else {
      alert("회원가입이 완료되었습니다.");
      handleLogin();
    }
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
          <S.EmailInput
            placeholder="Mobile Number or Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <S.NameInput
            placeholder="Full Name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
          <S.UsernameInput
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <S.PwInput
            placeholder="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <S.LearnMore>
            <div>People who use our service may have uploaded</div>
            <S.LearnMoreMessages>
              <div>your contact information to Instagram.</div>
              <S.BlueText>Learn More</S.BlueText>
            </S.LearnMoreMessages>
          </S.LearnMore>
          <S.Policy>
            <S.PolicyFlex>
              <div>By signing up, you agree to our Terms, </div>
              <S.BlueText>Privacy</S.BlueText>
            </S.PolicyFlex>
            <S.PolicyFlex>
              <S.BlueText>Policy</S.BlueText>
              and
              <S.BlueText>Cookies Policy.</S.BlueText>
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
