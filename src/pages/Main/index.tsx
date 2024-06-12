import * as S from "./style";
import Navbar from "../../Components/Navbar";
import Centerbar from "../../Components/Centerbar";
import AddFriendbar from "../../Components/AddFriendbar";

const Main = ({ username }: { username: string }) => {
  return (
    <S.Layout>
      <Navbar />
      <S.Line />
      <Centerbar />
      <AddFriendbar username={username} />
    </S.Layout>
  );
};

export default Main;
