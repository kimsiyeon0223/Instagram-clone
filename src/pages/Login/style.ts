import styled from "styled-components";

export const Layout = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 85px;
  gap: 2%;
`;

export const LoginMain = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const LoginSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 47px 40px 21px 40px;
  border: 1px solid #dbdbdb;
`;

export const EmailInput = styled.input`
  width: 258px;
  height: 38px;
  border-radius: 3px;
  border: 1px solid #dbdbdb;
  margin-top: 45px;
  padding: 2px 8px;
`;

export const PwInput = styled.input`
  width: 258px;
  height: 38px;
  border-radius: 3px;
  border: 1px solid #dbdbdb;
  margin-top: 6px;
  padding: 2px 8px;
`;

export const LoginBtn = styled.button`
  width: 100%;
  color: white;
  background-color: #0095f6;
  padding: 7px 112px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 550;
  border: none;
  margin-top: 14px;
  cursor: pointer;
`;

export const FacebookLoginSection = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const FacebookLoginMessage = styled.div`
  font-size: 14px;
  color: #385185;
  font-weight: 550;
`;

export const ForgotMessage = styled.div`
  padding: 20px 0;
  font-size: 12px;
`;

export const SignupSection = styled.div`
  display: flex;
  margin-top: 10px;
  justify-content: center;
  width: 100%;
  padding: 23px 0;
  border: 1px solid #dbdbdb;
  font-size: 14px;
  gap: 2px;
`;

export const SignupBtn = styled.div`
  font-weight: 550;
  color: #0095f6;
  cursor: pointer;
`;

export const PromotionSection = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 17px;
  align-items: center;
  gap: 16px;
`;

export const PromotionMessage = styled.div`
  font-size: 14px;
`;

export const PromotionImgs = styled.div`
  display: flex;
  gap: 8px;
`;
