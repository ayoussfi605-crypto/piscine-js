
is.num = (arg) =>  typeof arg == "number" 
    
is.nan = (arg) =>  typeof arg == "number" 

is.str = (arg) =>  typeof arg == "string" 

is.bool = (arg) =>  typeof arg == "boolean" 

is.undef = (arg) =>  typeof arg == "undefined" 

is.def = (arg) =>  typeof arg !== "undefined"

is.arr = (arg) =>  typeof arg == "object"

is.obj = (arg) =>  typeof arg == "object"

is.fun = (arg) =>  typeof arg == "function"

is.truthy = (arg) =>  !!arg;

is.falsy = (arg) =>  !!arg;
