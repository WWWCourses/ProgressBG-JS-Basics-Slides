const handleError = (err) => {
    console.error(`Error: ${err}`);
}

const prepareDinner = async () => {
    console.log(`prepareDinner will take 2000ms`);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const dinner = 'pizza';
            const success = true;

            if (success) {
                console.log(`${dinner} is prepared!`);
                resolve(dinner);
            } else {
                reject(`Error: Can not buy dinner!`);
            }
        }, 2000);
    });
};

const eatDinner = async (dinner) => {
    console.log(`eatDinner will take 500ms`);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const success = true;

            if (success) {
                console.log(`${dinner} is eaten!`);
                resolve(`Sweet Dreams after ${dinner}`);
            } else {
                reject(`Error: Can not eat dinner!`);
            }
        }, 500);
    });
};

const goToBed = (msg) => {
    console.log(`${msg}`);
};

const executeTasks = async () => {
    try {
        const prepareRes = await prepareDinner();
        const eatRes = await eatDinner(prepareRes);
        goToBed(eatRes);
    } catch (err) {
        handleError(err);
    }
};

executeTasks();

console.log(`Do something else while prepare=>eat=>gotToBed...`);
