import React from "react";
import styled, { css } from "styled-components";

type Props = {};

export const ComponenForStylelint: React.FC<Props> = ({ ...props }) => {
  return <></>;
};

const StyledWrap = styled.div`
  display: flex;
  background-color: #cccccc;
  align-items: center;
  padding: 20px 10px;
  justify-content: center;
  color: "#333";
`;
