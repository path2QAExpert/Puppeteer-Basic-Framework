module.exports = {
preset: 'jest-puppeteer',
testRegex: './*\\.test\\.js$',
reporters: [
    'default',
    ['jest-html-reporters', {
        publicPath: './reports',
        filename: 'report.html',
        expand: true
    }]
    ]
}