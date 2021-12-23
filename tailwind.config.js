module.exports = {
    purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            fontFamily: {
                alisson: ['Allison'],
                merri: ['Merriweather'],
                got: ['gotFont']

            }
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}