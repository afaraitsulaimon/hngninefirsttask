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

                    <EmailInputDiv>
                        <label htmlFor="email">Email</label>
                        <input type="email" placeholder='youremail@email.com' id='email' />
                    </EmailInputDiv>

                    <MessageInputDiv>
                        <label htmlFor="message">Message</label>
                        <textarea  id='message' placeholder='Send me a message and i will reply as soon as possible'>
                            
                        </textarea>
                    </MessageInputDiv>

                    <TermsHolder>
                        <input type="checkbox"/>
                        <p>You agree to providing your data to Bola, who may contact you.</p>
                    </TermsHolder>

                    <div>
                        <Button id='btn__submit' type='submit'>Send message</Button>
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
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

`



const MainHolder = styled.div`
 width: 50%;
  max-height: auto;
`;

const HeaderHolder = styled.div`

p{
    padding-top: 0.4em;
}
`;

const FormDivHolder = styled.div`
        width: 100%;
        margin-top: 1.5em;
`;

const NameHolder = styled.div`
      
        display: flex;
        justify-content: space-between;

        @media(max-width:675px){
  
                flex-direction: column;
}
`;


const FirstNameInputDiv = styled.div`

display: flex;
flex-direction: column;

input[type=text] {
    width: 305px;
    height: 2.5em;
    padding-left: 0.5em;
    border: 1px solid #D0D5DD;

}
`

const LastNameInputDiv = styled.div`

display: flex;
flex-direction: column;

input[type=text] {
    width: 305px;
    height: 2.5em;
    padding-left: 0.5em;
    border: 1px solid #D0D5DD;
    &:focus{
        border: 3px solid red;
    }   

}


`

const EmailInputDiv = styled.div`
display: flex;
flex-direction: column;
width: 100%;
margin-top: 0.7em;


input[type=email] {
    width: auto;
    height: 2.5em;
    padding-left: 0.5em;
    border: 1px solid #D0D5DD;

}

input[type=email]:focus {
    border: 1px solid #1570EF;

}

@media(max-width:675px){
  
    width: 315px;

}
`;


const MessageInputDiv = styled.div`
display: flex;
flex-direction: column;
width: 100%;
margin-top: 0.7em;


textarea {
    width: auto;
    height: 8.25em;
    padding-left: 0.5em;
    padding-top: 0.5em;
    border: 1px solid #D0D5DD;

    @media(max-width:675px){
  
  width: 310px;

}
}
`;

const TermsHolder = styled.div`
display: flex;
margin-top: 0.5em;
margin-bottom: 0.5em;

@media(max-width:675px){
    width: 310px;
    

}

p{
    padding-left: 10px;
    font-weight: 400;
    font-size: 0.8em;
    line-height: 20px;
  
}



`;

const Button = styled.button`
        width: 100%;
        height: 48px;
        cursor:pointer;
        display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 12px 20px;
gap: 8px;

background: #1570EF;

border: 1px solid #1570EF;

box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
border-radius: 8px;
color: white;

@media(max-width:675px){
  
  width: 315px;

}
`;

export default Contact
