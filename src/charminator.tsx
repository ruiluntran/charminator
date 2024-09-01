import {ReactElement} from 'react';
import {charminatorProps} from './types/charminator.props';
import './charminator.scss'

export function Charminator(props: charminatorProps): ReactElement {

  const colorRegex = /^#[0-9A-F]{6}$/i;

  if (props.color && !colorRegex.test(props.color)) {
    throw new Error('Invalid color format.');
  }


  if (props.value.length > 1) {
    return (
      <div className="charminator-error">
        <div className="title">
          This isn’t a word party! It’s a solo gig!
        </div>
        <p>
          Please reduce your character count to exactly 1. If you're trying to render a whole word, might I suggest
          using &lt;Wordinator /&gt;`?
        </p>
        <p>
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
