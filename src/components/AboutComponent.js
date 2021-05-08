import React from 'react';
import styled from 'styled-components';
import background from '../images/newbackcopy.jpg'
const AboutComponent = () => {
  return (
    <CSSAbout className="about">
      <div className="about__section">
        <div className="title">
          <div className="title__hide">
            <h2>Hello, Здравствуйте, Привiт</h2>
          </div>
          <div className="title__hide">
            <h2>My name is Vania</h2>
          </div>
          <div className="title__hide">
            <h2>
              I live to{' '}
              <span className="title__hightlight">Make a Difference</span>
            </h2>
          </div>
        </div>
        <p>
          My goal as a developer is to make your <span>dreams</span> come true.
        </p>
        <button>Say Hello</button>
      </div>
    </CSSAbout>
  );
};

const CSSAbout = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5rem 10rem;
  color: #fff;
  button {
    font-family: 'Poppins', sans-serif; 
    text-transform: uppercase;
    letter-spacing: 2px;
  }
  /* background: url(${background}) no-repeat center center / cover; */
`;

export default AboutComponent;
