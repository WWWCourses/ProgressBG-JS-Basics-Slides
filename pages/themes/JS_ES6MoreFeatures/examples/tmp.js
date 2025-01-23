const obj = {a:true, b:false};
const inverted = {...obj, a:!obj.a}
console.log(inverted);