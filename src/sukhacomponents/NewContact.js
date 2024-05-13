import React, { useState } from "react";
import styled from "styled-components";
import Image from "next/image";
import phone from "../../public/icons/phone..png";
import instagram from "../../public/icons/ig..png";
import email from "../../public/icons/email..png";

const Formulario = () => {
  return (
    <ContactSection id="contact">
      <ContactContainer>
        <ContactTitle>contactanos</ContactTitle>
        <div className="links">

<div className="link">


        <a
          href="https://www.instagram.com/sukhatents/"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          <Image src={instagram} alt="instagram" />
          Sukha Tents
        </a>
        </div>
        <div className="link">
        <a
          href="https://api.whatsapp.com/send/?phone=543446584076"
          target="_blank"
          rel="noreferrer"
        >
          <Image src={phone} alt="phone" />
          +543446584076
        </a>
        </div>
        <div className="link">
        <a href="mailto:sukhatents@gmail.com">
          {" "}
          <Image src={email} alt="email" />
          sukhatents@gmail.com
        </a>
        </div>
        </div>
      </ContactContainer>
    </ContactSection>
  );
};

const ContactSection = styled.div`
  width: 100%;
  height: 400px;

  background-color: #6a6f58;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 740px) {
    height: 660px;
  }
`;

const ContactContainer = styled.div`
  width: 80%;
  height: 300px;
  display: flex;
  flex-direction: column;
  position: relative;
  max-width: 1600px;

  .links{
    display: flex;
    flex-direction: column;
    margin-left: 20px;
  }

  .link{
    padding-bottom: 15px;
  }
  img {
    height: 22px;
    width: 22px;
    padding-right: 10px;
    position: relative;
    top: 4px;
  }

  a {
    text-decoration: none;
    font-family: var(--font-barlowcondensed);
    color: #e0dcc7;
    font-weight: 300;
    font-size: 25px;
    line-height: 40px;
    letter-spacing: 1px;
    padding-bottom: 10px;


  }

  /* @media screen and (max-width: 740px) {
    top: 50px;
  }

  @media screen and (max-width: 405px) {
    width: 100%;
  } */
`;

const ContactTitle = styled.h2`
  font-family: var(--font-bebasneue);
  color: #e0dcc7;
  font-weight: 400;
  line-height: 150%;
  font-size: 40px;
  letter-spacing: 2px;
  margin-left: 20px;
  margin-top: -10px;
  margin-bottom: 60px;
`;

const FormContainer = styled.form`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  width: 500px;
  padding: 0px 50px;
  margin-left: 100px;

  @media screen and (max-width: 1000px) {
    margin-left: 10px;
  }

  @media screen and (max-width: 840px) {
    padding: 0px 0px;
  }

  @media screen and (max-width: 600px) {
    margin-left: 14px;
  }

  @media screen and (max-width: 520px) {
    width: auto;
  }
`;

const Row = styled.div`
  display: flex;
  flex: ${(props) => (props.fullWidth ? "1" : "0 0 calc(50% - 10px)")};
  margin-right: ${(props) => (props.fullWidth ? "0" : "20px")};
  margin-bottom: 20px;
  gap: 30px;

  @media screen and (max-width: 740px) {
    flex-direction: column;
    width: 300px;
  }

  @media screen and (max-width: 434px) {
    width: 250px;
  }
`;

const InputContainer = styled.div`
  width: 100%;
  position: relative;

  input {
    width: 100%;
    padding: 8px;
    border: none;
    border-bottom: 1px solid #ccc;
    background-color: #6a6f58;
    /* outline: none; */
    color: white;
    letter-spacing: 0.7px;
    font-size: 14px;
    height: 30px;
  }

  .last {
    max-width: 445px;
    margin-left: 9px;
  }
  input::placeholder {
    color: #ffffff; /* Estilos para el color del placeholder */
    /* font-family: "Barlow Condensed", sans-serif; */
    font-family: var(--font-barlowcondensed);
    font-style: regular;
    font-weight: 400;
    font-size: 16px;
    line-height: 10px;
    letter-spacing: 1px;
  }

  input:focus {
    color: #ffffff; /* Estilos para el color del placeholder */
    /* font-family: "Barlow Condensed", sans-serif; */
    font-family: var(--font-barlowcondensed);
    font-style: regular;
    font-weight: 400;
    font-size: 14px;
    line-height: 10px;
    outline: none;
  }
`;

export default Formulario;
