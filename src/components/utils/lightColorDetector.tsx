export const getTextColor = (background_color: string) => {
    const rgb = parseInt(background_color.slice(1), 16);
    const r = (rgb >> 16) & 0xff;
    const g = (rgb >> 8) & 0xff;
    const b = (rgb >> 0) & 0xff;

    // Calculate relative luminance
    const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;

    // Choose text color based on luminance
    return luminance > 0.5 ? "#000000" : "#FFFFFF";
};