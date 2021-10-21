import React,{useRef,useState} from 'react'
import {Container,FormWrap,Icon,FormContent,Form,FormH1,FormLabel,FormInput,FormButton,TextArea,SuccessText} from "../Contact/ContactElements"
import{FaPaperPlane} from "react-icons/fa"
import emailjs from "emailjs-com"

const Result = () =>{
    return <h1>Sent Successfully!</h1>
}
const ContactPage = () => {
    const [result,showResult] = useState(false);
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_oa9ohen', 'template_398n3gi', form.current, 'user_mVjaxwbe0g7r65vGy3BSY')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset();
        showResult(true);
    };
    return (
        <>
        <Container>
            <FormWrap>
                <Icon to="/">Manish</Icon>
                <FormContent>
                    <Form ref={form} onSubmit={sendEmail}>
                        <FormH1>Contact Information</FormH1>
                        <FormLabel >Name</FormLabel>
                        <FormInput type='text' name="name" placeholder= "your name..." required />
                        <FormLabel >Email</FormLabel>
                        <FormInput type='email' name="email" placeholder = "your email..." required />
                        <FormLabel >TextArea</FormLabel>
                        <TextArea  name = "message" placeholder="write your message..."></TextArea>
                        <FormButton type="submit" value="Send">Send <FaPaperPlane/></FormButton>
                        <SuccessText>{result ? <Result/> : null}</SuccessText>
                    </Form>
                </FormContent>
            </FormWrap>
        </Container>
        </>
    )
}

export default ContactPage
