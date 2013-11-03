require.config({
    paths: {
        crafty: "libs/crafty"
    }
});

require(["crafty"], function(Crafty) {
    Crafty.init(500, 500);
    
});