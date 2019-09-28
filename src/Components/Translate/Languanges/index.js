import { messages as englishMessages } from './en';
import { messages as portugueseMessages } from './pt';
import { messages as frenchMessages } from './fr';

const messages = {
    ...englishMessages,
    ...portugueseMessages,
    ...frenchMessages
}

export { messages }