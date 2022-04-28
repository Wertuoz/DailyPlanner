export * from '@rneui/themed';

type RecursivePartial<T> = { [P in keyof T]?: RecursivePartial<T[P]> };

declare module '@rneui/themed' {
  export interface Colors {
    blue10: string;
    blue20: string;
    neutral10: string;
    neutral20: string;
    secondaryYellow10: string;
    secondaryYellow20: string;
    secondaryGreen10: string;
    secondaryGreen20: string;
    secondaryCherry10: string;
    secondaryCherry20: string;
  }

  export interface Fonts {
    archivoBlack: string;
    archivoBold: string;
  }

  export interface SpaceUnits {
    sp4: number;
    sp8: number;
    sp12: number;
    sp16: number;
    sp20: number;
    sp24: number;
    sp28: number;
    sp32: number;
    sp40: number;
  }

  export interface FullTheme {
    colors: RecursivePartial<Colors>;
    fonts: RecursivePartial<Fonts>;
    spaceUnits: RecursivePartial<SpaceUnits>;
  }
}
