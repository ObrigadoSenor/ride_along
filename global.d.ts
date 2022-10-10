import "styled-components";
import "styled-components/native";

import {
  ThemeTemplateInterface,
  ThemeDefaultInterface,
} from "./src/theme/theme";

declare module "styled-components" {
  export interface DefaultTheme
    extends ThemeTemplateInterface,
      ThemeDefaultInterface {}
}
declare module "styled-components/native" {
  export interface DefaultTheme
    extends ThemeTemplateInterface,
      ThemeDefaultInterface {}
}
