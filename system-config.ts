declare var System: any;

System.config({
    paths: {
        'npm:': 'node_modules/'
    },
    map: {
        'app': 'app',
        'main': 'app/main.js',

        '@angular/core': 'npm:@angular/core/bundles/core.umd.js',
        '@angular/common': 'npm:@angular/common/bundles/common.umd.js',
        '@angular/compiler': 'npm:@angular/compiler/bundles/compiler.umd.js',
        '@angular/platform-browser': 'npm:@angular/platform-browser/bundles/platform-browser.umd.js',
        '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',

        'rxjs':                      'npm:rxjs'
    },
    // packages tells the System loader how to load when no filename and/or no extension
    packages: {
        'app': { main: './main.js', defaultExtension: 'js' },
        'api' : { defaultExtension : 'js' },
        'rxjs': { defaultExtension: 'js' },
    }
});

