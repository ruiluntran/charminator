import {ReactElement} from 'react';
import {charminatorProps} from './types/charminator.props';

export function Charminator(props: charminatorProps): ReactElement {

  const colorRegex = /^#[0-9A-F]{6}$/i;

  if (props.color && !colorRegex.test(props.color)) {
    throw new Error('Invalid color format.');
  }


  if (props.value.length > 1) {
    const pStyle = {fontSize: '14px'};
    return (
      <div style={{padding: '30px 0'}}>
        <div style={{
          fontSize: '28px',
          color: '#ff0000'
        }}>
          This isn’t a word party! It’s a solo gig!
        </div>
        <p style={pStyle}>
          Please reduce your character count to exactly 1. If you're trying to render a whole word, might I suggest
          using &lt;Wordinator /&gt;`?
        </p>
        <p style={pStyle}>
          Oh wait, we don’t have that—because this library is proudly and absurdly dedicated to ONE
          lonely character at a time!
        </p>
      </div>
    );
  }

  let value = props.value;

  if (props.toUpperCase) {
    value = value.toUpperCase();
  }

  if (props.toLowerCase) {
    value = value.toLowerCase();
  }


  return <span className={props.className ? props.className : ''} style={{
    color: props.color ? props.color : 'inherit',
    fontSize: props.size ? props.size : 'inherit'
  }}>{value}</span>;
}
