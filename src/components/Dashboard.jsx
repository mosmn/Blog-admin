import { useNavigate, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import Drafts from './Drafts';
import Published from './Published';
import logo from '../assets/logo (1).svg';

const DashboardContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1px;
    background-color: #f8f9fa;
`;

const Headerbar = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #f8f9fa;
`;

const TopRight = styled.div`
    display: flex;
    gap: 1rem;
`;

const NavButton = styled.button`
    padding: 0.5rem 1rem;
    font-size: 1rem;
    background-color: transparent;
    color: #231F20;
    border: none;
    border-radius: 0.25rem;
    cursor: pointer;

    &:hover {
        border-bottom: 2px solid #231F20;
        color: #231F20;
        background-color: transparent;
    }
`;

const Dashboard = () => {
  const navigate = useNavigate();

  const handleNewPost = () => {
    navigate('/post-editor');
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/');
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
        <TopRight>
            <NavButton onClick={() => navigate('/dashboard/drafts')}>Drafts</NavButton>
            <NavButton onClick={() => navigate('/dashboard/published')}>Published</NavButton>
        </TopRight>
        <Routes>
            <Route path="/published" element={<Published />} />
            <Route path="/drafts" element={<Drafts />} />
        </Routes>
    </DashboardContainer>
  );
};

export default Dashboard;