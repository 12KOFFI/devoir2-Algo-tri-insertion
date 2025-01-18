const array =[10 , 9 , 8 , 5 , 6 , 2 , 4 , 3 , 1 , 7]


 function insertionSort(array) {
for (let i = 0; i < array.length; i++) {
    let j = i
    const temp = array[i]
    while (j>0 && array[j-1]>temp) {
        array[j]= array[j-1]
        j--
    }
    array[j] = temp   
}
return array

}
let affiche = insertionSort(array)
console.log(affiche);



