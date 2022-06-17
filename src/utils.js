const addInformations = ({ people }) => {
    const peopleWithInformations = {...people};

    const arrToReturn = Object.entries(peopleWithInformations).map(([firstname, informations]) => {
			const personWithInformations = {
				firstname,
				...informations,
				birthYear: 2022 - informations.age
			}

			return personWithInformations;

    });

		return arrToReturn;
};

module.exports = { addInformations };