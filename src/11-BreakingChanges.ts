// lib.d.ts Changes
/*
    - nejvíc změn se týká některých DOM typů
    - největší změno je odebrání typu property origin z document objektu (doporučuje se používat self.origin)
*/

// Properties Overriding Accessors (and vice versa) is an Error
/*
class Base {
    get foo() {
        return 100;
    }
    set foo(value) {
        // ...
    }
}

class Derived extends Base {
    foo = 10;
}
*/

/*
class Base {
    prop = 10;
}

class Derived extends Base {
    get prop() {
        return 100;
    }
}
*/

// Operands for delete must be optional.
/*
interface Thing {
    prop: string;
}

function f(x: Thing) {
    delete x.prop;
}
*/

// Usage of TypeScript’s Node Factory is Deprecated
// Více zde: https://github.com/microsoft/TypeScript/pull/35282