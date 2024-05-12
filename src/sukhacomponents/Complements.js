import React from "react";
import styled from "styled-components";

import Image from "next/image";
import traslado from "../../public/icons/traslado.png";
import montaje from "../../public/icons/montaje.png";
import pisos from "../../public/icons/pisos.png";
import clima from "../../public/icons/clima.png";

const Complements = () => {
  return (
    <>
      <ComplementsSection id="complements">
        <ComplementsContainer>
         
          <ComplementsTitle>COMPLEMENTOS</ComplementsTitle>
     
          <ComplementsText>
            Ofrecemos un completo servicio de alquiler de carpas, el cual
            incluye:
          </ComplementsText>

          <IconsContainer>
            <Box>
              <Image src={traslado} alt="traslado" />
              <p> <b> <i>Traslado</i> </b> ida y <br/>  vuelta de la carpa.</p>
            </Box>

            <Box>
              <Image src={montaje} alt="montaje" />
              <p> <b> <i>Montaje y desmontaje</i></b><br/> de la carpas.</p>
            </Box>

            <Box>
              <Image src={pisos} alt="pisos" />
              <p>
                Carpas  <b> <i>aptas para <br/> cesped.</i> </b>
                {/* :césped, arena,<br/> 
                cemento, suelos<br/>  irregulares y pendientes. */}
              </p>
            </Box>

            <Box>
              <Image src={clima} alt="clima" />
              <p>Carpados  <b> <i>impermeables,<br/>  térmicos y refractarios</i></b><br/>  de rayos UV.</p>
            </Box>
          </IconsContainer>
        </ComplementsContainer>

 
        {/* <Bottom>
          <BottomText>
            Además, ofrecemos una <b><i>variedad de complementos </i></b>que pueden
            personalizar su evento aún más, incluyendo fogoneros, luces y pisos.
            Todos estos complementos están disponibles para alquiler
            individualmente, lo que significa que puede elegir solo los que
            mejor se adapten a sus necesidades específicas.<br/><br/> Nuestro servicio de
            alquiler de carpas está <b><i>diseñado para brindar la mejor experiencia
            posible </i></b>a nuestros clientes, asegurando una solución completa y
            personalizada para sus necesidades de evento.
          </BottomText>
        </Bottom> */}


      </ComplementsSection>
    </>
  );
};

const ComplementsSection = styled.div`
  height: auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 1600px;
  margin: 0 auto;
  margin-top: 50px;

  @media screen and (max-width: 1000px) {
  margin-bottom: 40px;
  }

`;

const ComplementsContainer = styled.div`
  width: 90%;
  height: auto;
  display: flex;
  flex-direction: column;
  margin: 0 auto;


`;
const ComplementsTitle = styled.h2`
 font-family: var(--font-bebasneue);
  color: #6a6f58;
  font-weight: 400;
  line-height: 150%;
  font-size: 40px;
  letter-spacing: 2px;
  align-self: flex-start;
`;

const ComplementsText = styled.p`
 font-family: var(--font-barlowsemicondensed);
  color: #6a6f58;
  font-style: regular;
  font-weight: 400;
  font-size: 20px;
  line-height: 30px;
  align-self: flex-start;
  margin-top: -30px;
`;

const IconsContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;

`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 290px;
  height: 370px;

  /* margin-top: -30px; */
  img {
    padding-bottom: 10px;
    width: 250px;
    height: 250px;
  }

  p {
    max-width: 200px;
    /* font-family: "Barlow Semi Condensed", sans-serif; */
    font-family: var(--font-barlowsemicondensed);
    color: #6a6f58;
    font-weight: 400;
    font-size: 15px;
    line-height: 22px;
    text-align: center;
  }
`;
const Bottom = styled.div`
  width: 100%;
  background-color: #e0dcc7;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;

`;

const BottomText = styled.p`
  /* font-family: "Barlow Semi Condensed", sans-serif; */
  font-family: var(--font-barlowsemicondensed);
  color: #6a6f58;
  font-weight: 400;
  font-size: 20px;
  line-height: 28px;
  max-width: 740px;
  padding: 20px 50px;
`;

export default Complements;