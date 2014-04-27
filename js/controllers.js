var portfolioApp = angular.module('portfolioApp', ['ui.bootstrap']);

portfolioApp.controller('filterListCtrl', ['$scope', function ($scope) {
    $scope.filters = ['Everything', 'Branding', 'Digital', 'Print', 'Direct Response'];

    $scope.filterItems = function(filter) {
        console.log($scope.$parent.projects);
        return ;
    }

}])

portfolioApp.controller('projectListCtrl', function($scope) {

  $scope.projects = [
    {
        'name': 'gstar',
        'title': 'Working with Direct Client – G-Star Raw',
        'categories': ['Branding', 'Digital'],
        'position': [0, 0],
        'thumbnail': './media/thumbs/gstar.jpg',
        'images': ['./media/Gstar/Gstar gutter.jpg', './media/Gstar/Gstar mrec.jpg'],
        'description': 'G-Star Raw Fall-Winter online campaign on TheVine.com.au website Homepage take over Homepage MREC &amp; half page ad Revenue generated: $15,000'
    },
    {
        'name': 'bmw',
        'title': 'Working with Agency - BMW',
        'categories': ['Branding', 'Print'],
        'position': [0, 0, 0, 0, 0],
        'thumbnail': './media/thumbs/bmw.jpg',
        'images': ['./media/BMW/BMW cover1.jpg', './media/BMW/BMW cover2.jpg', './media/BMW/BMW DPS.jpg', './media/BMW/BMWpage4.jpg', './media/BMW/BMW wrap.jpg'],
        'description': 'iPad and online campaign in the Canberra Times in September and October 2013 iPad full page ad in September received 28,133 impressions, 192 clicks and a click through rate of 0.682%. iPad full page ad in October generated 12,800 impressions, 77 clicks and a click through rate of 0.602%. Homepage MREC &amp; guttering on Canberratimes.com.au tracked really well with a click through rate of 0.38% compared to an industry average of 0.02%. Revenue generated: $10,000 Results: Successful iPad and online campaign with incredibly high response rates.'
    },
    {
        'name': 'gocatch',
        'title': 'Working with Direct Client – GoCatch',
        'categories': ['Direct Response', 'Digital'],
        'position': [0, 0, 0],
        'thumbnail': './media/thumbs/gocatch.jpg',
        'images': ['./media/Go Catch/gocatch ipad.jpg', './media/Go Catch/gocatch leader.jpg', './media/Go Catch/gocatch mrec.jpg'],
        'description': 'iPad and online campaign in the Canberra Times in September and October 2013 iPad full page ad in September received 28,133 impressions, 192 clicks and a click through rate of 0.682%. iPad full page ad in October generated 12,800 impressions, 77 clicks and a click through rate of 0.602%. Homepage MREC &amp; guttering on Canberratimes.com.au tracked really well with a click through rate of 0.38% compared to an industry average of 0.02%. Revenue generated: $10,000 Results: Successful iPad and online campaign with incredibly high response rates.'
    },
    {
        'name': 'chambers',
        'title': 'Working with Direct Client – Chambers Cellars',
        'categories': ['Direct Response', 'Print'],
        'position': [0],
        'thumbnail': './media/thumbs/chambers.jpg',
        'images': ['./media/Chambers Cellars/Chambers catalogues.jpg'],
        'description': 'iPad and online campaign in the Canberra Times in September and October 2013 iPad full page ad in September received 28,133 impressions, 192 clicks and a click through rate of 0.682%. iPad full page ad in October generated 12,800 impressions, 77 clicks and a click through rate of 0.602%. Homepage MREC &amp; guttering on Canberratimes.com.au tracked really well with a click through rate of 0.38% compared to an industry average of 0.02%. Revenue generated: $10,000 Results: Successful iPad and online campaign with incredibly high response rates.'
    },
    {
        'name': 'chanel',
        'title': 'Working with Agency – Chanel',
        'categories': ['Branding', 'Print'],
        'position': [0],
        'thumbnail': './media/thumbs/chanel.jpg',
        'images': ['./media/Chanel/ChanelWrap.jpg'],
        'description': 'iPad and online campaign in the Canberra Times in September and October 2013 iPad full page ad in September received 28,133 impressions, 192 clicks and a click through rate of 0.682%. iPad full page ad in October generated 12,800 impressions, 77 clicks and a click through rate of 0.602%. Homepage MREC &amp; guttering on Canberratimes.com.au tracked really well with a click through rate of 0.38% compared to an industry average of 0.02%. Revenue generated: $10,000 Results: Successful iPad and online campaign with incredibly high response rates.'
    },
    {
        'name': 'uts',
        'title': 'Working with Direct Client – University of Technology Sydney (UTS)',
        'categories': ['Print', 'Branding', 'Digital'],
        'position': [0, 0],
        'thumbnail': './media/thumbs/uts.jpg',
        'images': ['./media/UTS/UTS 1.jpg', './media/UTS/UTS 2.jpg'],
        'description': 'iPad and online campaign in the Canberra Times in September and October 2013 iPad full page ad in September received 28,133 impressions, 192 clicks and a click through rate of 0.682%. iPad full page ad in October generated 12,800 impressions, 77 clicks and a click through rate of 0.602%. Homepage MREC &amp; guttering on Canberratimes.com.au tracked really well with a click through rate of 0.38% compared to an industry average of 0.02%. Revenue generated: $10,000 Results: Successful iPad and online campaign with incredibly high response rates.'
    },
    {
        'name': 'dior',
        'title': 'Working with Agency – Christian Dior',
        'categories': ['Branding', 'Print'],
        'position': [0],
        'thumbnail': './media/thumbs/dior.jpg',
        'images': ['./media/Dior/DiorWrap.jpg'],
        'description': 'iPad and online campaign in the Canberra Times in September and October 2013 iPad full page ad in September received 28,133 impressions, 192 clicks and a click through rate of 0.682%. iPad full page ad in October generated 12,800 impressions, 77 clicks and a click through rate of 0.602%. Homepage MREC &amp; guttering on Canberratimes.com.au tracked really well with a click through rate of 0.38% compared to an industry average of 0.02%. Revenue generated: $10,000 Results: Successful iPad and online campaign with incredibly high response rates.'
    },
    {
        'name': 'mastercard',
        'title': 'Working with Agency – Mastercard',
        'categories': ['Branding', 'Print'],
        'position': [0, 1, 1],
        'thumbnail': './media/thumbs/mastercard.jpg',
        'images': ['./media/Mastercard/mastercardWrap.jpg', './media/Mastercard/stunt1.jpg', './media/Mastercard/stunt2.jpg'],
        'description': 'iPad and online campaign in the Canberra Times in September and October 2013 iPad full page ad in September received 28,133 impressions, 192 clicks and a click through rate of 0.682%. iPad full page ad in October generated 12,800 impressions, 77 clicks and a click through rate of 0.602%. Homepage MREC &amp; guttering on Canberratimes.com.au tracked really well with a click through rate of 0.38% compared to an industry average of 0.02%. Revenue generated: $10,000 Results: Successful iPad and online campaign with incredibly high response rates.'
    },
    {
        'name': 'porters',
        'title': 'Working with Direct Client – GoCatch',
        'categories': ['Direct Response', 'Print'],
        'position': [0, 0],
        'thumbnail': './media/thumbs/porters.jpg',
        'images': ['./media/Porters Liquor/Porters catalogues 2.jpg', './media/Porters Liquor/Porters catalogues.jpg'],
        'description': 'iPad and online campaign in the Canberra Times in September and October 2013 iPad full page ad in September received 28,133 impressions, 192 clicks and a click through rate of 0.682%. iPad full page ad in October generated 12,800 impressions, 77 clicks and a click through rate of 0.602%. Homepage MREC &amp; guttering on Canberratimes.com.au tracked really well with a click through rate of 0.38% compared to an industry average of 0.02%. Revenue generated: $10,000 Results: Successful iPad and online campaign with incredibly high response rates.'
    },
    {
        'name': 'theiconic',
        'title': 'Working with Direct Client – The Iconic',
        'categories': ['Direct Response', 'Print'],
        'position': [0],
        'thumbnail': './media/thumbs/theiconic.jpg',
        'images': ['./media/The Iconic/Theiconic.jpg'],
        'description': 'iPad and online campaign in the Canberra Times in September and October 2013 iPad full page ad in September received 28,133 impressions, 192 clicks and a click through rate of 0.682%. iPad full page ad in October generated 12,800 impressions, 77 clicks and a click through rate of 0.602%. Homepage MREC &amp; guttering on Canberratimes.com.au tracked really well with a click through rate of 0.38% compared to an industry average of 0.02%. Revenue generated: $10,000 Results: Successful iPad and online campaign with incredibly high response rates.'
    },
    {
        'name': 'ubank_wrap',
        'title': 'Working with Agency – UBank',
        'categories': ['Direct Response', 'Print'],
        'position': [0],
        'thumbnail': './media/thumbs/ubank_wrap.jpg',
        'images': ['./media/Ubank/Ubank wrap.jpg'],
        'description': 'iPad and online campaign in the Canberra Times in September and October 2013 iPad full page ad in September received 28,133 impressions, 192 clicks and a click through rate of 0.682%. iPad full page ad in October generated 12,800 impressions, 77 clicks and a click through rate of 0.602%. Homepage MREC &amp; guttering on Canberratimes.com.au tracked really well with a click through rate of 0.38% compared to an industry average of 0.02%. Revenue generated: $10,000 Results: Successful iPad and online campaign with incredibly high response rates.'
    },
    {
        'name': 'chambers_edm',
        'title': 'Working with Direct Client – Chambers Cellars',
        'categories': ['Digital'],
        'position': [0],
        'thumbnail': './media/thumbs/chambers_edm.jpg',
        'images': ['./media/Chambers Cellars/Chambers edm.jpg'],
        'description': 'iPad and online campaign in the Canberra Times in September and October 2013 iPad full page ad in September received 28,133 impressions, 192 clicks and a click through rate of 0.682%. iPad full page ad in October generated 12,800 impressions, 77 clicks and a click through rate of 0.602%. Homepage MREC &amp; guttering on Canberratimes.com.au tracked really well with a click through rate of 0.38% compared to an industry average of 0.02%. Revenue generated: $10,000 Results: Successful iPad and online campaign with incredibly high response rates.'
    },
    {
        'name': 'thinktank',
        'title': 'Proactivity - THINK TANK Initiative',
        'categories': ['Print'],
        'position': [0],
        'thumbnail': './media/thumbs/thinktank.jpg',
        'images': ['./media/ThinkTank/thinktank.jpg'],
        'description': 'iPad and online campaign in the Canberra Times in September and October 2013 iPad full page ad in September received 28,133 impressions, 192 clicks and a click through rate of 0.682%. iPad full page ad in October generated 12,800 impressions, 77 clicks and a click through rate of 0.602%. Homepage MREC &amp; guttering on Canberratimes.com.au tracked really well with a click through rate of 0.38% compared to an industry average of 0.02%. Revenue generated: $10,000 Results: Successful iPad and online campaign with incredibly high response rates.'
    },
    {
        'name': 'ubank_flyer',
        'title': 'Working with Agency – UBank',
        'categories': ['Print', 'Direct Response'],
        'position': [0, 0],
        'thumbnail': './media/thumbs/ubank_flyer.jpg',
        'images': ['/media/Ubank/Ubank flyer back.jpg', './media/Ubank/Ubank flyer front.jpg'],
        'description': 'iPad and online campaign in the Canberra Times in September and October 2013 iPad full page ad in September received 28,133 impressions, 192 clicks and a click through rate of 0.682%. iPad full page ad in October generated 12,800 impressions, 77 clicks and a click through rate of 0.602%. Homepage MREC &amp; guttering on Canberratimes.com.au tracked really well with a click through rate of 0.38% compared to an industry average of 0.02%. Revenue generated: $10,000 Results: Successful iPad and online campaign with incredibly high response rates.'
    },
    {
        'name': 'dnsw',
        'title': 'Working with Direct Client – Destination NSW',
        'categories': ['Print'],
        'position': [0, 0],
        'thumbnail': './media/thumbs/dnsw.jpg',
        'images': ['./media/Destination NSW/DSNW front.jpg', './media/Destination NSW/DSNW back.jpg'],
        'description': 'iPad and online campaign in the Canberra Times in September and October 2013 iPad full page ad in September received 28,133 impressions, 192 clicks and a click through rate of 0.682%. iPad full page ad in October generated 12,800 impressions, 77 clicks and a click through rate of 0.602%. Homepage MREC &amp; guttering on Canberratimes.com.au tracked really well with a click through rate of 0.38% compared to an industry average of 0.02%. Revenue generated: $10,000 Results: Successful iPad and online campaign with incredibly high response rates.'
    },
  ];
  
});