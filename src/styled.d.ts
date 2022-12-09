import "styled-components"

declare module "styled-components" {
  export interface DefaultTheme {
    vertical:{
      textColor: string,
      bgColor: string,
      activeColor: string,
      iconColor: string,
    },
    StickySliderNav: {
      bgColor: string,
      lineColor: string,
      highLightColor: string,
    }
  }
}