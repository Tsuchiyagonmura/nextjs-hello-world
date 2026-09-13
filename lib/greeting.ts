export function greet(name: string): string {
  const trimmed = name.trim();
  if (trimmed === "") {
    return "Hello, World!";
  }
  return `Hello, ${trimmed}!`;
}
