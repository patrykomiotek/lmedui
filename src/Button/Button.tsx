import { type ComponentProps } from "react";

const palette = {
  emerald: "#2ECC71",
  "peter-river": "#3498DB",
  alizarin: "#E74C3C",
  "midnight-blue": "#2C3E50",
  clouds: "#ECF0F1",
};

type Color = keyof typeof palette;

type Props = {
  label: string;
  color?: Color;
  bgColor?: Color;
} & ComponentProps<"button">;
// } & Pick<ComponentProps<"button">, "disabled" | "type">;

// <Button label="Click me" disabled={true} type="submit" />
export const Button = ({
  label,
  color = "clouds",
  bgColor = "midnight-blue",
  ...rest
}: Props) => {
  const styles = { backgroundColor: palette[bgColor], color: palette[color] };
  return (
    <button type="button" style={styles} {...rest}>
      {label}
    </button>
  );
};

{
  /* <Button label="Click me" disabled={true} type="submit"  /> */
}
