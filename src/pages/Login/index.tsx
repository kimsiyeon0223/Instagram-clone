import * as S from "./style";
import InstagramPhone from "../../assets/InstagramPhone.png";
import InstagramLogo from "../../assets/InstagramLogo";
import FacebookLogo from "../../assets/FacebookLogo.png";
import Promotion from "../../Components/Promotion";
import Or from "../../Components/Or";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (!email || !password) {
      alert("이메일과 비밀번호칸을 한번 더 확인해주세요!");
    } else {
      navigate("/main");
    }
  };

  const handleSignUp = () => {
    navigate("/signup");
  };

  return (
    <S.Layout>
      <img src={InstagramPhone} width="380px" height="581px" />
      <S.LoginMain>
        <S.LoginSection>
          <InstagramLogo width="175px" height="51px" />
          <S.EmailInput
            placeholder="Phone number, username, or email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <S.PwInput
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <S.LoginBtn onClick={handleLogin}>Log in</S.LoginBtn>
          <Or />
          <S.FacebookLoginSection>
            <img src={FacebookLogo} width="16px" height="16px" />
            <S.FacebookLoginMessage>
              Log in with Facebook
            </S.FacebookLoginMessage>
          </S.FacebookLoginSection>
          <S.ForgotMessage>Forgot password?</S.ForgotMessage>
        </S.LoginSection>
        <S.SignupSection>
          <div>Don't have an account?</div>
          <S.SignupBtn onClick={handleSignUp}>Sign up</S.SignupBtn>
        </S.SignupSection>
        <Promotion />
      </S.LoginMain>
    </S.Layout>
  );
};

export default Login;
