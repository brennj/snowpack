import React from 'react';
import Color from 'color';

export default function Dependency() {
  const color = Color('#ff0000').lighten(0.5).hex();
  return <div>This is {color}</div>;
}
