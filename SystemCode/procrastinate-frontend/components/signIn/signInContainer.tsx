import React from "react";
import { useRouter } from "next/router";
import SignInForm from "./signInForm";
import { SIGN_IN_ERROR, SIGN_IN_TITLE } from "../strings";
import { ContentHeader, StyledLink, Title } from "../style";
import { signInAPI } from "../api/apiCalls";
import { SignInRequestBody } from "../api/requestBody";
import { saveUserData } from "../Authentication/authenticationUtils";
import { SIGNUP, SUMMARIZE } from "../Navbar/navPaths";

const SignInContainer: React.FC = () => {
  const router = useRouter();

  const handleSignIn = async (username: string, password: string) => {
    const requestBody: SignInRequestBody = {
      username: username,
      password: password,
    };
    try {
      const response = await signInAPI(requestBody);
      saveUserData(response.username, response.email, response.token);
      router.replace(SUMMARIZE.path).then(() => {
        window.location.reload();
      });
    } catch (error) {
      console.error(SIGN_IN_ERROR, error);
    }
  };

  return (
    <div>
      <ContentHeader>
        <Title>{SIGN_IN_TITLE}</Title>
      </ContentHeader>
      <SignInForm onSignIn={handleSignIn} />
      <StyledLink href={SIGNUP.path}>{SIGNUP.item}</StyledLink>
    </div>
  );
};

export default SignInContainer;
