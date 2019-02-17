import React from "react";
import { Button } from "antd";
import styled from "styled-components";
import enhance from "./card.enhance";
import Progress from "../Progress";
import { calHP, calSTR, calWEAK, calDMG } from "../../utils/caculateStatus";
import { primary } from "../../constants/colors";

const Flex = styled.div`
  display: flex;
  width: 100%;
`;

const Image = styled.img`
  height: 160px;
`;

const Layout = styled(Flex)`
  flex-direction: row;
  box-shadow: 1px 1px ${primary.cardBoxShadow};
  height: 200px;
  margin-bottom: 15px;
  padding: 15px;
  background-color: ${primary.cardBackground};

  &:hover {
    box-shadow: 1px 2px ${primary.cardBoxShadowHover};
  }
`;

const GroupCard = styled(Flex)`
  flex-direction: column;
  width: ${props => props.width};
  margin-left: 20px;
`;

const TextName = styled.span`
  font-size: 30px;
  font-family: Gaegu;
`;

const TextAdd = styled.span`
  font-size: 20px;
  color: ${primary.colorAddButton};
`;

const Spec = styled.div`
  height: 20px;
`;

const Card = props => {
  const { data, onClick, index, pokedex } = props;
  const { name, imageUrl, hp, attacks, weaknesses } = data;
  return (
    <Layout>
      <Image src={imageUrl} />
      <GroupCard width={pokedex ? "49%" : "100%"}>
        <TextName>{name}</TextName>
        <Spec />
        <Progress percent={calDMG(attacks)} text="DMG" />
        <Progress percent={calHP(hp)} text="HP" />
        <Progress percent={calSTR(attacks)} text="STR" />
        <Progress percent={calWEAK(weaknesses)} text="WEAK" />
      </GroupCard>
      {pokedex ? (
        <Button
          style={{
            fontSize: "22px",
            color: primary.colorAddButton,
            marginLeft: "20px",
            boxShadow: "none",
            backgroundColor: "transparent",
            borderColor: "transparent"
          }}
          onClick={() => onClick(index)}
          icon="close"
        />
      ) : (
        <Button
          style={{
            boxShadow: "none",
            backgroundColor: "transparent",
            borderColor: "transparent"
          }}
          onClick={() => onClick(data)}
        >
          <TextAdd>Add</TextAdd>
        </Button>
      )}
    </Layout>
  );
};

Card.defaultProps = {
  onHandleList: () => {},
  index: 0,
  pokedex: false
};

export default enhance(Card);
