interface SetProps {
  attributeName?: string;
  begin?: string;
  to?: string;
}

declare namespace JSX {
  interface IntrinsicElements {
    set: SetProps & React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
  }
}
