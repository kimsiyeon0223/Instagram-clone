import styled from "styled-components";

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  width: 18%;
`;

export const NavSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 55px;
  padding: 40px 30px;
`;

export const NavMain = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

export const NavbarDetail = styled.div<{ isHome: boolean; isMenu: boolean }>`
  display: flex;
  width: fit-content;
  font-size: 17px;
  align-items: center;
  gap: 17px;
  cursor: ${(props) => (props.isMenu ? "" : "pointer")};
  font-weight: ${(props) => (props.isHome ? 550 : "none")};
  padding-top: ${(props) => (props.isMenu ? "240px" : "0")};
`;
