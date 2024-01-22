// export function Text() {

// }
type Props = {
  // children: React.ReactNode;
  children: string;
};

export const Text = ({ children }: Props) => {
  return <p className="text-stone-900 dark:text-white">{children}</p>;
};
