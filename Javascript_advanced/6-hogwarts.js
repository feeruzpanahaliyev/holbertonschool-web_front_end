
const studentHogwarts = () => {

    let privateScore = 0;
    let name = null;

    function changeScoreBy(points) {
        privateScore += points;
    }

    const setName = (newName) => {
        name = newName;
    };

    const rewardStudent = () => {
        changeScoreBy(1);
    };

    const penalizeStudent = () => {
        changeScoreBy(-1);
    };

    const getScore = () => {
        return `${name}: ${privateScore}`;
    };

    return {
        setName,
        rewardStudent,
        penalizeStudent,
        getScore,
    };
};

//Instance for Harry
const harry = studentHogwarts();
harry.setName("Harry");

/*
harry.rewardStudent();
harry.rewardStudent();
harry.rewardStudent();
harry.rewardStudent();
*/

for (let i = 0; i < 4; i++) {
    harry.rewardStudent();
}

console.log(harry.getScore());



//Instance for Draco
const draco = studentHogwarts();
draco.setName("Draco");
draco.rewardStudent();

/*
draco.penalizeStudent();
draco.penalizeStudent();
draco.penalizeStudent();
*/

for (let i = 0; i < 3; i++) {
    draco.penalizeStudent();
}

console.log(draco.getScore());