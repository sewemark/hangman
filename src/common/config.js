const API_URL = "https://api.wordnik.com";
const VERSION = "v4";
const API_KEY = "04c6vre3iaqmv7kw3ztqyqn050a3s4m6qvpezalm76uqv2t6o";

const Base = `${API_URL}/${VERSION}`;
const WordsBase = `${Base}/words.json`;
const WordDefinitionBase = `${Base}/word.json`;
export const ApiRoutes = {
  ApiBaseUrl: API_URL,
  Nodes: {
    WordsBase,
    GetOneRandomWord: `${WordsBase}/randomWords?hasDictionaryDef=true&maxCorpusCount=-1&minDictionaryCount=1&maxDictionaryCount=-1&minLength=5&maxLength=-1&limit=1&api_key=${API_KEY}`,
    WordDefinitionBase: `${WordDefinitionBase}/XXX/definitions?limit=5&includeRelated=false&useCanonical=false&includeTags=false&api_key=${API_KEY}`
  }
};
