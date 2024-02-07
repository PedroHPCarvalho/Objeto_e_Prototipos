// new Object -> Object.prototype
const ObjA = {
    chaveA: 'A'
};
//__proto__:Object.prototypr
const ObjB = {
    chaveB: 'B'
    //__proto__: ObjA
};

const ObjC = new Object();
ObjC.chaveC = 'C'


Object.setPrototypeOf(ObjB,ObjA)
Object.setPrototypeOf(ObjC,ObjB)
console.log(ObjB.chaveA)
console.log(ObjB)
console.log(ObjC)