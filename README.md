# Note :

This project is still a two days baby, has no vision yet and i made it because i'm a UI/UX enthusiast. maybe it would be useful,live and maintained by the community one day and maybe never.
you're welcome to contribute.

# Color Generation Project

This project provides utilities for generating color pairs based on different color schemes such as analogous colors and pastel color pairs. The main goal is to assist in creating visually appealing color combinations for various design purposes.

## Features

- **Analogous Color Pairs:**

- **Pastel Color Pairs:** 

- **Monochromatic Conversion:**

- **Live Preview:** A feature that allows live previewing of the colors on a widget (like Card Component)

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
git clone https://github.com/your-username/colorFlow.git
cd colorFlow
npm install
```

# Coming soon

- Will add more components for the live preview feature

# On the long run

- will automate the usage between designers & devs (eg: tailwind config generation)
- will setup authentication & rating to build a community dynamic over the solution

# For collaboration :

contact: hassen.ben.mbarek@gmail.com
