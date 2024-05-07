import React from "react";
import styled from "styled-components";
import Image from "next/image";
import front from "../../public/icons/frente.jpg";
import side from "../../public/icons/cenital.jpg";
import capacity1 from "../../public/icons/122.jpg";
import capacity2 from "../../public/icons/152.jpg";

const Technical = () => {
  return (
    <>
      <TechnicalSection id="technical">
        <TechnicalContainer>
        
          <TechnicalTitle>CARPAS SUKHA</TechnicalTitle>
     
          <Box>
            <Measures>
              <TitleDiv>
                <TechnicalSubtitle>Medidas</TechnicalSubtitle>
                {/* <Line /> */}
              </TitleDiv>

              <TechnicalImages>
                <div>
                  <Image src={front} alt="front" />
                </div>
                <div>
                  <Image src={side} alt="side" />
                </div>
              </TechnicalImages>

              <TechnicalText>
                <b> PESO:</b> 65 kg - <b> DIMENSIONES:</b> 6,25 x 14,65 x 22,5
                metros <br />
                <b>
                  {" "}
                  <i> Resistencia a altos vientos</i>
                </b>
              </TechnicalText>
            </Measures>

            <Capacity>
              <TitleDiv>
              <TechnicalSubtitle>Capacidad</TechnicalSubtitle>
              {/* <Line/> */}
              </TitleDiv>
            
              <TechnicalImages>
                <div>
                  <Image src={capacity1} alt="capacity1" />
                  <PhotoText>Capacidad para 122 personas</PhotoText>
                </div>
                <div>
                  <Image src={capacity2} alt="capacity2" />
                  <PhotoText>Capacidad para 152 personas</PhotoText>
                </div>
              </TechnicalImages>
            </Capacity>
          </Box>
        </TechnicalContainer>
      </TechnicalSection>
    </>
  );
};

const TechnicalSection = styled.div`
  height: auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin: 0 auto;
  /* max-width: 1600px; */
  margin-bottom: 50px;

`;

const TechnicalContainer = styled.div`
  width: 90%;
  height: auto;
  display: flex;
  flex-direction: column;
  margin: 0 auto;

  @media screen and (max-width: 870px) {
width: 100%;
  }
`;

const TechnicalTitle = styled.h2`
  font-family: var(--font-bebasneue);
  color: #6a6f58;
  font-weight: 400;
  line-height: 150%;
  font-size: 40px;
  letter-spacing: 2px;
  align-self: flex-start;
`;
const TechnicalSubtitle = styled.h3`
  align-self: flex-start;
  color: #6a6f58;
  font-weight: 400;
  line-height: 150%;
  font-size: 40px;
  letter-spacing: 2px;
  font-family: var(--font-barlowcondensed);
  font-size: 30px;
  font-weight: 600;
`;

const TechnicalText = styled.p`
 font-family: var(--font-barlowsemicondensed);
  color: #6a6f58;
  font-style: regular;
  font-weight: 400;
  font-size: 18px;
  line-height: 30px;
  align-self: center;
  max-width: 320px;
  text-align: center;
`;

const Box = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  justify-content: space-around;
  height: auto;


  @media screen and (max-width: 870px) {
width: 100%;
  }
`;

const TechnicalImages = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap !important;
  height: auto;
  /* margin-left: 10px; */


  img{
    height: 240px;
    width: 310px;

    @media screen and (max-width: 670px) {
width: 100%;
height: auto;
    }
  }

  /* @media screen and (max-width: 670px) {
    flex-direction: column !important;
    justify-content: center;
    align-items: center;
  } */
`;

const Measures = styled.div`
  display: flex;
  flex-direction: column !important;
  /* flex-wrap: wrap; */
  max-width: 670px;
  min-width: 640px;

  height: 200px;
  height: auto;

  @media screen and (max-width: 670px) {
    min-width: 340px;
    padding: 20px;
  }

  @media screen and (max-width: 400px) {
    min-width: 300px;
    padding: 20px;
  }
`;

const Capacity = styled.div`
  display: flex;
  flex-direction: column;
  /* flex-wrap: wrap; */
  max-width: 670px;
  min-width: 640px;

  height: 200px;
  height: auto;

  @media screen and (max-width: 670px) {
    min-width: 340px;
    padding: 20px;
  }

  @media screen and (max-width: 400px) {
    min-width: 300px;
    padding: 20px;
  }
`;

const PhotoText = styled.p`
 font-family: var(--font-barlowsemicondensed);
  color: #6a6f58;
  font-style: regular;
  font-weight: 400;
  font-size: 17px;
  line-height: 30px;
  max-width: 200px;
  align-self: center;
  justify-self: center;
`;

const TitleDiv = styled.div`
  display: flex;
  flex-direction: row;
`;

const Line = styled.div`
  border-top: 2px solid #6a6f58;
  height: 2px;
  width: 90%;
  justify-self: center;
  margin-top: 47px;
  margin-left: 10px;
`;

export default Technical;