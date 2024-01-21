# Note :

This project is still a two days baby, has no vision yet and i made it because i'm a UI/UX enthusiast. maybe it would be useful,live and maintained by the community one day and maybe never.
you're welcome to contribute.

# Color Generation Project

This project provides utilities for generating color pairs based on different color schemes such as analogous colors and pastel color pairs. The main goal is to assist in creating visually appealing color combinations for various design purposes.

## Features

- **Analogous Color Pairs:** Generate color pairs based on analogous color schemes with customizable parameters such as count, interpolation factor, shift angle, and direction.

- **Pastel Color Pairs:** Generate pastel color pairs by adjusting the saturation of base colors and interpolating between them.

- **Color Conversion:** Utility functions for converting between different color representations (hex, RGB, HSL).

## Configuration

Adjust the parameters in the function calls to customize the color generation process according to your needs.

generateAnalogousPairs: Parameters include count, lerp, shiftAngle, direction, baseColor1, and baseColor2.

generatePastelPairs: Parameters include count, lerp, and direction.

## Example: Generating Analogous Color Pairs

import { generateAnalogousPairs, AnalogousDirection } from './colorGenerator';

const analogousPairs = generateAnalogousPairs(5, 0.5, 30, AnalogousDirection.Clockwise, '#3498db', '#e74c3c');

## Example: Generating Pastel Color Pairs

import { generatePastelPairs } from './colorGenerator';

const pastelPairs = generatePastelPairs(5, 0.5, true);

## Installation

Clone the repository:

```
git clone https://github.com/your-username/color-generation-project.git
cd color-generation-project
npm install
```

# Coming soon

- Redux
- Swith between types (analogous / pastel / monochromatic colors)

# On the long run

- will automate the usage between designers & devs (eg: tailwind config generation)
- will setup authentication & rating to build a community dynamic over the solution

# For collaboration :

contact: hassen.ben.mbarek@gmail.com
