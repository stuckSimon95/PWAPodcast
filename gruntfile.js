module.exports = function(grunt)
{
    grunt.loadNpmTasks('grunt-contrib-connect');
    // proj config
    grunt.initConfig({
        connect: {
            localhost : {
                options: {
                    port: 15000,
                    keepalive: true
                }
            }
        }
    });
};