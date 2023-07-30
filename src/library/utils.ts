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

export function splitArrayByIndex<T>(arr: T[]) {
    const evenIndexesArray: T[] = [];
    const oddIndexesArray: T[] = [];
  
    arr.forEach((element, index) => {
      if (index % 2 === 0) {
        evenIndexesArray.push(element);
      } else {
        oddIndexesArray.push(element);
      }
    });
  
    return {
      evenIndexes: evenIndexesArray,
      oddIndexes: oddIndexesArray,
    };
  }
  