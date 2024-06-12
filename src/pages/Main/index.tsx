import * as S from "./style";
import Navbar from "../../Components/Navbar";
import Centerbar from "../../Components/Centerbar";
import AddFriendbar from "../../Components/AddFriendbar";

const Main = () => {
  return (
    <S.Layout>
      <Navbar />
      <S.Line />
      <Centerbar />
      <AddFriendbar />
    </S.Layout>
  );
};

export default Main;
