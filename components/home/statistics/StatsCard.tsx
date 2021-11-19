import { Articles } from "@/interfaces/interfaces";
import React from "react";
import {
  StatsCardWrapper,
  CardContent,
  Content,
  Title,
} from "./StatsCard.styles";

const StatsCard: React.FC<Articles> = ({ title, description }) => {
  return (
    <StatsCardWrapper>
      <Title>{title}</Title>
      <CardContent>
        <Content>{description}</Content>
      </CardContent>
    </StatsCardWrapper>
  );
};
export default StatsCard;
