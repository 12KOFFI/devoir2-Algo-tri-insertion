EXPLICATION DU CODE :

const array =[10 , 9 , 8 , 5 , 6 , 2 , 4 , 3 , 1 , 7] initialisation du tableau


 function insertionSort(array) {              creation de la function insertionSort
for (let i = 0; i < array.length; i++) {
    let j = i    initialisation du 2eme compteur j 
    const temp = array[i]      initialisation de temp qui va stoker le tableau  
    while (j>0 && array[j-1]>temp) {  : a la premier iteration j = 1 or 1>0 (vrai)  et array[j-1] = array[0] = 10 or 10 > temp (vrai)  temp stoke 9 a i=1
        array[j]= array[j-1] :   la 2eme case du tableau =  la premier case (10)
        j--              :  j decrement et passe a 0
    }
    array[j] = temp    etant donner que j a decrementer array[0] = temp qui a stoker 9
}
return array   :  [1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 10]

}
let affiche = insertionSort(array)
console.log(affiche);
