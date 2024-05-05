import HomeContainer from "@/components/GenericPage/homeContainer";
import {
  ABOUT_TITLE,
  ABOUT_CONTENT,
  ABOUT_BUTTON,
} from "@/components/GenericPage/strings";
import Layout from "@/components/layout";
import React from "react";

const AboutPage: React.FC = () => {
  return (
    <Layout>
      <HomeContainer
        title={ABOUT_TITLE}
        content={ABOUT_CONTENT}
        buttonText={ABOUT_BUTTON}
      />
    </Layout>
  );
};

export default AboutPage;
