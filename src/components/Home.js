import React from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";
import myImag from "../image/bola.jpg"
import { FaTwitter, FaSlack} from 'react-icons/fa';


const Home = () => {

  return (
    <Container>
      <MainHolder>
        <ProfileSection>
            <ImageHolder src={myImag} alt="bola" id="profile_img"/>
            <SocialHolder>
                <span className="forTwitter" id="twitter"><h2><FaTwitter/></h2> @BolaAfarait</span>
                <span  id="slack" style={{   visibility: 'hidden' }}><h2><FaSlack/></h2> @ZoulayMan</span>
            </SocialHolder>
        </ProfileSection>

        <LinkSection>
            <ButtonZuriTeam id="btn_zuri">
                <LinkText to="#" onClick={(e) => {
            e.preventDefault();
           window.location.href= "https://training.zuri.team/";
            
        }} target='blank'>Zuri Team</LinkText>
            </ButtonZuriTeam>



            <ButtonZuriBooks id="books">
                <LinkText  onClick={(e) => {
            e.preventDefault();
           window.location.href= "http://books.zuri.team";
            
        }} target='blank'>Zuri Books</LinkText>
            </ButtonZuriBooks>

            <ButtonPythonBook id="book__python">
               <LinkText onClick={(e) => {
            e.preventDefault();
           window.location.href= "https://books.zuri.team/python-for-beginners?ref_id=ZoulayMan";
            
        }} target='blank'>Python Book</LinkText>
            </ButtonPythonBook>

            <ButtonCodersBgCheck id="pitch">
              <LinkText onClick={(e) => {
            e.preventDefault();
           window.location.href= "https://background.zuri.team/";
            
        }} target='blank'>Coders Background</LinkText>
            </ButtonCodersBgCheck>

            <ButtonDesignBook id="book__design">
               <LinkText to="#" onClick={(e) => {
            e.preventDefault();
           window.location.href= "https://books.zuri.team/design-rules";
            
        }} target='_blank'>Design Book</LinkText>
            </ButtonDesignBook>
        </LinkSection>
      </MainHolder>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100vh;
  margin: 0;
  padding: 0;
  display:flex;
  justify-content:center;
  align-items:center;
  background:linear-gradient(darkviolet, deeppink);

`;

const MainHolder = styled.div`
    width:40%;
    height:85vh;

`;

const ProfileSection = styled.div`
width: 100%;
height: 40%;
    display:flex;
    flex-direction: column;
    justify-content:center;
    align-items:center;
`;

const ImageHolder = styled.img`
    width:90px;
    height:90px;
    border-radius:50%;
    margin-top:10px;
    margin-bottom:10px;
`;

const SocialHolder = styled.div`
margin-top:5px;
margin-bottom:5px;
color: white;
span{
  display:flex;

  h2{
  padding-right:0.5em;

  }
}
  
`;

const LinkSection = styled.div`
  width: 100%;
  height: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  
`;

const ButtonZuriTeam = styled.button`
  width: 80%;
  height: 3em;
  border-radius: 5px;
  border: none;


`;

const ButtonZuriBooks = styled.button`
  width: 80%;
  height: 3em;
  border-radius: 5px;
  border: none;
`;


const ButtonPythonBook = styled.button`
  width: 80%;
  height: 3em;
  border-radius: 5px;
  border: none;
`;

const ButtonCodersBgCheck = styled.button`
  width: 80%;
  height: 3em;
  border-radius: 5px;
  border: none;
`;

const ButtonDesignBook = styled.button`
  width: 80%;
  height: 3em;
  border-radius: 5px;
  border: none;

`;


const LinkText = styled(Link)`
    text-decoration: none;
    font-size: 1.2em;
    font-weight: bolder;
    color: blue;
`;


export default Home;
