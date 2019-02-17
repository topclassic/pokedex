import React from "react";
import { primary } from "../../constants/colors";
import { Icon } from "antd";
import * as R from "ramda";
import enhance from "./pokedex.enhance";
import styled from "styled-components";
import SearchList from "./searchList";
import Card from "../../components/Card";

const Flex = styled.div`
  display: flex;
  width: 100%;
`;

const Layout = styled(Flex)`
  flex-direction: column;
  background-color: white;
  position: relative;
`;

const Header = styled(Flex)`
  justify-content: center;
  align-items: center;
  height: 15%;
`;

const Center = styled(Flex)`
  height: 100%;
`;

const GroupFooter = styled(Flex)`
  background-color: transparent;
  justify-content: center;
  height: 15%;
  position: absolute;
  bottom: 0;
`;

const Footer = styled(Flex)`
  background-color: ${primary.buttomBarBackground};
  margin-top: 40px;
  justify-content: center;
`;

const SubFooter = styled(Flex)`
  background-color: ${primary.buttomBarBackground};
  margin-top: 50px;
  position: absolute;
  height: 55px;
  bottom: 0;
`;

const FooterCircle = styled(Flex)`
  background-color: ${primary.buttomBarBackground};
  align-items: center;
  border-radius: 50%;
  height: 100px;
  width: 100px;
  border-style: solid;
  border-width: 3px;
  border-color: #633d3d24;
  position: absolute;
  top: 0;
`;

const TabCards = styled.div`
  overflow-y: scroll;
  height: 90%;
  width: 100%;
  margin-top: 15px;
  margin-left: 5px;
  ::-webkit-scrollbar {
    width: 12px;
  }
  ::-webkit-scrollbar-track {
    border-radius: 10px;
  }
  ::-webkit-scrollbar-thumb:vertical {
    border-radius: 10px;
    background-color: #474444;
  }
`;

const TextTitle = styled.span`
  font-size: 30px;
  font-weight: bold;
  color: black;
`;

const Content = styled(Flex)`
  width: 49%
  height: 100%;
  flex-direction: column;
`;

const SpecWidth = styled.div`
  width: 14px;
`;

const GroupContent = styled(Flex)`
  flex-direction: row;
`;

const Pokedex = props => {
  const { showList, handleShowList, list, handleRemoveList } = props;
  return (
    <Layout>
      {showList && <SearchList {...props} />}
      <Header>
        <TextTitle>My Pokedex</TextTitle>
      </Header>
      <Center>
        <TabCards>
          <GroupContent>
            <Content>
              {list.map((d, index) => {
                return (
                  index % 2 === 0 && (
                    <Card
                      pokedex
                      key={d.id}
                      onClick={handleRemoveList}
                      index={index}
                      data={d}
                    />
                  )
                );
              })}
            </Content>
            <SpecWidth />
            <Content>
              {list.map((d, index) => {
                return (
                  index % 2 !== 0 && (
                    <Card
                      pokedex
                      key={d.id}
                      onClick={handleRemoveList}
                      index={index}
                      data={d}
                    />
                  )
                );
              })}
            </Content>
          </GroupContent>
        </TabCards>
        <GroupFooter>
          <Footer>
            <FooterCircle>
              <Icon
                onClick={handleShowList}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "40px",
                  width: "100%",
                  height: "100%",
                  borderRadius: "50%",
                  zIndex: 1,
                  color: "white"
                }}
                type="plus"
              />
            </FooterCircle>
          </Footer>
          <SubFooter />
        </GroupFooter>
      </Center>
    </Layout>
  );
};

export default enhance(Pokedex);
