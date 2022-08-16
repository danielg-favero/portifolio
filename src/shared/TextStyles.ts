import React from 'react'

interface ITextStyles {
  [key: string]: React.CSSProperties
}

export class TextStyles {
  static desktop: ITextStyles = {
    tab_button_text: {
      fontSize: '1rem',
      lineHeight: '85%',
    },
  }
}
