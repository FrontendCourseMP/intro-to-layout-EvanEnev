/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    colors: {
      white: '#ffffff',
      black: '#212121',
      accent: '#2a84ee',
      secondary: '#2eb897',
      dimmed: '#6c778e',
      orange: '#ffb57f',
      'orange-dimmed': '#fff1d7',
      purple: '#702a8a',
      placeholder: '#c3c3c3',
      grey: '#333333',
    },
    borderColor: {
      green: '#2eb897',
      secondary: '#DBE1E9',
    },
    backgroundImage: {
      'gradient-green':
        'linear-gradient(91deg, #2eb897 5.69%, #2a84ee 125.81%)',
      'gradient-blue': 'linear-gradient(91deg, #2a84ee 5.69%, #2eb897 125.81%)',
      'gradient-orange':
        'linear-gradient(91deg, #FFF1D7 5.69%, #FFB57F 125.81%)',
      'gradient-dimmed':
        'linear-gradient(180deg, rgba(234, 243, 253, 0.00) 0%, #EAF3FD 50.52%);',
    },
    backgroundColor: {
      white: '#ffffff',
      secondary: '#e8f2fc',
      details: '#f6faff',
      'green-dimmed': '#e7f7f3',
      green: '#2eb897',
      accent: '#2a84ee',
    },
  },
  plugins: [],
};
