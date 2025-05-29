const myObject = {  //  In object we used the for in loop to iterable the array.
    js: 'JavaScript',
    py: 'Python',
    cpp: 'C++',
    go: 'Go Lang',
    rb: 'Ruby'
}

for (const key in myObject) {
    console.log(`${key} shortcut is for ${myObject[key]}`);
}

const programmingLanguage = ["Js","py","C","cpp","Java","rb","jsx"];

for (const key in programmingLanguage){
    console.log(programmingLanguage[key]);
}

const map = new Map()
map.set('IN',"INDIA");
map.set('RU',"RUSSIA");
map.set('FR',"FRANCE");
map.set('IN',"India");

for (const key in map){
    console.log(key);
}