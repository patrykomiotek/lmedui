import { Text, type Props as TextProps } from "../Text";
import { Button } from "../Button";

type Props = {
  text: TextProps["children"];
};

export const Card = ({ text }: Props) => {
  return (
    <div>
      <Text>{text}</Text>
      <Button label="Click me" />
    </div>
  );
};
