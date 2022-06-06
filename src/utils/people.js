export const addInfosToPeople = ({people}) => {
    const peopleObjToArray = Object.entries(people).map(([firstname, informations]) => {
        const personWithInformations = {
            ...informations,
            firstname,
            birthYear: (new Date()).getFullYear() - informations.age
        }

        return personWithInformations
    })

    return peopleObjToArray
}