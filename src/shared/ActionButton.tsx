import React from "react"
import AnchorLink from "react-anchor-link-smooth-scroll"
import { SelectedPage } from "./types";

type Props = {
    children: React.ReactNode;
    setSelectedPage: (value: SelectedPage) => void;
};

const ActionButton = ({ children, setSelectedPage}: Props) => {
  return (
    <AnchorLink
        className="rounded-full text-white text-lg bg-myprimary-200 px-12 py-2 hover:bg-myprimary-100 hover:text-mysecondary-300"
        onClick={() => setSelectedPage(SelectedPage.Register)}
        href={`#${SelectedPage.Register}`}
    >
        {children}
    </AnchorLink>
  );
};

export default ActionButton