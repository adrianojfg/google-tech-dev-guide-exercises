//Exercise: https://techdevguide.withgoogle.com/paths/advanced/compress-decompression

// Global variables
let numberOfTests = 0, corrected = 0, failed = 0;

// Functions
function repeatString(rep, string) {
    let output = '', i;
    for (i = 0; i < rep; i++) {
        output += string;
    }
    return output;
}

function decompress(string) {
    let i, start = 0, end = 0, rep = 0, deep = 0, recursion = 0;
    let output = '';

    for (i = 0; i < string.length; i++) {
        if (string.charAt(i) === '[') {
            if (deep === 0) {
                start = i + 1;
            }
            deep++;
        }
        if (string.charAt(i) === ']') {
            deep--;
            if (deep === 0) {
                end = i;
                if (string.substr(start, end - start).includes('[')) {
                    output += repeatString(rep, decompress(string.substr(start, end - start)));
                } else {
                    output += repeatString(rep, string.substr(start, end - start));
                }
                start = 0; end = 0; rep = 0;
            }
        }
        if (string.charAt(i).match(/[a-z]/i) && start === 0) {
            output += string.charAt(i);
        }
        if (string.charAt(i).match(/[0-9]/i) && start === 0) {
            rep += string.charAt(i);
        }
    }

    return output;
}

function computeResult(isCorrected) {
    ++numberOfTests;
    return isCorrected ? ++corrected : ++failed;
}

function unitTest(string, result) {
    numberOfTests++;
    decompress(string) === result ? corrected++ : failed++;
}

// Unit Tests
unitTest('10[a]', 'aaaaaaaaaa');
unitTest('3[abc]4[ab]c', 'abcabcabcababababc');
unitTest('2[3[a]b]', 'aaabaaab');
unitTest('2[2[abbb]c]', 'abbbabbbcabbbabbbc');

// Results
console.log('Corrected:', `${corrected / numberOfTests * 100}%`);
console.log('Failed:', `${failed / numberOfTests * 100}%`);
