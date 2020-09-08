///////////////////////////////////////////////////////////////
// Speed Improvements in build mode with --noEmitOnError
///////////////////////////////////////////////////////////////

/*
    Před verzí 4, by kompilace s výsledkem chyby, s kombinací flagů --incremental a --noEmitOnError, byla extrémně pomalá.
    Ve verzi 4 je toto chování opraveno.
    Více zde: https://github.com/microsoft/TypeScript/pull/38853
*/