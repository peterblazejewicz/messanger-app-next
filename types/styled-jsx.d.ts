import 'react';

declare module 'react' {
  /**
   * Extends React props for Styled JSX
   * @template T
   */
  interface StyleHTMLAttributes<T> extends HTMLAttributes<T> {
    jsx?: boolean;
    global?: boolean;
  }
}
