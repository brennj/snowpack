import React from 'react';
import Color from 'color';

export default function Dependency() {
    const color = Color('#7743CE').alpha(0.5).lighten(0.5).hsl().string();
    return <div>The color you are looking for in this dependency is {color}.</div>;
}