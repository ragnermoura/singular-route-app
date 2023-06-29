import React from "react";
import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  background-color: #fff;
  height: 10%;
  z-index: 9;
  margin-top: 10%;
`;

export const AreaView = styled.View`
  flex-direction: row;
`;

export const TextSimple = styled.Text`
  font-size: 20px;
  color: #000;
  font-weight: 700;
  align-items: center;
  justify-content: center;
  margin-left: 9%;
  margin-right: auto;
`;

export const TextSmall = styled.Text`
  font-size: 18px;
  color: #000;
  font-weight: 200;
  align-items: center;
  justify-content: center;
  margin-left: 10%;
  margin-top: 5%;

`;
