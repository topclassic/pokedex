import React from "react";
import { primary } from "../../constants/colors";
import ClickOutHandler from "react-onclickout";
import * as R from "ramda";
import styled from "styled-components";
import Search from "../../components/Search";
import Card from "../../components/Card";
import { Radio } from "antd";

const { Group: RadioGroup } = Radio;

const Flex = styled.div`
  display: flex;
  width: 100%;
`;

const Spec = styled.div`
  margin-top: 10px;
`;

const Layout = styled(Flex)`
  background-color: ${primary.modalOutside};
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 2;
  position: absolute;
`;

const GroupContent = styled(Flex)`
  background-color: white;
  margin-top: 25px;
  margin-bottom: 25px;
  margin-left: 35px;
  margin-right: 35px;
  border-radius: 5px;
`;

const GroupCard = styled(Flex)`
  flex-direction: column;
  margin: 10px;
`;

const TabCards = styled.div`
  overflow-y: scroll;
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

const SearchList = props => {
  const {
    handleList,
    list,
    cards,
    handleShowList,
    handleSearchPokedex,
    handleSelect,
    select
  } = props;
  return (
    <Layout>
      <ClickOutHandler onClickOut={handleShowList}>
        <GroupContent>
          <GroupCard>
            <Search
              style={{ height: "50px" }}
              placeholder="Find Pokemon"
              onChange={value => handleSearchPokedex(value)}
              onPressEnter={value => handleSearchPokedex(value)}
            />
            <Spec />
            <RadioGroup onChange={handleSelect} value={select}>
              <Radio value="name">name</Radio>
              <Radio value="type">type</Radio>
            </RadioGroup>
            <TabCards>
              {R.map(d => {
                return (
                  !R.includes(d, list) && (
                    <Card key={d.id} data={d} onClick={handleList} />
                  )
                );
              }, cards)}
            </TabCards>
          </GroupCard>
        </GroupContent>
      </ClickOutHandler>
    </Layout>
  );
};

export default SearchList;
