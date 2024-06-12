import Add from "../../assets/Add";
import Find from "../../assets/Find";
import Home from "../../assets/Home";
import InstagramLogo from "../../assets/InstagramLogo";
import Like from "../../assets/Like";
import Message from "../../assets/Message";
import Profile from "../../assets/Profile";
import Reels from "../../assets/Reels";
import Search from "../../assets/Search";
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
