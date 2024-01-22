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
  variant?: "ok" | "cancel" | "confirm";
} & ComponentProps<"button">;
// } & Pick<ComponentProps<"button">, "disabled" | "type">;

// <Button label="Click me" disabled={true} type="submit" />
export const Button = ({
  label,
  color = "clouds",
  bgColor = "midnight-blue",
  variant = "ok",
  ...rest
}: Props) => {
  let backgroundColor = palette[bgColor];
  if (variant === "ok") {
    backgroundColor = palette["emerald"];
  } else if (variant === "cancel") {
    backgroundColor = palette["alizarin"];
  } else if (variant === "confirm") {
    backgroundColor = palette["peter-river"];
  }
  const styles = {
    backgroundColor: backgroundColor,
    color: palette[color],
  };
  return (
    <button type="button" style={styles} {...rest}>
      {label}
    </button>
  );
};

export const OkButton = (props: Props) => {
  return <Button {...props} variant="ok" />;
};

{
  /* <Button label="Click me" disabled={true} type="submit"  /> */
}

{
  /* <Button label="Click me" disabled={true} type="submit" variant="ok"  /> */
}
{
  /* <OkButton label="Click me" disabled={true} type="submit"  /> */
}
