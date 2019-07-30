function unique(ary){
    let obj = {};
    for(let i=0;i<ary.length;i++){
        let item = ary[i];
        if(obj[item]!==undefined){
            ary[i] = ary[ary.length-1];
            ary.length--;
            i--;
            continue;
        }
        obj[item] = item;
    }
    return ary;
}
let aa = [1,2,3,1,2,3];
aa = unique(aa);
aa.sort((a,b)=>a-b);
console.log(aa);