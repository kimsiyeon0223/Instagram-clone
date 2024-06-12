import styled from "styled-components";

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  width: 45%;
  padding: 30px 50px 30px 130px;
`;

export const ProfilebarWrapper = styled.div`
  overflow-x: scroll;
  width: 100%;
  box-sizing: content-box;

  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Profilebar = styled.div`
  display: flex;
  font-size: 13px;
  gap: 10px;
`;

export const ProfileDetail = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  flex: 0 0 auto;
  flex-basis: calc(100% / 9); // 예시로 한 줄에 8개의 프로필이 보이도록 조정
`;

export const PostSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const PostHeader = styled.div`
  display: flex;
  padding-bottom: 15px;
  gap: 12px;
  align-items: center;
  padding-top: 40px;
`;
export const PostUserName = styled.div`
  font-size: 16px;
  font-weight: 550;
`;
export const Circle = styled.div`
  width: 5px;
  height: 5px;
  background-color: #9d9d9d;
  border-radius: 50%;
`;
export const PostHour = styled.div`
  color: #9d9d9d;
  font: 14px;
`;
export const PostFooter = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 15px;
`;
export const PostIconDetail = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
  justify-content: center;
`;
export const PostLike = styled.div`
  padding: 16px 0 11px 0;
`;
export const PostComment = styled.div``;
export const PostAddComment = styled.div`
  padding: 8px 0 21px 0;
`;
export const Line = styled.div`
  border-bottom: 1px solid #dcdcdc;
`;
