export function html(
  strings: TemplateStringsArray,
  ...values: unknown[]
): string {
  return String.raw({ raw: strings }, ...values);
}

export function getHash(): string {
  const url = new URL(window.location.href);
  return url.hash;
}

export function setHash(value: string) {
  const url = new URL(window.location.href);
  url.hash = "#" + value;
  history.replaceState(null, "null", url);
}
