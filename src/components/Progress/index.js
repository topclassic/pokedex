import React from "react";
import styled from "styled-components";
import { Progress } from "antd";
import { primary } from "../../constants/colors";

const Flex = styled.div`
  display: flex;
  width: 100%;
`;

const Layout = styled(Flex)`
  flex-direction: row;
  align-items: center;
`;

const TextTitle = styled.span`
  width: 100px;
  font-size: 16px;
  font-weight: bold;
  color: black;
`;

const ProgressComponent = props => {
  const { text, percent } = props;
  return (
    <Layout>
      <TextTitle>{text}</TextTitle>
      <Progress
        style={{ width: "300px" }}
        strokeWidth={20}
        strokeColor={primary.levelTubeValueBackground}
        percent={percent}
        showInfo={false}
      />
    </Layout>
  );
};

export default ProgressComponent;
