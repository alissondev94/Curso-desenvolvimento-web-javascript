const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for( let n in nums){
    if(n == 5) {
        break
    }
    console.log(`${n} = ${nums[n]}`)
}

for(let n2 in nums) {
    if( n2 == 5) {
        continue
    }
    console.log(`.${n2} = ${nums[n2]}`)
}

externo: for (let n3 in nums){
    for (let n4 in nums){
        if (n3 == 2 && n4 == 3) break externo
        console.log(`par = ${n3},${n4}`)
    }
}