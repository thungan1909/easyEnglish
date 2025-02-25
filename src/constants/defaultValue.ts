import { paths } from "../routes/paths";
import { IHeaderState } from "../types/headerContext";

export const defaultHeaderStateValue: IHeaderState = {
  homePageType: 1,
  isInHomePage: false,
};

export const homePaths = [paths.index, paths.home];

export const MAX_FEE = 99999999;
