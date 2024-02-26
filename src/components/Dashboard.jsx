import { useNavigate, Routes, Route, useLocation } from "react-router-dom";
import styled from "styled-components";
import Drafts from "./Drafts";
import Published from "./Published";
import logo from "../assets/logo (1).svg";

const DashboardContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f8f9fa;
  height: 100vh;

  @media (max-width: 768px) {
    height: 100%;
  }
`;

const Headerbar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;

  @media (max-width: 768px) {
    padding: 0.5rem;
  }
`;

const TopRight = styled.div`
  display: flex;
  gap: 1rem;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  width: 80%;
  margin: 0 auto;

  @media (max-width: 768px) {
    width: 95%;
  }
`;

const NavCont = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: flex-start;
  border-bottom: 1px solid #ded9d3;
  padding: 0rem;
`;

const NavButton = styled.button`
  padding: 0.5rem 1rem;
  font-size: 1rem;
  background-color: transparent;
  color: #ded9d3;
  border: none;
  border-radius: 0rem;
  cursor: pointer;

  &:hover {
    color: #231f20;
    background-color: transparent;
  }

  &.active {
    color: #231f20;
    border-bottom: 1px solid #231f20;
  }
`;

export const PostContainer = styled.div`
  border: none;
  border-bottom: 1px solid #ded9d3;
  gap: 0rem;
`;

export const Post = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  border-bottom: 1px solid #ded9d3;
  width: 100%;
  max-width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;

    button {
      margin-top: 1rem;
    }
  }
`;

export const DeleteButton = styled.button`
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  background-color: #dc3545;
  color: white;
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;

  &:hover {
    background-color: #b02a37;
  }
`;

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 999;
`;

export const ErrorPreventionCard = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 2rem;
  border: 1px solid #ded9d3;
  border-radius: 0.5rem;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  z-index: 1000;

  .actions {
    display: flex;
    gap: 1rem;
  }
`;

const Dashboard = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNewPost = () => {
    navigate("/post-editor");
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <DashboardContainer>
      <Headerbar>
        <img src={logo} alt="logo" />
        <TopRight>
          <button onClick={handleNewPost}>New Post</button>
          <button onClick={handleLogout}>Logout</button>
        </TopRight>
      </Headerbar>
      <ContentContainer>
        <NavCont>
          <NavButton
            onClick={() => navigate("/dashboard/drafts")}
            className={
              location.pathname === "/dashboard/drafts" ? "active" : ""
            }
          >
            Drafts
          </NavButton>
          <NavButton
            onClick={() => navigate("/dashboard/published")}
            className={
              location.pathname === "/dashboard/published" ? "active" : ""
            }
          >
            Published
          </NavButton>
        </NavCont>
        <Routes>
          <Route path="/published" element={<Published />} />
          <Route path="/drafts" element={<Drafts />} />
        </Routes>
      </ContentContainer>
    </DashboardContainer>
  );
};

export default Dashboard;
