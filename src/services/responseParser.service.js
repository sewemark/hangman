import { InvalidNextWordResponseError } from '../errors/InvalidNextWordResponseError';
import { InvalidWordDefinitionResponseError } from '../errors/InvalidWordDefinitionResponseError';

import Vue from 'vue'

const ResponseParser = {
    init() {
        this.$log = Vue.$log;
    },

    parseNextWordResponse(response) {
        if (response && response.data.length > 0 && response.data[0].word) {
            return response.data[0].word;
        } else {
            this.$log.error('Invalid response from words api');
            throw new InvalidNextWordResponseError();
        }
    },
    parseWordDefinitionResponse(response) {
        if (response && Array.isArray(response.data)) {
            return response.data.map(item=> item.text.replace(/(&nbsp;|<([^>]+)>)/ig, ''));
        } else {
            this.$log.error('Invalid response from words api');
            throw new InvalidWordDefinitionResponseError();
        }

    }
}
export default ResponseParser;