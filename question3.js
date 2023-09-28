// Question 3: Write a function that converts HEX to RGB. Then Make that function autodect the formats so that if you enter HEX color format it returns RGB and if you enter RGB color format it returns HEX. Bonus: Release this tool as a npm package.

function hexToRgb(hex) {
    const hexInt = parseInt(hex, 16);
    const r = (hexInt >> 16) & 255;
    const g = (hexInt >> 8) & 255;
    const b = hexInt & 255;

    return `${r},${g},${b}`;
}

function rgbToHex(r, g, b) {
    return `#${((1 << 24) | (r << 16) | (g << 8) | b).toString(16).slice(1)}`;
}

function convertColor(...args) {
    if (args.length === 1 && typeof args[0] === 'string') {
        const input = args[0];
        if (input.startsWith('#')) {
            // HEX to RGB conversion
            return hexToRgb(input.slice(1)); // Remove the '#' character
        } else if (/^rgb\(\s*\d+\s*,\s*\d+\s*,\s*\d+\s*\)$/.test(input)) {
            // RGB string to HEX conversion
            const match = input.match(/\d+/g);
            const r = parseInt(match[0]);
            const g = parseInt(match[1]);
            const b = parseInt(match[2]);
            return rgbToHex(r, g, b);
        } else {
            // Invalid input format
            return 'Invalid input format';
        }
    } else if (
        args.length === 3 &&
        args.every((arg) => typeof arg === 'number')
    ) {
        // RGB values to HEX conversion
        const [r, g, b] = args;
        return rgbToHex(r, g, b);
    } else {
        // Invalid input format
        return 'Invalid input format';
    }
}

console.log(convertColor('#00dd0e')); // 0, 221, 14

console.log(convertColor(0, 221, 14)); // #00dd0e
