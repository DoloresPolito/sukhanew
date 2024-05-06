import React, { useState } from "react";
import styled from "styled-components";
// import { Title } from "../styles/styles";
// import axios from "axios";
import { ColorRing } from "react-loader-spinner";

const Formulario = () => {
  const [messageSent, setMessageSent] = useState(false);
  const [messageError, setMessageError] = useState(false);
  const [sending, setSending] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    date: "",
    place: "",
    phone: "",
    quantity: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setSending(true);
    // try {
    //   await axios.post("../api/send-email", formData);
    //   // alert('Correo enviado correctamente.');
    //   setSending(false);
    //   setMessageSent(true);
    // } catch (error) {
    //   // alert("Error al enviar el correo.");
    //   setSending(false);
    //   setMessageError(true);
    //   console.error(error);
    // }
  };

  return (
    <ContactSection id="contact">
      {messageSent ? (
        <MessageSentContainer>
          <div>
            <ContactTitle>MUCHAS GRACIAS POR TU MENSAJE</ContactTitle>

            <ContactSubTitle>
              {" "}
              TE RESPONDEREMOS LO ANTES POSIBLE
            </ContactSubTitle>
          </div>
        </MessageSentContainer>
      ) : (

        
        <>
        {messageError ? (<>
        
          <MessageSentContainer>
          <div>
            <ContactTitle>EL MENSAJE NO SE PUDO ENVIAR</ContactTitle>

            <ContactSubTitle>
              {" "}
             POR FAVOR INTENTA MÁS TARDE
            </ContactSubTitle>
          </div>
        </MessageSentContainer>
        
        
        </>) : (<>
        
        
          {sending ? (
            <>
              <RingContainer>
                <div>
                  <ColorRing
                    visible={true}
                    height="80"
                    width="80"
                    ariaLabel="blocks-loading"
                    wrapperStyle={{}}
                    wrapperClass="blocks-wrapper"
                    colors={[
                      "#e15b64",
                      "#f47e60",
                      "#f8b26a",
                      "#abbd81",
                      "#849b87",
                    ]}
                  />
                </div>
              </RingContainer>
            </>
          ) : (
            <>
              <ContactContainer>
                <FormContainer onSubmit={handleSubmit}>
                  <ContactTitle>CONTACTO</ContactTitle>
                  <Row>
                    <Column>
                      <InputContainer>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          placeholder="Nombre y Apellido"
                          value={formData.name}
                          onChange={handleChange}
                        />
                      </InputContainer>
                    </Column>
                    <Column>
                      <InputContainer>
                        <input
                          type="text"
                          id="date"
                          name="date"
                          placeholder="Fecha del evento"
                          value={formData.date}
                          onChange={handleChange}
                        />
                      </InputContainer>
                    </Column>
                  </Row>
                  <Row>
                    <Column>
                      <InputContainer>
                        <input
                          type="text"
                          id="phone"
                          name="phone"
                          placeholder="Teléfono"
                          value={formData.phone}
                          onChange={handleChange}
                        />
                      </InputContainer>
                    </Column>
                    <Column>
                      <InputContainer>
                        <input
                          type="text"
                          id="place"
                          name="place"
                          placeholder="Lugar del evento"
                          value={formData.place}
                          onChange={handleChange}
                        />
                      </InputContainer>
                    </Column>
                  </Row>

                  <Row>
                    <Column>
                      <InputContainer>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          placeholder="Email"
                          value={formData.email}
                          onChange={handleChange}
                        />
                      </InputContainer>
                    </Column>
                    <Column>
                      <InputContainer>
                        <input
                          type="text"
                          id="quantity"
                          name="quantity"
                          placeholder="Cantidad de personas"
                          value={formData.quantity}
                          onChange={handleChange}
                        />
                      </InputContainer>
                    </Column>
                  </Row>

                  <Row>
                    <FullWidthColumn>
                      <InputContainer>
                        <input
                          as="text"
                          id="message"
                          name="message"
                          rows="4"
                          placeholder="Mensaje"
                          className="last"
                          value={formData.message}
                          onChange={handleChange}
                          required
                        />
                      </InputContainer>
                    </FullWidthColumn>
                  </Row>
                  <Row>
                    <Button type="submit">ENVIAR</Button>
                  </Row>
                </FormContainer>
              </ContactContainer>
            </>
          )}
        
        
        
        </>)}
         
        </>
      )}

      {/* <Box>
        <BoxText>
          CONSULTÁ LA FECHA
          <br /> DE TU EVENTO{" "}
        </BoxText>
        <Image src={calendar} alt="calendar" />
      </Box> */}
    </ContactSection>
  );
};

