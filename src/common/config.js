const API_URL = "https://api.wordnik.com";
const VERSION = 'v4';
const API_KEY = '5rcog5gvkgz8veyjdzre7r5u8j04z1a2iqw8rjadng8udnt8d';

const Base = `${API_URL}/${VERSION}`;  
const WordsBase = `${Base}/words.json`;   
const WordDefinitionBase = `${Base}/word.json`
export const ApiRoutes = {
    ApiBaseUrl: API_URL,
    Nodes: {
    WordsBase,
    GetOneRandomWord: `${WordsBase}/randomWords?hasDictionaryDef=true&maxCorpusCount=-1&minDictionaryCount=1&maxDictionaryCount=-1&minLength=5&maxLength=-1&limit=1&api_key=${API_KEY}`,    
    WordDefinitionBase : `${WordDefinitionBase}/XXX/definitions?limit=50&includeRelated=false&useCanonical=false&includeTags=false&api_key=${API_KEY}`
}
}
