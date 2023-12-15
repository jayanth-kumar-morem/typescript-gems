// The "satisfies" operator

// Define a type 'Shade' that can be either a 'ShadeName' or 'ShadeRGB'.
type Shade = ShadeName | ShadeRGB;

// Define possible string values for colors.
type ShadeName = 'yellow' | 'purple' | 'cyan';

// Define a tuple type for RGB values.
type ShadeRGB = [ hue: number, saturation: number, brightness: number ];

// Define a 'Palette' type that maps string keys to 'Shade' values.
type Palette = Record<string, Shade>;

// Create a 'palette' constant with colors using both string and RGB values.
const palette: Palette = {
    main: 'yellow',
    accent: [ 255, 255, 255 ],
    highlight: 'purple',
};

// Destructure the RGB values of the 'accent' color from the 'palette'.
const [h, s, l] = palette.accent;

// Now, 'h', 's', and 'l' hold the RGB values of the 'accent' color.
