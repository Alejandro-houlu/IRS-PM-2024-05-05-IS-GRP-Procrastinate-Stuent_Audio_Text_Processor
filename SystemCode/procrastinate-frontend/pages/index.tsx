import HomeContainer from "@/components/GenericPage/homeContainer";
import {
  HOME_BUTTON,
  HOME_CONTENT,
  HOME_TITLE,
} from "@/components/GenericPage/strings";
import Layout from "@/components/layout";
import React from "react";

const HomePage: React.FC = () => {
  return (
    <Layout>
      <HomeContainer
        title={HOME_TITLE}
        content={HOME_CONTENT}
        buttonText={HOME_BUTTON}
      />
    </Layout>
  );
};

export default HomePage;
