import localFont from 'next/font/local'

const Jost = localFont({
    src: [
      // Default
      {path: './fonts/Jost/ttf/default/Black.ttf', weight: '900', style: 'normal'},
      {path: './fonts/Jost/ttf/default/Extra-Bold.ttf', weight: '800', style: 'normal'},
      {path: './fonts/Jost/ttf/default/Bold.ttf', weight: '700', style: 'normal'},
      {path: './fonts/Jost/ttf/default/Semi-Bold.ttf', weight: '600', style: 'normal'},
      {path: './fonts/Jost/ttf/default/Medium.ttf', weight: '500', style: 'normal'},
      {path: './fonts/Jost/ttf/default/Regular.ttf', weight: '400', style: 'normal'},
      {path: './fonts/Jost/ttf/default/Light.ttf', weight: '300', style: 'normal'},
      {path: './fonts/Jost/ttf/default/Extra-Light.ttf', weight: '200', style: 'normal'},
      {path: './fonts/Jost/ttf/default/Thin.ttf', weight: '100', style: 'normal'},
      // Italic
      {path: './fonts/Jost/ttf/italic/Black.ttf', weight: '900', style: 'italic'},
      {path: './fonts/Jost/ttf/italic/Extra-Bold.ttf', weight: '800', style: 'italic'},
      {path: './fonts/Jost/ttf/italic/Bold.ttf', weight: '700', style: 'italic'},
      {path: './fonts/Jost/ttf/italic/Semi-Bold.ttf', weight: '600', style: 'italic'},
      {path: './fonts/Jost/ttf/italic/Medium.ttf', weight: '500', style: 'italic'},
      {path: './fonts/Jost/ttf/italic/Regular.ttf', weight: '400', style: 'italic'},
      {path: './fonts/Jost/ttf/italic/Light.ttf', weight: '300', style: 'italic'},
      {path: './fonts/Jost/ttf/italic/Extra-Light.ttf', weight: '200', style: 'italic'},
      {path: './fonts/Jost/ttf/italic/Thin.ttf', weight: '100', style: 'italic'},
    ],
})

export default Jost;