const mergeSort = (arr, l, r) => {
    if(l >= r) return 
    let m = (l+r)/2
    mergeSort(arr, l, m)
    mergeSort(arr, l, m+1)
}