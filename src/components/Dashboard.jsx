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
`;

const Headerbar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
`;

const TopRight = styled.div`
  display: flex;
  gap: 1rem;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  width: 60%;
  margin: 0 auto;
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
