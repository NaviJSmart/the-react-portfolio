import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { ProjectState } from '../data';
const ProjDetailPage = () => {
  const {
    location: { pathname },
  } = useHistory();
  const [data, setData] = useState(ProjectState);
  const [project, setProject] = useState(null);

  useEffect(() => {
    const currentProject = data.filter((proj) => proj.url === pathname);
    setProject(currentProject[0]);
  }, [data, pathname]);
  return (
    <>
      {project && (
        <Details>
          <Header>
            <h2>{project.title}</h2>
            <div className="line"></div>
            <div className="container">
              <img src={project.mainImg} alt={project.title} />
              <Awards>
                {project.awards.map((item, i) => {
                  return <Award title={item.title} description={item.description} key={i} />;
                })}
              </Awards>
            </div>
          </Header>
        </Details>
      )}
    </>
  );
};

const Details = styled.div`
  background-color: #fafafa;
  height: 100vh;
`;

const Header = styled.div`
  padding: 6rem 10rem 5rem 10rem;
  h2{
      font-size: 3rem;
  }
  .line {
      height: 0.2rem;
      background-color: #23d997;
      margin-bottom: 1rem;
  }
  img {
    width: 50%;
    object-fit: cover;
  }
  .container {
    display: flex;
  }
`;

const Awards = styled.div`
padding-left: 4rem;
h3{
    color: #000;
    
}
p {
    font-size: 1.1rem;
    color: #3d3d3d;
    padding-top: 1rem;
}
`;

const Award = ({ title, description }) => {
  return (
    <div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default ProjDetailPage;
