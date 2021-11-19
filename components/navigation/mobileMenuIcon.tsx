import styled from "styled-components";
import { FaGripLines, FaGripLinesVertical } from "react-icons/fa";
import React from "react";

interface IProps {
  showMenu: boolean;
  setShowMenu: (value: boolean | ((showMenu: boolean) => boolean)) => void;
}

export const IconWrapper = styled.div`
  display: none;
  position: absolute;
  background-color: #110e1b;
  width: fit-content;
  height: auto;
  padding: 0.5em;
  right: 0;
  margin: 1em;
  border-radius: 50%;
  border: 1px solid #8273af;
  z-index: 99;

  @media (max-width: 768px) {
    display: flex;
  }
`;

const MobileMenuIcon: React.FC<IProps> = ({ showMenu, setShowMenu }) => {
  return (
    <IconWrapper>
      {showMenu ? (
        <FaGripLinesVertical
          size={26}
          color="#8273af"
          onClick={() => setShowMenu(!showMenu)}
        />
      ) : (
        <FaGripLines
          size={26}
          color="#8273af"
          onClick={() => setShowMenu(!showMenu)}
        />
      )}
    </IconWrapper>
  );
};
export default MobileMenuIcon;
