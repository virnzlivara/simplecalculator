const ROMAN : any[string]= {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1
};

export class Converter {
    public static convertToRoman = (num: number) => {
        let str = '';
        
        for (let i of Object.keys(ROMAN)) {
            let q = Math.floor(num / ROMAN[i]);
            num -= q * ROMAN[i];
            str += i.repeat(q);
        }
        return str;
    }
    public static convertToNumber = (str: string) => { 
        const roman_to_int = (str1: string) => { 
            if(str1 == '') return '';
            var num = char_to_int(str1.charAt(0));
            var pre, curr;
            for(var i = 1; i < str1.length; i++){
                curr = char_to_int(str1.charAt(i));
                pre = char_to_int(str1.charAt(i-1));
                if(curr <= pre){
                    num += curr;
                } else {
                    num = num - pre*2 + curr;
                }
            }

            return num;
        }

        const char_to_int = (c: string) =>{
            switch (c){
                case 'I': return 1;
                case 'V': return 5;
                case 'X': return 10;
                case 'L': return 50;
                case 'C': return 100;
                case 'D': return 500;
                case 'M': return 1000;
                default: return -1;
            }
        }
       
        return roman_to_int(str).toString(); 
    }
}