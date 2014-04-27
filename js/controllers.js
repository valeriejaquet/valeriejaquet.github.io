var portfolioApp = angular.module('portfolioApp', ['ui.bootstrap']);

portfolioApp.controller('projectListCtrl', function($scope) {

  $scope.projects = [
    {
        'name': 'gstar',
        'title': 'Working with Direct Client – G-Star Raw',
        'thumbnail': './media/thumbs/gstar.jpg',
        'images': [],
        'description': 'G-Star Raw Fall-Winter online campaign on TheVine.com.au website Homepage take over Homepage MREC &amp; half page ad Revenue generated: $15,000'
    },
    {
        'name': 'gocatch',
        'title': 'Working with Direct Client – GoCatch',
        'thumbnail': './media/thumbs/gocatch.jpg',
        'images': [],
        'description': 'iPad and online campaign in the Canberra Times in September and October 2013 iPad full page ad in September received 28,133 impressions, 192 clicks and a click through rate of 0.682%. iPad full page ad in October generated 12,800 impressions, 77 clicks and a click through rate of 0.602%. Homepage MREC &amp; guttering on Canberratimes.com.au tracked really well with a click through rate of 0.38% compared to an industry average of 0.02%. Revenue generated: $10,000 Results: Successful iPad and online campaign with incredibly high response rates.'
    },
    {
        'name': 'bmw',
        'title': 'Working with Direct Client – GoCatch',
        'thumbnail': './media/thumbs/bmw.jpg',
        'images': [],
        'description': 'iPad and online campaign in the Canberra Times in September and October 2013 iPad full page ad in September received 28,133 impressions, 192 clicks and a click through rate of 0.682%. iPad full page ad in October generated 12,800 impressions, 77 clicks and a click through rate of 0.602%. Homepage MREC &amp; guttering on Canberratimes.com.au tracked really well with a click through rate of 0.38% compared to an industry average of 0.02%. Revenue generated: $10,000 Results: Successful iPad and online campaign with incredibly high response rates.'
    },
    {
        'name': 'chambers',
        'title': 'Working with Direct Client – GoCatch',
        'thumbnail': './media/thumbs/chambers.jpg',
        'images': [],
        'description': 'iPad and online campaign in the Canberra Times in September and October 2013 iPad full page ad in September received 28,133 impressions, 192 clicks and a click through rate of 0.682%. iPad full page ad in October generated 12,800 impressions, 77 clicks and a click through rate of 0.602%. Homepage MREC &amp; guttering on Canberratimes.com.au tracked really well with a click through rate of 0.38% compared to an industry average of 0.02%. Revenue generated: $10,000 Results: Successful iPad and online campaign with incredibly high response rates.'
    },
    {
        'name': 'chanel',
        'title': 'Working with Direct Client – GoCatch',
        'thumbnail': './media/thumbs/chanel.jpg',
        'images': [],
        'description': 'iPad and online campaign in the Canberra Times in September and October 2013 iPad full page ad in September received 28,133 impressions, 192 clicks and a click through rate of 0.682%. iPad full page ad in October generated 12,800 impressions, 77 clicks and a click through rate of 0.602%. Homepage MREC &amp; guttering on Canberratimes.com.au tracked really well with a click through rate of 0.38% compared to an industry average of 0.02%. Revenue generated: $10,000 Results: Successful iPad and online campaign with incredibly high response rates.'
    },
    {
        'name': 'dior',
        'title': 'Working with Direct Client – GoCatch',
        'thumbnail': './media/thumbs/dior.jpg',
        'images': [],
        'description': 'iPad and online campaign in the Canberra Times in September and October 2013 iPad full page ad in September received 28,133 impressions, 192 clicks and a click through rate of 0.682%. iPad full page ad in October generated 12,800 impressions, 77 clicks and a click through rate of 0.602%. Homepage MREC &amp; guttering on Canberratimes.com.au tracked really well with a click through rate of 0.38% compared to an industry average of 0.02%. Revenue generated: $10,000 Results: Successful iPad and online campaign with incredibly high response rates.'
    },
    {
        'name': 'dnsw',
        'title': 'Working with Direct Client – GoCatch',
        'thumbnail': './media/thumbs/dnsw.jpg',
        'images': [],
        'description': 'iPad and online campaign in the Canberra Times in September and October 2013 iPad full page ad in September received 28,133 impressions, 192 clicks and a click through rate of 0.682%. iPad full page ad in October generated 12,800 impressions, 77 clicks and a click through rate of 0.602%. Homepage MREC &amp; guttering on Canberratimes.com.au tracked really well with a click through rate of 0.38% compared to an industry average of 0.02%. Revenue generated: $10,000 Results: Successful iPad and online campaign with incredibly high response rates.'
    },
    {
        'name': 'mastercard',
        'title': 'Working with Direct Client – GoCatch',
        'thumbnail': './media/thumbs/mastercard.jpg',
        'images': [],
        'description': 'iPad and online campaign in the Canberra Times in September and October 2013 iPad full page ad in September received 28,133 impressions, 192 clicks and a click through rate of 0.682%. iPad full page ad in October generated 12,800 impressions, 77 clicks and a click through rate of 0.602%. Homepage MREC &amp; guttering on Canberratimes.com.au tracked really well with a click through rate of 0.38% compared to an industry average of 0.02%. Revenue generated: $10,000 Results: Successful iPad and online campaign with incredibly high response rates.'
    },
    {
        'name': 'porters',
        'title': 'Working with Direct Client – GoCatch',
        'thumbnail': './media/thumbs/porters.jpg',
        'images': [],
        'description': 'iPad and online campaign in the Canberra Times in September and October 2013 iPad full page ad in September received 28,133 impressions, 192 clicks and a click through rate of 0.682%. iPad full page ad in October generated 12,800 impressions, 77 clicks and a click through rate of 0.602%. Homepage MREC &amp; guttering on Canberratimes.com.au tracked really well with a click through rate of 0.38% compared to an industry average of 0.02%. Revenue generated: $10,000 Results: Successful iPad and online campaign with incredibly high response rates.'
    },
    {
        'name': 'theiconic',
        'title': 'Working with Direct Client – GoCatch',
        'thumbnail': './media/thumbs/theiconic.jpg',
        'images': [],
        'description': 'iPad and online campaign in the Canberra Times in September and October 2013 iPad full page ad in September received 28,133 impressions, 192 clicks and a click through rate of 0.682%. iPad full page ad in October generated 12,800 impressions, 77 clicks and a click through rate of 0.602%. Homepage MREC &amp; guttering on Canberratimes.com.au tracked really well with a click through rate of 0.38% compared to an industry average of 0.02%. Revenue generated: $10,000 Results: Successful iPad and online campaign with incredibly high response rates.'
    },
    {
        'name': 'thinktank',
        'title': 'Working with Direct Client – GoCatch',
        'thumbnail': './media/thumbs/thinktank.jpg',
        'images': [],
        'description': 'iPad and online campaign in the Canberra Times in September and October 2013 iPad full page ad in September received 28,133 impressions, 192 clicks and a click through rate of 0.682%. iPad full page ad in October generated 12,800 impressions, 77 clicks and a click through rate of 0.602%. Homepage MREC &amp; guttering on Canberratimes.com.au tracked really well with a click through rate of 0.38% compared to an industry average of 0.02%. Revenue generated: $10,000 Results: Successful iPad and online campaign with incredibly high response rates.'
    },
    {
        'name': 'ubank_flyer',
        'title': 'Working with Direct Client – GoCatch',
        'thumbnail': './media/thumbs/ubank_flyer.jpg',
        'images': [],
        'description': 'iPad and online campaign in the Canberra Times in September and October 2013 iPad full page ad in September received 28,133 impressions, 192 clicks and a click through rate of 0.682%. iPad full page ad in October generated 12,800 impressions, 77 clicks and a click through rate of 0.602%. Homepage MREC &amp; guttering on Canberratimes.com.au tracked really well with a click through rate of 0.38% compared to an industry average of 0.02%. Revenue generated: $10,000 Results: Successful iPad and online campaign with incredibly high response rates.'
    },
    {
        'name': 'ubank_wrap',
        'title': 'Working with Direct Client – GoCatch',
        'thumbnail': './media/thumbs/ubank_wrap.jpg',
        'images': [],
        'description': 'iPad and online campaign in the Canberra Times in September and October 2013 iPad full page ad in September received 28,133 impressions, 192 clicks and a click through rate of 0.682%. iPad full page ad in October generated 12,800 impressions, 77 clicks and a click through rate of 0.602%. Homepage MREC &amp; guttering on Canberratimes.com.au tracked really well with a click through rate of 0.38% compared to an industry average of 0.02%. Revenue generated: $10,000 Results: Successful iPad and online campaign with incredibly high response rates.'
    },
    {
        'name': 'uts',
        'title': 'Working with Direct Client – GoCatch',
        'thumbnail': './media/thumbs/uts.jpg',
        'images': [],
        'description': 'iPad and online campaign in the Canberra Times in September and October 2013 iPad full page ad in September received 28,133 impressions, 192 clicks and a click through rate of 0.682%. iPad full page ad in October generated 12,800 impressions, 77 clicks and a click through rate of 0.602%. Homepage MREC &amp; guttering on Canberratimes.com.au tracked really well with a click through rate of 0.38% compared to an industry average of 0.02%. Revenue generated: $10,000 Results: Successful iPad and online campaign with incredibly high response rates.'
    },
  ];
  
});