const RingContainer = styled.div`
  width: 80%;
  height: 460px;
  background-color: #6a6f58;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* position: relative; */

  div {
    height: 200px;
    width: 200px;
    margin-left: -200px;
    display: flex;
    @media screen and (max-width: 1000px) {
      margin-left: 0px;
      justify-content: center;
    }
  }
  @media screen and (max-width: 405px) {
    width: 100%;
  }
`;

const ContactSection = styled.div`
  width: 100%;
  height: 500px;
  max-width: 1600px;
  margin: 0 auto;

  @media screen and (max-width: 740px) {
    height: 660px;
  }
`;

const ContactContainer = styled.div`
  width: 80%;
  height: auto;
  background-color: #6a6f58;
  display: flex;
  flex-direction: column;
  position: relative;
  @media screen and (max-width: 405px) {
    width: 100%;
  }
`;

const MessageSentContainer = styled.div`
   width: 80%;
  height: 460px;
  background-color: #6a6f58;
  display: flex;
  flex-direction: column;
  position: relative;
  justify-content: flex-start;
  /* align-items: center; */
  color: #ffffff;
  /* padding-left: 150px;
  padding-top: 80px; */
  justify-content: center;
  align-items: center;

  div{
    max-width: 500px;
    height: 300px;
    margin-left: -200px;

    @media screen and (max-width: 1000px) {
      margin-left: 0px;
    }

  }

  /* @media screen and (max-width: 1040px) {
    padding-left: 50px;
  }

  @media screen and (max-width: 405px) {
    width: 100%;
    padding-left: 0px;
  }

  div {
    max-width: 500px;

    @media screen and (max-width: 1040px) {
      max-width: 350px;
    }

    @media screen and (max-width: 400px) {
      max-width: 300px;
      padding-left: 15px;
    }
  } */
`;

const ContactTitle = styled.h2`
 /* font-family: "Bebas Neue"; */
 font-family: var(--font-bebasneue);
  color: #6a6f58;
  font-weight: 400;
  line-height: 150%;
  font-size: 40px;
  letter-spacing: 2px;
  color: #ffffff;
  margin-left: 20px;
`;

const ContactSubTitle = styled.h2`
 /* font-family: "Bebas Neue"; */
 font-family: var(--font-bebasneue);
  color: #6a6f58;
  font-weight: 400;
  line-height: 150%;
  font-size: 40px;
  letter-spacing: 2px;
  color: #ffffff;
  margin-left: 20px;
  font-size: 19px;
`;

const Box = styled.div`
  height: 410px !important;
  width: 350px;
  background-color: #e0dcc7;
  position: relative;
  top: -440px;
  left: 830px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 1200px) {
    left: 670px;
  }

  @media screen and (max-width: 1040px) {
    left: 650px;
  }

  @media screen and (max-width: 1000px) {
    left: 570px;
  }

  @media screen and (max-width: 1000px) {
    display: none;
  }
`;


const FormContainer = styled.form`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  width: 500px;
  padding: 30px 50px;
  margin-left: 100px;

  @media screen and (max-width: 1000px) {
    margin-left: 10px;
  }

  @media screen and (max-width: 840px) {
    padding: 30px 0px;
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

// Estilos de las columnas
const Column = styled.div`
  flex: 1;
  padding: 0px 20px;
  /* border: 1px solid #ccc; */
`;

// Estilos para la columna de ancho completo
const FullWidthColumn = styled.div`
  flex: 1;
  padding: 10px;
  /* border: 1px solid #ccc; */
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
    font-size: 14px;
    line-height: 10px;
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

const Button = styled.button`
  padding: 10px 20px;
  background-color: #6a6f58;
  color: #fff;
  border: none;
  cursor: pointer;
  align-self: flex-end;

  color: #ffffff; /* Estilos para el color del placeholder */
  /* font-family: "Barlow Condensed", sans-serif; */
  font-family: var(--font-barlowcondensed);
  font-style: regular;
  font-weight: 600;
  font-size: 18px;
  /* margin-left: 18px; */
  border-bottom: 1px solid #ccc;
  max-width: 70px;
  margin-left: 405px;
`;
export default Formulario;