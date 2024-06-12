import Home from "../../assets/Home";
import Search from "../../assets/Search";
import Find from "../../assets/Find";
import Reels from "../../assets/Reels";
import InstagramLogo from "../../assets/InstagramLogo";
import Message from "../../assets/Message";
import Like from "../../assets/Like";
import Add from "../../assets/Add";
import Profile from "../../assets/Profile";
import * as S from "./style";
import Menu from "../../assets/Menu";

const Navbar = () => {
  const navbar = [
    { id: 1, name: "홈", logo: <Home /> },
    { id: 2, name: "검색", logo: <Search /> },
    { id: 3, name: "검색 탭", logo: <Find /> },
    { id: 4, name: "릴스", logo: <Reels /> },
    { id: 5, name: "메세지", logo: <Message /> },
    { id: 6, name: "알림", logo: <Like /> },
    { id: 7, name: "만들기", logo: <Add /> },
    { id: 8, name: "프로필", logo: <Profile /> },
    { id: 9, name: "더보기", logo: <Menu /> },
  ];

  return (
    <S.Layout>
      <S.NavSection>
        <InstagramLogo />
        <S.NavMain>
          {navbar.map((item) => (
            <S.NavbarDetail
              key={item.id}
              isHome={item.name === "홈"}
              isMenu={item.name === "더보기"}
            >
              {item.logo}
              {item.name}
            </S.NavbarDetail>
          ))}
        </S.NavMain>
      </S.NavSection>
    </S.Layout>
  );
};

export default Navbar;
