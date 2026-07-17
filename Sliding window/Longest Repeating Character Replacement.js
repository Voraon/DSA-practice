function characterReplacement(s, k) {
    const freq = new Map();
    let l = 0, maxFreq = 0, maxLen = 0;

    for (let r = 0; r < s.length; r++) {
        freq.set(s[r], (freq.get(s[r]) ?? 0) + 1);
        maxFreq = Math.max(maxFreq, freq.get(s[r]));

        if (r - l + 1 - maxFreq > k) {
            freq.set(s[l], freq.get(s[l]) - 1);
            l++;
        }

        maxLen = Math.max(maxLen, r - l + 1);
    }

    return maxLen;
}

// Example usage:
console.log(characterReplacement("ABAB", 2)); // Should output 4
console.log(characterReplacement("AABABBA", 1)); // Should output 4