const sortingOrder: any = {
  High: 1,
  Mid: 2,
  Low: 3,
};

export function compare(key: string, order = "asc") {
  return function (a: any, b: any) {
    if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) return 0;

    const first =
      a[key] in sortingOrder ? sortingOrder[a[key]] : Number.MAX_SAFE_INTEGER;
    const second =
      b[key] in sortingOrder ? sortingOrder[b[key]] : Number.MAX_SAFE_INTEGER;

    let result = 0;
    if (first < second) result = -1;
    else if (first > second) result = 1;
    return order === "desc" ? ~result : result;
  };
}
