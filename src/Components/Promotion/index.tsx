import * as S from "./style";
import GoogleIcon from "../../assets/GoogleIcon.png";
import MicrosoftIcon from "../../assets/MicrosoftIcon.png";

const Promotion = () => {
  return (
    <S.PromotionSection>
      <S.PromotionMessage>Get the app.</S.PromotionMessage>
      <S.PromotionImgs>
        <img src={GoogleIcon} width="134px" height="40px" />
        <img src={MicrosoftIcon} width="110px" height="40px" />
      </S.PromotionImgs>
    </S.PromotionSection>
  );
};

export default Promotion;
