function merge(arr, p, q, r) {
    const Nl = r-p+1;
    const Nr = q-r;
    const leftArr = [], rightArr = [];
    let i, j;
    for (i = 0; i < Nl; i++) {
        leftArr.push(arr[p+i]);
    }
    for (j = 0; j< Nr; j++) {
        rightArr.push(arr[r+j+1]);
    }
    i = 0;
    j = 0;
    let k = p;

    while(i < Nl && j < Nr) {
        if (leftArr[i] <= rightArr[j]) {
            arr[k] = leftArr[i];
            i++;
        } else {
            arr[k] = rightArr[j];
            j++;
        }
        k++;
    }

    while(i < Nl) {
        arr[k] = leftArr[i];
        i++;
        k++;
    }
    while(j < Nr) {
        arr[k] = rightArr[j];
        j++;
        k++;
    }
}

function mergeSort(arr, p, q) {
    if (p >= q) {
        return;
    }
    const r = parseInt((p+q)/2);

    mergeSort(arr, p, r);
    mergeSort(arr, r+1, q);

    merge(arr, p, q, r);
}