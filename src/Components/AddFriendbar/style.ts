import styled from "styled-components";

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  width: 27%;
  font-size: 15px;
`;

export const MainSection = styled.div`
  display: flex;
  flex-direction: column;
  padding: 70px 150px 100px 0;
  gap: 30px;
`;

export const MyProfile = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const MyName = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

export const ChangeBtn = styled.div`
  margin-left: auto;
  font-size: 13px;
  color: #5795e4;
  font-weight: bold;
`;

export const Recommend = styled.div`
  display: flex;
`;

export const RecommendFriendSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 17px;
`;

export const ForMeRecommend = styled.div`
  font-weight: bold;
  color: #767676;
`;

export const ShowAll = styled.div`
  margin-left: auto;
  font-weight: bold;
  cursor: pointer;
  &:hover {
    color: #767676;
  }
`;

export const RecommendFriend = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const NameRecommned = styled.div`
  font-size: 16px;
  font-weight: 550;
  gap: 1px;
`;

export const Follow = styled.div`
  margin-left: auto;
  color: #5795e4;
  font-weight: bold;
  cursor: pointer;
  &:hover {
    color: black;
  }
`;
