import React from 'react'
import zuriIcon from "../image/Zuri.Internship_Logo.png";
import I4g from "../image/I4G.jpg";
import styled from 'styled-components';

const Footer = () => {
  return (
        
        <FooterStyle>
        <div>
          <img src={zuriIcon} alt="zuri-logo" />
        </div>

        <div>
          <p>HNG Internship 9 Frontend Task</p>
        </div>

        <div>
          <img src={I4g} alt="ingressive-logo" />
        </div>
      </FooterStyle>
  )
}

const FooterStyle = styled.div`
  width: 100%;
  height: auto;
  margin-top: 3em;
  display: flex;
  justify-content: space-around;
  align-items: center;

  @media(max-width:675px){
  
 display: grid;
 place-items: center;

}
`;
export default Footer