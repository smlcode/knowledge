// Given a string text, you want to use the characters of text to form as many instances of the word "balloon" as possible.

// You can use each character in text at most once.

// Return the maximum number of instances that can be formed.

//Input: text = "loonbalxballpoon"
// Output: 2

function maxNumberOfBalloons(text: string): number {

    //map to determine how many times each character is available.
    const charsAvailableMap: Map<string,number> = new Map();
    for(let char of text) {
        if(charsAvailableMap.has(char)) {
            charsAvailableMap.set(char, charsAvailableMap.get(char) + 1);
        } else {
            charsAvailableMap.set(char, 1);
        }
    }

    let balloons: number = 0;
    let isFinalLoop: boolean = false;

    //While balloon characters are still available
    while(!isFinalLoop) {
        //Check for how many times balloon can be created from the map.
        for(let balloonChar of 'balloon') {
            const charsAvailable: number = charsAvailableMap.get(balloonChar);
            //If the character is available, decrease availability by 1.
            //Otherwise we can no longer create another instance so return the balloons.
            if(charsAvailableMap.has(balloonChar) && charsAvailable > 0) {
                charsAvailableMap.set(balloonChar, charsAvailable - 1);
                //If the character has 0 available usages we cannot spell balloon again.
                //Mark this loop as the final loop.
                if(charsAvailable - 1 === 0) {
                    isFinalLoop = true;
                }
            } else {
                return balloons;
            }
        }
        balloons++;
    }
    return balloons;
}

function maxNumberOfBalloons2(text: string): number {
    //Track count of balloon chars in map.
    const balloonCharMap: Map<string, number> = new Map();
    const balloon: string = 'balloon';

    //loop thru text.
    for(let char of text) {
        //if text char is a balloon char add it to the map or if it exists increment it.
        if(balloon.includes(char)) {
            if (balloonCharMap.has(char)) {
                let count: number = balloonCharMap.get(char) + 1;
                balloonCharMap.set(char, count);
            } else {
                balloonCharMap.set(char, 1);
            }
        }

    }

    for(let char of 'balon') {
        if(!balloonCharMap.has(char)) {
            return 0;
        }
    }

    //ex output
    //b-2, a-2, l-3, o-4, n-2

    //divide l and o by 2 since they are used twice to form balloon.
    if(balloonCharMap.has('l')) {
        balloonCharMap.set('l', Math.floor(balloonCharMap.get('l')/2));
    }

    if(balloonCharMap.has('o')) {
        balloonCharMap.set('o', Math.floor(balloonCharMap.get('o')/2));
    }

    let minValue = balloonCharMap.get('b');
    balloonCharMap.forEach((value) => {
        if(value < minValue) {
            minValue = value;
        }
    });
    return minValue ?? 0;

};

function maxNumberOfBalloons3(text: string): number {
    // Initialize counts array for 'balon' characters (we only need these 5)
    const counts = new Array(5).fill(0);

    // Map each character to its index for faster lookup
    const charToIndex = new Map([
        ['b', 0],
        ['a', 1],
        ['l', 2],
        ['o', 3],
        ['n', 4]
    ]);

    // Count occurrences
    for (const char of text) {
        const index = charToIndex.get(char);
        if (index !== undefined) {
            counts[index]++;
        }
    }

    // l and o appear twice in "balloon"
    counts[2] = Math.floor(counts[2] / 2); // l
    counts[3] = Math.floor(counts[3] / 2); // o

    // Return the minimum count
    return Math.min(...counts);
}