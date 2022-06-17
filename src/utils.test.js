import file from './test.json';
import { addInformations } from './utils';

// const file = require('./test.json');
// const { addInformations } = require('./utils');

beforeAll(() => {
    console.log('testing addInformations');
});

describe('utils', () => {
    describe('addInformations', () => {
        const testResult = addInformations({ people: file });
        it('should have firstname', () => {
            expect(testResult[0].firstname).toBeDefined();
            expect(testResult[0].firstname).toBe('jeason');
        })
        it('should have birth year', () => {
            expect(testResult[0].birthYear).toBeDefined();
            expect(testResult[0].birthYear).toBe(1995);
        })
    })
});
