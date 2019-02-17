import React from "react";
import styled from "styled-components";
import { Input } from "antd";
import searchImg from "../../search.png";
import enhance from "./search.enhance";

const SearchImg = styled.img`
  width: 24px;
  height: 24px;
`;

const Search = props => {
  const { onPressEnter, onChange, defaultValueSearch, value } = props;

  return (
    <Input
      placeholder="Find Pokemon"
      style={{ height: "40px" }}
      onChange={onChange}
      value={value || defaultValueSearch}
      suffix={
        <SearchImg src={searchImg} onClick={() => onPressEnter(props.value)} />
      }
      onPressEnter={() => onPressEnter(props.value)}
    />
  );
};

export default enhance(Search);
