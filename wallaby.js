module.exports=() => {
    return {
        files:[
            'script/*.js',
            'style/*.css',
            '*.html',
            'code/*.js'
        ],
        env:{
            kind:'chrome'
        }
    };
};