import React, { useEffect, useState } from "react";
import styled from "styled-components";
import logo from "../../public/images/logo.png";
// import { Text } from "../styles/styles";
import Image from "next/image";
// import phone from "../../public/assets/icons/phone100.png";
// import instagram from "../../public/assets/icons/instagram.png";
// import email from "../../public/assets/icons/email.png";
// import { Link } from "react-scroll";

const Footer = () => {
  const [width, setWidth] = useState(null);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    handleResize(); // Establecer el ancho inicial

    window.addEventListener("resize", handleResize); // Agregar listener de evento de cambio de tamaño de ventana

    return () => {
      window.removeEventListener("resize", handleResize); // Eliminar listener de evento al desmontar el componente
    };
  }, []);

  const medium = 700;

  return (
    <FooterSection>
      <FooterContainer>
        <LeftColumn>
          <Image src={logo} alt="logo" />

         
        </LeftColumn>

        {width > medium ? (
          <>
            <RightColumn>
              <div className="uno">
                <FooterTitle>Contacto</FooterTitle>

                <a
                  href="https://api.whatsapp.com/send/?phone=543446584076"
                  target="_blank"
                  rel="noreferrer"
                >
                  {/* <Image src={phone} alt="phone" /> */}
                  +543446584076
                </a>

                <a href="mailto:sukhatents@gmail.com">
                  {" "}
                  {/* <Image src={email} alt="email" /> */}
                  sukhatents@gmail.com
                </a>
              </div>

              <div className="dos">
                <FooterTitle>SEGUINOS</FooterTitle>
                <a
                  href="https://www.instagram.com/sukhatents/"
                  target="_blank"
                  rel="noreferrer"
                >
                  {" "}
                  {/* <Image src={instagram} alt="instagram" /> */}
                  Sukha Tents
                </a>
              </div>
              {/* Contenido de la segunda columna derecha */}
            </RightColumn>
          </>
        ) : (
          <>
            <SingleRightColumn>
           
              <FooterTitle>Contacto</FooterTitle>

              <a
                href="https://api.whatsapp.com/send/?phone=543446584076"
                target="_blank"
                rel="noreferrer"
              >
                {/* <Image src={phone} alt="phone" /> */}
                +543446584076
              </a>

              <a href="mailto:sukhatents@gmail.com">
                {" "}
                {/* <Image src={email} alt="email" /> */}
                sukhatents@gmail.com
              </a>
              <a
                href="https://www.instagram.com/sukhatents/"
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                {/* <Image src={instagram} alt="instagram" /> */}
                Sukha Tents
              </a>
        
            </SingleRightColumn>
            
          </>
        )}
      </FooterContainer>

      <CenterText>Sukha Tents 2023 | Todos los derechos reservados</CenterText>
    </FooterSection>
  );
};

const FooterSection = styled.footer`
  display: flex;
  flex-direction: column;
  background-color: #e0dcc7;
`;

const FooterContainer = styled.footer`
  width: 80%;
  background-color: #e0dcc7;
  padding: 20px;
  display: flex;
  align-items: center;
  margin: 0 auto;
  /* max-width: 1600px; */
`;

const LeftColumn = styled.div`
  flex: 1;
  /* padding-left: 80px; */

  @media screen and (max-width: 775px) {
    justify-self: center;
    margin: 0 auto;
  }

  img {
    height: 90px;
    width: auto;
  }
`;

const RightColumn = styled.div`
  display: flex;
  justify-content: flex-end;
  flex: 2;

  img {
    height: 20px;
    width: 20px;
    padding-right: 10px;

    position: relative;
    top: 4px;
  }

  a {
    text-decoration: none;

    /* font-family: "Barlow Condensed", sans-serif; */
    font-family: var(--font-barlowcondensed);
    color: #6a6f58;
    font-weight: 300;
    font-size: 19px;
    line-height: 40px;
    letter-spacing: 1px;

    @media screen and (max-width: 600px) {
      font-size: 14px;
    }
  }
  .uno {
    width: 200px;
    display: flex;
    flex-direction: column;
  }
`;

const SingleRightColumn = styled.div`
  display: flex;
  flex-direction: column;

  img {
    height: 20px;
    width: 20px;
    padding-right: 10px;

    position: relative;
    top: 4px;
  }

  a {
    text-decoration: none;

    /* font-family: "Barlow Condensed", sans-serif; */
    font-family: var(--font-barlowcondensed);
    color: #6a6f58;
    font-weight: 400;
    font-size: 15px;
    line-height: 40px;
    letter-spacing: 1px;

    @media screen and (max-width: 600px) {
      font-size: 14px;
    }
  }

`

const CenterText = styled.div`
  flex: 1;
  text-align: center;
  text-decoration: none;
  /* font-family: "Barlow Condensed", sans-serif; */
  font-family: var(--font-barlowcondensed);
  font-weight: 300;
  font-size: 20px;
  line-height: 40px;
  letter-spacing: 0.5px;
  color: #6a6f58;

  @media screen and (max-width: 600px) {
    font-size: 18px;
  }
`;

const FooterNavText = styled.p`
 /* font-family: 'Barlow Semi Condensed', sans-serif; */
 font-family: var(--font-barlowsemicondensed);
  color: #6a6f58;
  font-style: regular;
  font-weight: 400;
  font-size: 15px;
  line-height: 30px;
  line-height: 1px;
  cursor: pointer;

  @media screen and (max-width: 600px) {
    font-size: 15px;
  }
`;

const FooterTitle = styled.h2`
font-family: var(--font-barlowsemicondensed);
  color: #6a6f58;
  font-style: regular;
  font-weight: 400;
  font-size: 20px;
  font-weight: 600;
  letter-spacing: 1.5px;

  @media screen and (max-width: 600px) {
    font-size: 15px;
  }
`;

const NavLinks = styled.div`
  /* Estilos para los enlaces de navegación */
  display: flex;
  flex-direction: column;
  margin-top: 10px;

  @media screen and (max-width: 775px) {
  }
`;

export default Footer;