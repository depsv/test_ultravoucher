function groupAnagrams(words) {
    let anagrams = {};

    for (let i = 0; i < words.length; i++) {
        let word = words[i];
        let sortedWord = word.split('').sort().join('');
    
        if (!anagrams[sortedWord]) {
            anagrams[sortedWord] = [];
        }
    
        anagrams[sortedWord].push(word);
    }

    let result = [];
    for (let key in anagrams) {
        if (anagrams.hasOwnProperty(key)) {
            result.push(anagrams[key]);
        }
    }

    return result;
}

let words = ['cook', 'save', 'taste', 'aves', 'vase', 'state', 'map'];
console.log(groupAnagrams(words));
