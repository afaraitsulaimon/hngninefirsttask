import React from 'react'
import Footer from './Footer'
import styled from 'styled-components'

const Contact = () => {
  return (
    <Container>
        <MainHolder>
            <HeaderHolder>
                <h2>Contact Me</h2>
                <p>Hi there, contact me to ask about anything you have in mind</p>
            </HeaderHolder>

            <FormDivHolder>
                <form>
                    <NameHolder>
                    <FirstNameInputDiv>
                        <label htmlFor="firstName">First name</label>
                        <input type="text" placeholder='Enter your first name' id='first_name'/>
                    </FirstNameInputDiv>
                    
                    <LastNameInputDiv>
                        <label htmlFor="lastName">Last name</label>
                        <input type="text" placeholder='Enter your last name' id='last_name' />
                    </LastNameInputDiv>
                    </NameHolder>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input type="text" placeholder='youremail@email.com' id='email' />
                    </div>

                    <div>
                        <label htmlFor="message">Message</label>
                        <textarea placeholder='Send me a message and i will reply as soon as possible' id='message'/>
                    </div>

                    <div>
                        <input type="checkbox"/>
                        <p>You agree to providing your data to Bola, who may contact you.</p>
                    </div>

                    <div>
                        <button id='btn__submit' type='submit'>Send message</button>
                    </div>
                </form>
            </FormDivHolder>
        </MainHolder>
        <Footer/>
    </Container>
  )
}


const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: green;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const MainHolder = styled.div`
 width: 50%;
  max-height: auto;
  background-color: yellow;
`;

const HeaderHolder = styled.div``;

const FormDivHolder = styled.div`
        width: 100%;
        background-color: aquamarine;
`;

const NameHolder = styled.div`
      
        display: flex;
        justify-content: space-between;
`;


const FirstNameInputDiv = styled.div`

display: flex;
flex-direction: column;

input[type=text] {
    width: 310px;
    height: 2.5em;

}
`

const LastNameInputDiv = styled.div`

display: flex;
flex-direction: column;

input[type=text] {
    width: 310px;
    height: 2.5em;

}
`


export default Contact
