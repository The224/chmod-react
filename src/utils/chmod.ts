

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

export function chmodOctalToSymbolic(owner: number, group: number, publicly: number): string {
  let value = "";
  [owner, group, publicly].forEach(octalValue => {
    if (octalValue === 0)
      value += "---"
    else if (octalValue === 1)
      value += "--x"
    else if (octalValue === 2)
      value += "-w-"
    else if (octalValue === 3)
      value += "rw-"
    else if (octalValue === 4)
      value += "r--"
    else if (octalValue === 5)
      value += "r-x"
    else if (octalValue === 6)
      value += "rw-"
    else if (octalValue === 7)
      value += "rwx"
  });
  return value;
}
