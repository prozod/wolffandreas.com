import { NavigationLinks } from "@/constants/navigationlinks";
import Link from "next/link";
import { MobileMenuWrapper, MobileNavItem } from "./mobilenav.styles";
import { createContext } from "react";

const MobileNav = () => {
  return (
    <MobileMenuWrapper>
      {NavigationLinks.map((item, idx) => {
        return (
          <Link key={idx} href={item.path}>
            <MobileNavItem>{item.title}</MobileNavItem>
          </Link>
        );
      })}
    </MobileMenuWrapper>
  );
};

export default MobileNav;
