var arr = [200, 100, 300];
arr.splice(2, 0, 10000); // splice(start_index, delete_count, items[])
                         // start_index: 변경을 시작할 배열의 시작 index
                         // delete_count: start_index부터 삭제할 개수, 입력되지 않으면 start_index 이후의 모든 값이 삭제

console.log(arr);