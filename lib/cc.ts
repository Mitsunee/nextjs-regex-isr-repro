export function cc(val: string | (string|false)[]) {
  return typeof val === "string" ? val : val.filter(val => val !== false).join(" ");
}