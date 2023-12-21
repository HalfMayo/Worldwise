import { ReactNode } from "react";

export interface ChildrenProps {
    children: ReactNode
}

export interface ChildrenWProps extends ChildrenProps {
    src: string;
    alt: string;
    link: string;
    center?: boolean
}