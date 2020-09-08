///////////////////////////////////////////////////////////////
// unknown on catch Clause Bindings
///////////////////////////////////////////////////////////////

try {
    // Do some work
} catch (error) {
    // error has type 'any' - have fun!
    console.log(error.message);
    console.log(error.toUpperCase());
    error++;
    error.yadda.yadda.yadda();
}