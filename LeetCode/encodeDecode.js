function encode(strs) {
        let result ="";
        let n = strs.length;
        for(let i = 0; i< n; i++){
            result += strs[i].length +"#"+strs[i];
        }
        return result;
    }

    strs = ["Hello","World"]


    let str= encode(strs);
    console.log(str);

    function decode(str) {
        let result =[];
        let n = str.length;
        let i =0;
        while(i< n){
            let j =i;
            while(str[j]!='#'){
                j+=1;
            }
            let len = Number(str.slice(i,j));
            result.push(str.slice(j+1, j+1+len));
             i = j + 1 + len; 
        }
        return result;
    }

    console.log(decode(str));