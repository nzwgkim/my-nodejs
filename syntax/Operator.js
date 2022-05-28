    // undefined: 초기화가 되지 않음. null: null로 초기화됨을 의미
    // Nullish Coalescing Operator: undefined와 null에서 모두 동작
    function printName1(name){
        return name??'falsy'; 
    }
    console.log(printName1('*** Nullish Coalescing'));
    console.log(printName1());
    console.log(printName1(undefined));
    console.log(printName1(null));
    console.log(printName1(0));
    console.log(printName1(-0));
    console.log(printName1(NaN));

    // default parameter: undefined에서만 동작. null은 해당되지 않는다.
    function printName2(name='falsy'){ 
        return name; // Nullish Coalescing Operator
    }
    console.log(printName2('*** Default Parameter'));
    console.log(printName2());
    console.log(printName2(undefined));
    console.log(printName2(null));

    function logicalOR(val){
        return val || 'falsy';
    }
    console.log(logicalOR('*** LogicalOR'));
    console.log(logicalOR());
    console.log(logicalOR(undefined));
    console.log(logicalOR(null));
    console.log(logicalOR(0));
    console.log(logicalOR(-0));
    console.log(logicalOR(NaN));    
    console.log(logicalOR(""));