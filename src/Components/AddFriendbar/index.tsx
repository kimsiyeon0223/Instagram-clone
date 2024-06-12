import Profile from "../../assets/Profile";
import * as S from "./style";

const AddFriendbar = ({ username }: { username: string }) => {
  const profiles = [
    {
      id: 1,
      name: "winternuary",
      profile: <Profile width="50px" height="50px" />,
    },
    {
      id: 2,
      name: "jiwon07_1209",
      profile: <Profile width="50px" height="50px" />,
    },
    {
      id: 3,
      name: "radiant._.17",
      profile: <Profile width="50px" height="50px" />,
    },
    { id: 4, name: "m.jzi6", profile: <Profile width="50px" height="50px" /> },
    {
      id: 5,
      name: "yxonxxze",
      profile: <Profile width="50px" height="50px" />,
    },
  ];
  return (
    <S.Layout>
      <S.MainSection>
        <S.MyProfile>
          <Profile width="50px" height="50px" />
          <S.MyName>
            <div style={{ fontWeight: "bold" }}>{username}</div>
            <div>{username}</div>
          </S.MyName>
          <S.ChangeBtn>전환</S.ChangeBtn>
        </S.MyProfile>
        <S.Recommend>
          <S.ForMeRecommend>회원님을 위한 추천</S.ForMeRecommend>
          <S.ShowAll>모두보기</S.ShowAll>
        </S.Recommend>
        <S.RecommendFriendSection>
          {profiles.map((profile) => (
            <S.RecommendFriend key={profile.id}>
              <div>{profile.profile}</div>
              <S.NameRecommned>
                <>{profile.name}</>
                <S.ForMeRecommend style={{ fontSize: "13px" }}>
                  회원님을 위한 추천
                </S.ForMeRecommend>
              </S.NameRecommned>
              <S.Follow>팔로우</S.Follow>
            </S.RecommendFriend>
          ))}
        </S.RecommendFriendSection>
      </S.MainSection>
    </S.Layout>
  );
};

export default AddFriendbar;
