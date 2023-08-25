async function randomNumberRequestHandler() {
    const response = await fetch(`https://csrng.net/csrng/csrng.php?min=0&max=100`);
    return await response.json();
}

async function randomNumberHandler()  {
    const randomNumber = randomNumberRequestHandler().then((res) => {
        if(res.length && res[0].random) {
            return res[0].random;
        }
    });

    const timeoutIncrement = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({timeoutComplete: true})
        }, 1000);
    });

    return Promise.all(
        [randomNumber, timeoutIncrement]
    ).then((res) => {
       console.log('res', res);
       //if(res.length) {
           randomNumberHandler()
       //}
    })
}





export default randomNumberHandler;
