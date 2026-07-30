   function isPalindrome(s) {
       
        const cleanedString = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
        let i =0;
        let j = cleanedString.length-1;
        while(i<j){
            console.log(cleanedString[i], cleanedString[j]);
            if(cleanedString[i] !== cleanedString[j]) return false;
            i++;
            j--;
        }
        return true;
    }

    const s="Was it a car or a cat I saw?"
    console.log(isPalindrome(s));
