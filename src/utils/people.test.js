import { addInfosToPeople } from './people'
import people from './input.json'

describe('utils', () => {
    describe('people', () => {
        describe('addInfosToPeople', () => {
            const peopleArray = addInfosToPeople({people})
            it('should add firstname to a person informations', () => {
                expect(peopleArray[0].firstname).toBeDefined()
                expect(peopleArray[0].firstname).toBe('Pierre')
            })
            it('should add birthYear to a person informations', () => {
                expect(peopleArray[0].birthYear).toBeDefined()
                expect(peopleArray[0].birthYear).toBe(1995)
            })
            // xit sauter un test
            // it.only pour lancer seulement le test
        })
    })
})