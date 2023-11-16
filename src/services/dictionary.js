export async function getWordInformation(word) {
  const response = await fetch(
    `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
  );

  if (!response.ok) {
    console.clear();
  }

  const wordInfo = await response.json();

  return wordInfo;
}
