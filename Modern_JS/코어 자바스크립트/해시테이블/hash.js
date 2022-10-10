let map = new Map()

map.set(0, 1) // key: 0
map.set('isKey', 2) // key: 'isKey'
map.set({a:1}, 3) // key : {a:1}
map.set(() => {console.log('function')}, 4) // key: () => {console.log('function')}

map.set(0, 3) // 덮어쓰기 가능

// key값으로 value 찾기
map.get(0)
map.get('isKey')
map.get({a:1})
map.get(() => {console.log('function')})

// key값으로 value 여부 확인하기
map.has(0)
map.has('isKey')
map.has({a:1})
map.has(() => {console.log('function')})

// map size 확인하기
map.size // 4

// value 삭제
map.delete(0)
map.delete('isKey')
map.delete({a:1})
map.delete(() => {console.log('function')})



// hash 탐색 : for-of문
// key, value 쌍으로 출력
for(let [key,value] of map) {
    console.log('key:', key, 'value:', value)
}

// key만 출력
for(let key of map.keys()) {
    console.log('key:', key)
}

// value만 출력
for(let value of map.values()) {
    console.log('value:', value)
}

