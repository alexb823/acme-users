import React, { Fragment } from 'react';

const Hilite = ({ text, hilite }) => {
  if (!hilite) return text;
  const regEx = new RegExp(hilite, 'gi');
  const matched = text.match(regEx);
  if (!matched) return text;

  return text.split(regEx).map((str, idx) => {
    return (
      <Fragment key={idx}>
        {str}
        {matched[idx] && <span className="bg-warning">{matched[idx]}</span>}
      </Fragment>
    );
  });
};

export default Hilite;
