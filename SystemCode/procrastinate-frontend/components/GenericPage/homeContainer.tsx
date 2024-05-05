import React from "react";
import { useRouter } from "next/router";
import {
  StyledHomeIcon,
  StyledMainHeader,
  StyledParagraph,
  ButtonContainer,
  ButtonRectangle,
  ButtonText,
} from "./style";
import HomeIconSvg from "../home/homeIconSvg";
import { getUserData } from "../Authentication/authenticationUtils";

interface HomeContainerProps {
  title: string;
  content: string;
  buttonText: string;
}

const HomeContainer: React.FC<HomeContainerProps> = ({
  title,
  content,
  buttonText,
}) => {
  const router = useRouter();

  const handleRedirect = async () => {
    const signedIn = await getUserData();
    const path = signedIn == null ? "signin" : "/summarize";
    router.replace(path);
  };

  return (
    <div>
      <StyledHomeIcon>
        <HomeIconSvg />
      </StyledHomeIcon>
      <StyledMainHeader>{title}</StyledMainHeader>
      <StyledParagraph>{content}</StyledParagraph>
      {buttonText !== "" && (
        <ButtonContainer onClick={handleRedirect}>
          <ButtonRectangle />
          <ButtonText>{buttonText}</ButtonText>
        </ButtonContainer>
      )}
    </div>
  );
};

export default HomeContainer;
