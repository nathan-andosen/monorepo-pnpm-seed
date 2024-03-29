import * as React from 'react'

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'my-element': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    }
  }
}