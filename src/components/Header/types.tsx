import { GlobalProps } from "../types";

export interface HeaderProps extends GlobalProps{
  handleCurrentAuthor: (name: string) => void;
}
