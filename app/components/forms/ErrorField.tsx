import { Text } from '@radix-ui/themes';

interface ErrorFieldProps {
  message?: string;
}

export default function ErrorField({ message }: ErrorFieldProps) {
  if (!message) return null;

  return (
    <Text color="red" as="p">
      {message}
    </Text>
  );
}
