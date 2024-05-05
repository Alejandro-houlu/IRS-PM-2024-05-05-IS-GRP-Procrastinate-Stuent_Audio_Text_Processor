import React from "react";
import { useRouter } from "next/router";
import { HOME_BUTTON, HOME_CONTENT, HOME_TITLE } from "./strings";
import { ButtonContainer, ButtonRectangle, ButtonText } from "./style";
import HomeIconSvg from "./homeIconSvg";
import { isSignedin } from "../api/apiCalls";
import {
  StyledHomeIcon,
  StyledMainHeader,
  StyledParagraph,
} from "../GenericPage/style";

const HomeContainer: React.FC = () => {
  const router = useRouter();

  const handleRedirect = async () => {
    const path = (await isSignedin()) ? "/summarize" : "signup";
    router.replace(path);
  };

  return (
    <div>
      <StyledHomeIcon>
        <HomeIconSvg />
      </StyledHomeIcon>
      <StyledMainHeader>{HOME_TITLE}</StyledMainHeader>
      <StyledParagraph>{HOME_CONTENT}</StyledParagraph>
      <ButtonContainer onClick={handleRedirect}>
        <ButtonRectangle />
        <ButtonText>{HOME_BUTTON}</ButtonText>
      </ButtonContainer>
    </div>
  );
};

export default HomeContainer;
