export function generatePastelVariations(args: any): any[] {
    let pastelColors = []
    for (let index = 0; index < args.count; index++) {
        // Generate random values for RGB components within a pastel range
        const red = Math.floor(Math.random() * 100) + 150; // 155-255
        const green = Math.floor(Math.random() * 100) + 150; // 155-255
        const blue = Math.floor(Math.random() * 100) + 150; // 155-255

        // Convert RGB to hexadecimal format
        const color = `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`;
        pastelColors.push({ color: color })
    }

    return pastelColors;
}


