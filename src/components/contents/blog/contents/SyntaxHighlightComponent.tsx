import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import hybrid from 'react-syntax-highlighter/dist/esm/styles/hljs/hybrid';

const SyntaxHighlightComponent: React.SFC = props => {
  return <SyntaxHighlighter style={hybrid}>{props.children}</SyntaxHighlighter>;
};

export default SyntaxHighlightComponent;
