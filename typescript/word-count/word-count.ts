export function count(text: string) {
  const objectText: Record<string, number> = {};
  return text.split(" ").map((item) => (objectText[item] += 1));
}

const reuslt = count("olly olly in come free");

console.log(reuslt);
