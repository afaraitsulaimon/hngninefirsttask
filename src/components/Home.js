import React from "react";
import styled from "styled-components";
import myImag from "../image/bola.jpg";
import twitterIcon from "../image/twitter-icon.jpg";
import slackIcon from "../image/slack.jpg";
import { Link } from "react-router-dom";
import Footer from "./Footer";

const Home = () => {
  return (
    <Container>
      <MainHolder>
        <ProfileSection>
          <ImageHolder src={myImag} alt="bola" id="profile__img" />
           <h2 id="twitter__link"> <a href="https://twitter.com/BolaAfarait" target="_blank" rel="noreferrer">BolaAfarait</a></h2>

        </ProfileSection>

        <LinkSection>
          <ButtonTwitter id="twitter">
            <a href="https://twitter.com/BolaAfarait" target="_blank" rel="noreferrer"> Twitter Link</a>

          </ButtonTwitter>


          <ButtonSlackTeam id="slack">
           <a href="https://slack.com" target="_blank" rel="noreferrer">Slack</a>

          </ButtonSlackTeam>


          <ButtonZuriTeam id="btn__zuri">
     
            <a href="https://training.zuri.team/" target="_blank" rel="noreferrer">Zuri Team</a>

          </ButtonZuriTeam>

          <ButtonZuriBooks id="books">
          <a href="http://books.zuri.team" target="_blank" rel="noreferrer">Zuri Books</a>

          
          </ButtonZuriBooks>

          <ButtonPythonBook id="book__python">
           

            <a href="https://books.zuri.team/python-for-beginners?ref_id=ZoulayMan" target="_blank" rel="noreferrer">Python Book</a>

          </ButtonPythonBook>

          <ButtonCodersBgCheck id="pitch">
          <a href="https://background.zuri.team/" target="_blank" rel="noreferrer">Coders Background</a>

           
          </ButtonCodersBgCheck>

          <ButtonDesignBook id="book__design">
          <a href="https://books.zuri.team/design-rules" target="_blank" rel="noreferrer">Design Book</a>

        
          </ButtonDesignBook>

          <Button id="contact">
               <ContactLink to={"/contact"}> Contact Me</ContactLink>
          </Button>
        </LinkSection>

        <SocialHolder>
          <InsideSocialHolder>
          <a href="https://slack.com" target="_blank" rel="noreferrer"><img src={slackIcon} alt="twitterIcons" /></a>
          <a href="https://twitter.com/BolaAfarait" target="_blank" rel="noreferrer"><img src={twitterIcon} alt="twitterIcons" /></a>
          
            
          </InsideSocialHolder>
        </SocialHolder>
      </MainHolder>

    <Footer/>
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
  margin-bottom: 10px;
  a{
  text-decoration: none;
  color: black;
}
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
  height: 380px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

`;

const ButtonTwitter = styled.div`
  width: 60em;
  height: 3em;
  border-radius: 5px;
  border: none;
  background-color: #eaecf0;
  display: flex;
justify-content: center;
align-items: center;

a{
  text-decoration: none;
  color: black;
}

  &:hover{
    background-color:#cecfd0;
  }

  @media(max-width:675px){
  
  width: 60%;
}
`;


const ButtonSlackTeam = styled.div`
 width: 60em;
  height: 3em;
  border-radius: 5px;
  border: none;
  background-color: #eaecf0;
display: none;
justify-content: center;
align-items: center;
a{
  text-decoration: none;
  color: black;

}
  &:hover{
    background-color:#cecfd0;
  }

  @media(max-width:675px){
  
    width: 60%;
}
`;

const ButtonZuriTeam = styled.div`
  width: 60em;
  height: 3em;
  border-radius: 5px;
  border: none;
  background-color: #eaecf0;
  display: flex;
justify-content: center;
align-items: center;
a{
  text-decoration: none;
  color: black;

}

  &:hover{
    background-color:#cecfd0;
  }

  @media(max-width:675px){
  
    width: 60%;
}
`;

const ButtonZuriBooks = styled.div`
  width: 60em;
  height: 3em;
  border-radius: 5px;
  border: none;
  background-color: #eaecf0;
  display: flex;
justify-content: center;
align-items: center;

a{
  text-decoration: none;
  color: black;

}

  &:hover{
    background-color:#cecfd0;
  }

  @media(max-width:675px){
  
  width: 60%;
}
`;

const ButtonPythonBook = styled.div`
  width: 60em;
  height: 3em;
  border-radius: 5px;
  border: none;
  background-color: #eaecf0;
  display: flex;
justify-content: center;
align-items: center;
a{
  text-decoration: none;
  color: black;

}


  &:hover{
    background-color:#cecfd0;
  }

  @media(max-width:675px){
  
  width: 60%;
}
`;

const ButtonCodersBgCheck = styled.div`
  width: 60em;
  height: 3em;
  border-radius: 5px;
  border: none;
  background-color: #eaecf0;
  display: flex;
justify-content: center;
align-items: center;
a{
  text-decoration: none;
  color: black;

}

  &:hover{
    background-color:#cecfd0;
  }
  @media(max-width:675px){
  
  width: 60%;
}

a{
  text-decoration: none;
}
`;

const ButtonDesignBook = styled.div`
  width: 60em;
  height: 3em;
  border-radius: 5px;
  border: none;
  background-color: #eaecf0;
  display: flex;
justify-content: center;
align-items: center;

a{
  text-decoration: none;
  color: black;

}
  &:hover{
    background-color:#cecfd0;
  }

  @media(max-width:675px){
  
  width: 60%;
}
`;


const Button = styled.button`
width: 72em;
height: 3.7em;
border-radius: 5px;
  border: none;
  background-color: #eaecf0;
justify-content: center;
align-items: center;
cursor: pointer;


&:hover{
    background-color:#cecfd0;
  }

@media(max-width:675px){
  
  width: 60%;
}

`;



const ContactLink = styled(Link)`
      text-decoration: none;
      color: black;
      font-size: 1.2em;
      font-weight: lighter;

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


export default Home;
