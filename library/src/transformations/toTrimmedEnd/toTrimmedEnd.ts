/**
 * Creates a transformation function that removes the trailing white space and
 * line terminator characters from a string.
 *
 * @returns A transformation function.
 */
export function toTrimmedEnd() {
  return (input: string) => input.trimEnd();
}
