// create Promise object:
const p = new Promise((resolve, reject)=>{
    // do promised work asynchronously, like getting data
    setTimeout(() => {
        const data = 'Data fetched...';

        if(data){
            resolve(data)
        }else{
            reject('Error')
        }
    }, 1000);
});

// use promise:
p.then(value => {
    console.log(value);
}, reason => {
    console.error(reason);
});