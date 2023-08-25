import app from "../app";

type RandomNumber = {
    randomNumber: number;
}

type RandomNumberSuccessfulResponse = {
    status: string;
    min: number;
    max: number;
    random: number;
}

type RandomNumberErrorResponse = {
    status: string;
    code: string;
    reason: string;
}

type TimeoutIncrement = {
    timeoutComplete: boolean;
}

type RandomNumberResponse = RandomNumberSuccessfulResponse | RandomNumberErrorResponse;

async function randomNumberRequestHandler(): Promise<RandomNumberResponse[]> {
    const response: Response = await fetch(`https://csrng.net/csrng/csrng.php?min=0&max=100`);
    return await response.json();
}

let randomNumberList: number[] = [];
async function recursiveRandomNumberHandler(): Promise<any> {
    const randomNumber: Promise<RandomNumber | undefined> = randomNumberRequestHandler()
        .then(
            (res: RandomNumberResponse[]) => {
                if (res.length && 'random' in res[0]) {
                    const random: number = res[0].random;
                    return new Promise((resolve): void => {
                        resolve({randomNumber: random})
                    });
                };
            });

    const timeoutIncrement: Promise<TimeoutIncrement> = new Promise((resolve): void => {
        setTimeout((): void => {
            resolve({timeoutComplete: true})
        }, 500);
    });

    return Promise.all(
        [randomNumber, timeoutIncrement]
    ).then(
        (res: [RandomNumber | undefined, TimeoutIncrement]) => {
            if (res.length && res[0] && res[0].randomNumber) {
                randomNumberList.push(res[0].randomNumber);
                app.set('bong', randomNumberList)
            }
            recursiveRandomNumberHandler();
        });
}


export default recursiveRandomNumberHandler;
