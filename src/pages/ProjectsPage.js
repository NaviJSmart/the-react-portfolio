import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import work1 from '../images/work1.jpg';
import work2 from '../images/work2.jpg';
import work3 from '../images/work3.jpg';
import work4 from '../images/work4.jpg';
const ProjectsPage = () => {
  return (
    <CSSWork>
      <CSSProject>
        <h2>The Work 1</h2>
        <div className="line"></div>
        <Link to="/work/work1">
          <img src={work1} alt="work1" />
        </Link>
      </CSSProject>
      <CSSProject>
        <h2>The Work 1</h2>
        <div className="line"></div>
        <Link to="/work/work2">
          <img src={work2} alt="work2" />
        </Link>
      </CSSProject>
      <CSSProject>
        <h2>The Work 1</h2>
        <div className="line"></div>
        <Link to="/work/work3">
          <img src={work3} alt="work3" />
        </Link>
      </CSSProject>
      <CSSProject>
        <h2>The Work 1</h2>
        <div className="line"></div>
        <Link to="/work/work4">
          <img src={work4} alt="work4" />
        </Link>
      </CSSProject>
    </CSSWork>
  );
};

const CSSWork = styled.div`
  background: #fafafa;
  padding: 5rem 10rem;
  min-height: 100vh;
  h2 {
    padding-top: 3rem;
    font-size: 2rem;
  }
`;

const CSSProject = styled.div`
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
    border-radius: 20px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
  }
`;

export default ProjectsPage;
