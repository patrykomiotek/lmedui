import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "./Button";

const meta = {
  title: "Atoms/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "Click me",
  },
};

export const Light: Story = {
  args: {
    label: "Click me",
    color: "midnight-blue",
    bgColor: "clouds",
  },
};

export const Red: Story = {
  args: {
    label: "Click me",
    color: "midnight-blue",
    bgColor: "alizarin",
  },
};
