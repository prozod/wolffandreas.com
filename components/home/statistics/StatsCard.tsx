import React from "react";
import {
  StatsCardWrapper,
  CardContent,
  Content,
  Title,
} from "./StatsCard.styles";

interface Props {
  title: string;
  description: string;
}

const StatsCard: React.FC<Props> = ({ title, description }) => {
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
