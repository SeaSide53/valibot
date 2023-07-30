/**
 * Creates a async custom transformation function.
 *
 * @param action The transform action.
 *
 * @returns A async transformation function.
 */
export function toCustomAsync<TInput>(
  action: (input: TInput) => TInput | Promise<TInput>
) {
  return (input: TInput) => action(input);
}
