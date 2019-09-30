import { InvalidNextWordResponseError } from '../errors/InvalidNextWordResponseError';

const ResponseParser = {
    parseNextWordResponse(response) {
        if (response && response.data.length > 0 && response.data[0].word) {
            return response.data[0].word;
        } else {
            this.$log.error('Invalid response from words api');
            throw new InvalidNextWordResponseError();
        }
    }
}
export default ResponseParser;