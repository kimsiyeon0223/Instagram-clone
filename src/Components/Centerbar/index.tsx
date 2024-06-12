import Detail from "../../assets/Detail";
import Profile from "../../assets/Profile";
import PostImg from "../../assets/PostImg.png";
import * as S from "./style";
import Like from "../../assets/Like";
import Comment from "../../assets/Comment";
import Message from "../../assets/Message";
import Bookmark from "../../assets/Bookmark";
import ProfileColor from "../../assets/ProfileColor";
import PostImg1 from "../../assets/PostImg1.png";
import PostImg2 from "../../assets/PostImg2.png";
import PostImg3 from "../../assets/PostImg3.png";
import PostImg4 from "../../assets/PostImg4.png";
import PostImg5 from "../../assets/PostImg5.png";
import PostImg6 from "../../assets/PostImg6.png";
import PostImg7 from "../../assets/PostImg7.png";
import { useState } from "react";

const Centerbar = () => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      hour: "1시간",
      useName: "yxonxxze",
      comment: "나도 이거 좋아하는뎅..",
      img: PostImg,
      likes: 10,
      liked: false,
    },
    {
      id: 2,
      hour: "3시간",
      useName: "jiwon07_1209",
      comment: "뾰잉뾰잉",
      img: PostImg1,
      likes: 43,
      liked: false,
    },
    {
      id: 3,
      hour: "4시간",
      useName: "winternuary",
      comment: "뿌잉뿌잉",
      img: PostImg2,
      likes: 200,
      liked: false,
    },
    {
      id: 4,
      hour: "5시간",
      useName: "suye0n6",
      comment: "드륻드듣ㄷ",
      img: PostImg3,
      likes: 402,
      liked: false,
    },
    {
      id: 5,
      hour: "6시간",
      useName: "cho_aeonian",
      comment: "나는 이거 싫어",
      img: PostImg4,
      likes: 5055,
      liked: false,
    },
    {
      id: 6,
      hour: "7시간",
      useName: "_tjdgns2",
      comment: "보러가자",
      img: PostImg5,
      likes: 1011,
      liked: false,
    },
    {
      id: 7,
      hour: "8시간",
      useName: "hyun_2u",
      comment: "아이좋아",
      img: PostImg6,
      likes: 223,
      liked: false,
    },
    {
      id: 8,
      hour: "9시간",
      useName: "jyh071116",
      comment: "이거 재밌게 봤는데ㅠ",
      img: PostImg7,
      likes: 0,
      liked: false,
    },
  ]);

  const profiles = [
    { id: 1, name: "winternuary", profile: <ProfileColor /> },
    { id: 2, name: "jiwon07_1209", profile: <ProfileColor /> },
    { id: 3, name: "radiant._.17", profile: <ProfileColor /> },
    { id: 4, name: "m.jzi6", profile: <ProfileColor /> },
    { id: 5, name: "yxonxxze", profile: <ProfileColor /> },
    { id: 6, name: "yxonxxze", profile: <ProfileColor /> },
    { id: 7, name: "cho_aeonian", profile: <ProfileColor /> },
    { id: 8, name: "ch.xo5", profile: <ProfileColor /> },
    { id: 9, name: "_tjdgns2", profile: <ProfileColor /> },
    { id: 10, name: "an.ys_34", profile: <ProfileColor /> },
    { id: 11, name: "hyun_2u", profile: <ProfileColor /> },
    { id: 12, name: "jyh071116", profile: <ProfileColor /> },
  ];

  const handleLikeClick = (id: number) => {
    setPosts((prevPosts) =>
      prevPosts.map((post) =>
        post.id === id
          ? {
              ...post,
              likes: post.liked ? post.likes - 1 : post.likes + 1,
              liked: !post.liked,
            }
          : post,
      ),
    );
  };

  return (
    <S.Layout>
      <S.ProfilebarWrapper>
        <S.Profilebar>
          {profiles.map((profile) => (
            <S.ProfileDetail key={profile.id}>
              <>{profile.profile}</>
              <>{profile.name}</>
            </S.ProfileDetail>
          ))}
        </S.Profilebar>
      </S.ProfilebarWrapper>
      <S.PostSection>
        {posts.map((post) => (
          <div key={post.id}>
            <S.PostHeader>
              <Profile width="36px" height="36px" />
              <S.PostUserName>{post.useName}</S.PostUserName>
              <S.Circle />
              <S.PostHour>{post.hour}</S.PostHour>
              <Detail style={{ marginLeft: "auto" }} />
            </S.PostHeader>
            <img src={post.img} />
            <S.PostFooter>
              <S.PostIconDetail>
                <Like
                  onClick={() => handleLikeClick(post.id)}
                  style={{ cursor: "pointer" }}
                />
                <Comment />
                <Message />
                <Bookmark style={{ marginLeft: "auto" }} />
              </S.PostIconDetail>
              <S.PostLike>좋아요 {post.likes}개</S.PostLike>
              <S.PostComment>winternary {post.comment}</S.PostComment>
              <S.PostAddComment>댓글 달기...</S.PostAddComment>
            </S.PostFooter>
            <S.Line />
          </div>
        ))}
      </S.PostSection>
    </S.Layout>
  );
};

export default Centerbar;
