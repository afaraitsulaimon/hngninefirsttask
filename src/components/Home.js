import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import myImag from "../image/bola.jpg";
import twitterIcon from "../image/twitter-icon.jpg";
import slackIcon from "../image/slack.jpg";
import zuriIcon from "../image/Zuri.Internship_Logo.png";
import I4g from "../image/I4G.jpg";

const Home = () => {
  return (
    <Container>
      <MainHolder>
        <ProfileSection>
          <ImageHolder src={myImag} alt="bola" id="profile_img" />
          <h2>Afarait Sulaimon</h2>
        </ProfileSection>

        <LinkSection>
          <ButtonTwitter id="btn_zuri">
            <LinkText
              to="#"
              onClick={(e) => {
                e.preventDefault();
                window.location.href = "https://training.zuri.team/";
              }}
              target="blank"
            >
              @BolaAfarait
            </LinkText>
          </ButtonTwitter>

          <ButtonZuriTeam id="btn_zuri">
            <LinkText
              to="#"
              onClick={(e) => {
                e.preventDefault();
                window.location.href = "https://training.zuri.team/";
              }}
              target="blank"
            >
              Zuri Team
            </LinkText>
          </ButtonZuriTeam>

          <ButtonZuriBooks id="books">
            <LinkText
              onClick={(e) => {
                e.preventDefault();
                window.location.href = "http://books.zuri.team";
              }}
              target="blank"
            >
              Zuri Books
            </LinkText>
          </ButtonZuriBooks>

          <ButtonPythonBook id="book__python">
            <LinkText
              onClick={(e) => {
                e.preventDefault();
                window.location.href =
                  "https://books.zuri.team/python-for-beginners?ref_id=ZoulayMan";
              }}
              target="blank"
            >
              Python Book
            </LinkText>
          </ButtonPythonBook>

          <ButtonCodersBgCheck id="pitch">
            <LinkText
              onClick={(e) => {
                e.preventDefault();
                window.location.href = "https://background.zuri.team/";
              }}
              target="blank"
            >
              Coders Background
            </LinkText>
          </ButtonCodersBgCheck>

          <ButtonDesignBook id="book__design">
            <LinkText
              onClick={(e) => {
                e.preventDefault();
                window.location.href = "https://books.zuri.team/design-rules";
              }}
              target="_blank"
            >
              Design Book<sub>Free Design Book</sub>
            </LinkText>
          </ButtonDesignBook>
        </LinkSection>

        <SocialHolder>
          <InsideSocialHolder>
            <img src={slackIcon} alt="twitterIcons" />
            <img src={twitterIcon} alt="twitterIcons" />
          </InsideSocialHolder>
        </SocialHolder>
      </MainHolder>

      <Footer>
        <div>
          <img src={zuriIcon} alt="zuri-logo" />
        </div>

        <div>
          <p>HNG Internship 9 Frontend Task</p>
        </div>

        <div>
          <img src={I4g} alt="ingressive-logo" />
        </div>
      </Footer>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  max-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

 
`;

const MainHolder = styled.div`
  width: 80%;
  max-height: auto;
`;

const ProfileSection = styled.div`
  width: 100%;
  height: 30%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ImageHolder = styled.img`
  width: 90px;
  height: 90px;
  border-radius: 50%;
  margin-top: 10px;
  margin-bottom: 10px;
`;

const LinkSection = styled.div`
  width: 100%;
  height: 310px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

const ButtonTwitter = styled.button`
  width: 72em;
  height: 3.2em;
  border-radius: 5px;
  border: none;
  background-color: #eaecf0;

  &:hover{
    background-color:#cecfd0;
  }

  @media(max-width:675px){
  
  width: 60%;
}
`;

const ButtonZuriTeam = styled.button`
  width: 72em;
  height: 3.2em;
  border-radius: 5px;
  border: none;
  background-color: #eaecf0;

  &:hover{
    background-color:#cecfd0;
  }

  @media(max-width:675px){
  
    width: 60%;
}
`;

const ButtonZuriBooks = styled.button`
  width: 72em;
  height: 3.2em;
  border-radius: 5px;
  border: none;

  &:hover{
    background-color:#cecfd0;
  }

  @media(max-width:675px){
  
  width: 60%;
}
`;

const ButtonPythonBook = styled.button`
  width: 72em;
  height: 3.2em;
  border-radius: 5px;
  border: none;

  &:hover{
    background-color:#cecfd0;
  }

  @media(max-width:675px){
  
  width: 60%;
}
`;

const ButtonCodersBgCheck = styled.button`
  width: 72em;
  height: 3.2em;
  border-radius: 5px;
  border: none;
  &:hover{
    background-color:#cecfd0;
  }
  @media(max-width:675px){
  
  width: 60%;
}
`;

const ButtonDesignBook = styled.button`
  width: 72em;
  height: 3.5em;
  border-radius: 5px;
  border: none;

  &:hover{
    background-color:#cecfd0;
  }

  @media(max-width:675px){
  
  width: 60%;
}
`;

const LinkText = styled(Link)`
  text-decoration: none;
  font-size: 12px;
  line-height: 28px;
  color: #101828;
`;

const SocialHolder = styled.div`
  height: 2em;
  margin-top: 1em;
  display: flex;
  justify-content: center;
  align-items: center;

   img{
    &:hover{
      cursor: pointer;
    }
   }
`;

const InsideSocialHolder = styled.div`
  width: 10%;
  display: flex;
  justify-content: space-around;
  align-items: center;

  @media(max-width:675px){
  
    width: 30%;
}
`;

const Footer = styled.div`
  width: 100%;
  height: 4em;
  margin-top: 3em;
  display: flex;
  justify-content: space-around;
  align-items: center;

  @media(max-width:675px){
  
 display: grid;
 place-items: center;

}
`;

export default Home;
