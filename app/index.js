function blah(result, ms, exp) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (exp) {
                reject(result)
            } else {
                resolve(result)
            }
        }, ms)
    })
}

async function blah2() {
    try {
        const result = await blah('from await', 1234)
        console.log(result)
        await blah('from await 2', 4321, true)
    } catch (e) {
        console.error(e)
    }
}

blah(123, 1234)
    .then(result => {
        console.log(result)
        return blah(321, 4321, true)
    })
    .catch(error => {
        console.error(error)
    })

blah2();