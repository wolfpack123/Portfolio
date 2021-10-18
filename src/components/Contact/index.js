import React from 'react'
import {Container,FormWrap,Icon,FormContent,Form,FormH1,FormLabel,FormInput,FormButton,TextArea} from "../Contact/ContactElements"
import{FaPaperPlane} from "react-icons/fa"

const ContactPage = () => {
    return (
        <>
        <Container>
            <FormWrap>
                <Icon to="/">Manish</Icon>
                <FormContent>
                    <Form action="#">
                        <FormH1>Contact Information</FormH1>
                        <FormLabel htmlFor='for'>Name</FormLabel>
                        <FormInput type='name' placeholder= "your name..." required />
                        <FormLabel htmlFor='for'>Email</FormLabel>
                        <FormInput type='email' placeholder = "your email..." required />
                        <FormLabel htmlFor='for'>TextArea</FormLabel>
                        <TextArea  placeholder="write your message..."></TextArea>
                        <FormButton type="submit">Send <FaPaperPlane/></FormButton>
                    </Form>
                </FormContent>
            </FormWrap>
        </Container>
        </>
    )
}

export default ContactPage
