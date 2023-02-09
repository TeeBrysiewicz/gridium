module.exports = {
  theme: {
    extend: {
      colors: {
        'white': '#FFFFFF',
        'black': '#000000',
        'yellow': '#ecd65b',
        'red': {
          '200': '#fed7d7',
          '300': '#feb2b2',
          '400': '#fc8181',
          '500': '#F04025',
          '600': '#CC2520',
        },
        'green': '#48bb78',
        'accent-green': {
          'regular': '#A7BA6D',
        },
        'accent-orange': {
          'dark': '#FA3802',
          'light': '#F4E7A0'
        },
        'greenish': {
          '100': '#f0fff4',
          '200': '#c6f6d5',
          '300': '#9ae6b4',
          '400': '#68d391',
          '500': '#48bb78',
          '600': '#38a169',
        },
        'purple': {
          '100': '#FAF5FF',
          '200': '#E9D8FD',
          '300': '#C433F8',
          '400': '#B794F4',
          '500': '#9900ff',
          '600': '#805AD5',
          '700': '#6B46C1',
        },
        'pink': {
          '200': '#F5A9A6' // Wildyards Light Pink
        },
        'blue': {
          '100': '#CFE9F3', // Wildyards Light Blue
          '200': '#64BAFA', // Bright Blue
          '300': '#4f7282', // Wildyards Green Blue
          '400': '#0A628E', // Dark Blue
          '500': '#193543', // Black Blue
          '600': '#0F3C5D', // Black Blue 2
          '700': '#0B3643', // Wildyards Dark Blue
        },
        'grey': {
          '100': '#EDF0F2',
          '200': '#C5D1D6',
          '300': '#979797'
        },
        'orange': {
          '100': '#E57F5B',
          '200': '#F1774A',
          '300': '#F05B25',
        },
      },
      spacing: {
       '72': '18rem',
       '84': '21rem',
       '96': '24rem',
      },
      fill: {
        'white': '#FFFFFF',
      },
      fontFamily: {
        'exo-2': 'exo-2',
        'work-sans': 'work-sans',
        'cabin': ['Cabin', 'sans-serif'],
        'quicksand': ['Quicksand', 'sans-serif'],
      },
      boxShadow: {
        'shadow-xs': '0 0 0 1px rgba(0, 0, 0, 0.05)',
        'shadow-sm': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        'shadow-default': '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
        'shadow-md': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'shadow-lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        'shadow-xl': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        'shadow-inner': 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
        'shadow-focus': '0 0 0 3px rgba(66, 153, 225, 0.5)',
        'shadow-none': 'none',
      },
    },
  },
  variants: {
    borderWidth: [ 'responsive', 'active' ],
    fill: [ 'hover', 'group-hover' ],
    padding: [ 'responsive', 'odd', 'even' ],
    margin: [ 'responsive', 'last' ],
    position: ['responsive', 'hover', 'focus'],
    borderRadius: ['last', 'first']
  }
}
