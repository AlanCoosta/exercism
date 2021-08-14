const COLORS: Record<string, number> = {
  black: 0,
  brown: 1,
  red: 2,
  orange: 3,
  yellow: 4,
  green: 5,
  blue: 6,
  violet: 7,
  grey: 8,
  white: 9,
};
const MAX_COLORS = 2;

export class ResistorColor {
  constructor(private colors: string[]) {
    if (colors.length < MAX_COLORS)
      throw new Error("At least two colors need to be present");

    this.colors = colors;
  }

  value = (): number =>
    Number(
      this.colors
        .slice(0, 2)
        .map((item) => COLORS[item])
        .join("")
    );
}
