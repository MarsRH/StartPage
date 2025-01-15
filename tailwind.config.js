/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js}'],
  theme: {
    extend: {
      colors: {
        //main colors
        'green-1':  '#1AAD19',
        'green-2':  '#2BA245',
        'gray-1':   '#4D4D4D',
        'gray-2':   '#888888',
        'gray-3':   '#AAAAAA',
        'gray-4':   '#F1F1F1',

        //auxiliary colors
        'wgreen':   '#91ED61',
        'wyellow':  '#FFBE00',
        'wlime':    '#EA6853',
        'wpink':    '#F76260',
        'wred':     '#D84E43',
        'wblue':    '#2782D7',
        'wsky':     '#10AEFF',

        //other colors
        'pearly':   '#FDFFFC',
      }
    },
  },
  plugins: [],
}

