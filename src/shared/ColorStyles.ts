interface IColorStyles {
  [key: string]: string
}

export class ColorStyles {
  static primary: IColorStyles = {
    '100': '#0B0A14',
    '95': '#0F0E1D',
    '80': '#181635',
    '70': '#29255A',
    '60': '#423B9C',
    '50': '#6219FF',
    '45': '#5001FA',
  }

  static neutral: IColorStyles = {
    '100': '#FEFEFE',
    '60': '#605AA0',
  }
}
