def = (arg) =>  typeof arg !== "undefined"
function getAcceleration(data){
    if(def(data.f) && def(data.m) && data.m != 0){
        return data.f/data.m
    } 
    if(def(data.Δv) && def(data.Δt) && data.Δt != 0){
        return data.Δv/data.Δt
    } 
    if(def(data.d) && def(data.t) && data.t != 0){
        return (data.d*2)/(Math.pow(data.t, 2))
    }else{
        return "impossible"
    }

}