

export function getChmodOctal(read: boolean, write: boolean, execute: boolean): number {
  // Binary to octal
  let value = 0;
  if (read)
    value += (1 * 2 ** 0);
  if (write)
    value += (1 * 2 ** 1);
  if (execute)
    value += (1 * 2 ** 2);
  return value;
}