import { styled } from "styled-components";

// Header Container
export const HeaderContainer = styled.div`
  position: absolute;
  left: 13.12%;
  right: 60.97%;
  top: 15.14%;
  font-style: normal;
  font-weight: 700;
  font-size: 70px;
  line-height: 100%;
  text-transform: capitalize;
  margin-bottom: 20px; 
`;

// Paragraph Container
export const ParagraphContainer = styled.div`
  position: absolute;
  left: 17.06%;
  right: 53.47%;
  top: calc(15.14% + 70px + 30px);
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 28px;
  margin-bottom: 20px;
`;

// Button Container
export const ButtonContainer = styled.div`
  position: absolute;
  width: 423px;
  height: 70px;
  left: 188px;
  top: calc(
    15.14% + 70px + 20px + 28px + 20px
  ); 
`;

// Button Rectangle
export const ButtonRectangle = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background: ${(props) => props.theme.colors.secondary};
  border-radius: 83px;
  z-index: 1; /* Ensure it's above other elements */
`;

// Button Text
export const ButtonText = styled.div`
  position: absolute;
  width: 100%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 28px;
  text-align: center;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  mix-blend-mode: normal;
  z-index: 2;
`;

// Home Icon Container
export const HomeIconContainer = styled.div`
  position: absolute;
  width: 444px;
  height: 444px;
  left: 657px;
  top: 114px;
`;
