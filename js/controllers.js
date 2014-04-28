var portfolioApp = angular.module('portfolioApp', ['ui.bootstrap']);

portfolioApp.filter('projectCategories', function(){
    return function(categories, category) {
        return categories.filter(function(project) {
            for (var i in project.categories) {
                
                if (category === 'Everything') return true;

                if (category === project.categories[i]) {
                    return true;
                }

            }
            return false;
        });
    };
});

portfolioApp.controller('filterListCtrl', ['$scope', function ($scope) {
    $scope.filters = ['Everything', 'Branding', 'Digital', 'Print', 'Direct Response'];

    $scope.updateCategory = function(filterName){
        $scope.$parent.selectedCategory = {name: filterName};
    }
}])

portfolioApp.controller('projectListCtrl', function($scope) {

    $scope.selectedCategory = {name: 'Everything'};

    $scope.projects = [
    {
        'index': 0,
        'name': 'gstar',
        'title': 'Working with Direct Client – G-Star Raw',
        'categories': ['Branding', 'Digital'],
        'position': [0, 0],
        'thumbnail': './media/thumbs/gstar.jpg',
        'thumb_size': [219, 440],
        'images': ['./media/Gstar/Gstar gutter.jpg', './media/Gstar/Gstar mrec.jpg'],
        'description': 'G-Star Raw Fall-Winter online campaign on TheVine.com.au website Homepage take over Homepage MREC &amp; half page ad Revenue generated: $15,000'
    },
    {
        'index': 1,
        'name': 'bmw',
        'title': 'Working with Agency - BMW',
        'categories': ['Branding', 'Print'],
        'position': [0, 0, 0, 0, 0],
        'thumbnail': './media/thumbs/bmw.jpg',
        'thumb_size': [310, 440],
        'images': ['./media/BMW/BMW cover1.jpg', './media/BMW/BMW cover2.jpg', './media/BMW/BMW DPS.jpg', './media/BMW/BMWpage4.jpg', './media/BMW/BMW wrap.jpg'],
        'description': 'iPad and online campaign in the Canberra Times in September and October 2013 iPad full page ad in September received 28,133 impressions, 192 clicks and a click through rate of 0.682%. iPad full page ad in October generated 12,800 impressions, 77 clicks and a click through rate of 0.602%. Homepage MREC &amp; guttering on Canberratimes.com.au tracked really well with a click through rate of 0.38% compared to an industry average of 0.02%. Revenue generated: $10,000 Results: Successful iPad and online campaign with incredibly high response rates.'
    },
    {
        'index': 2,
        'name': 'gocatch',
        'title': 'Working with Direct Client – GoCatch',
        'categories': ['Direct Response', 'Digital'],
        'position': [0, 0, 0],
        'thumbnail': './media/thumbs/gocatch.jpg',
        'thumb_size': [330, 440],
        'images': ['./media/Go Catch/gocatch ipad.jpg', './media/Go Catch/gocatch leader.jpg', './media/Go Catch/gocatch mrec.jpg'],
        'description': 'iPad and online campaign in the Canberra Times in September and October 2013 iPad full page ad in September received 28,133 impressions, 192 clicks and a click through rate of 0.682%. iPad full page ad in October generated 12,800 impressions, 77 clicks and a click through rate of 0.602%. Homepage MREC &amp; guttering on Canberratimes.com.au tracked really well with a click through rate of 0.38% compared to an industry average of 0.02%. Revenue generated: $10,000 Results: Successful iPad and online campaign with incredibly high response rates.'
    },
    {
        'index': 3,
        'name': 'chambers',
        'title': 'Working with Direct Client – Chambers Cellars',
        'categories': ['Direct Response', 'Print'],
        'position': [0],
        'thumbnail': './media/thumbs/chambers.jpg',
        'thumb_size': [317, 440],
        'images': ['./media/Chambers Cellars/Chambers catalogues.jpg'],
        'description': 'iPad and online campaign in the Canberra Times in September and October 2013 iPad full page ad in September received 28,133 impressions, 192 clicks and a click through rate of 0.682%. iPad full page ad in October generated 12,800 impressions, 77 clicks and a click through rate of 0.602%. Homepage MREC &amp; guttering on Canberratimes.com.au tracked really well with a click through rate of 0.38% compared to an industry average of 0.02%. Revenue generated: $10,000 Results: Successful iPad and online campaign with incredibly high response rates.'
    },
    {
        'index': 4,
        'name': 'chanel',
        'title': 'Working with Agency – Chanel',
        'categories': ['Branding', 'Print'],
        'position': [0],
        'thumbnail': './media/thumbs/chanel.jpg',
        'thumb_size': [324, 440],
        'images': ['./media/Chanel/ChanelWrap.jpg'],
        'description': 'iPad and online campaign in the Canberra Times in September and October 2013 iPad full page ad in September received 28,133 impressions, 192 clicks and a click through rate of 0.682%. iPad full page ad in October generated 12,800 impressions, 77 clicks and a click through rate of 0.602%. Homepage MREC &amp; guttering on Canberratimes.com.au tracked really well with a click through rate of 0.38% compared to an industry average of 0.02%. Revenue generated: $10,000 Results: Successful iPad and online campaign with incredibly high response rates.'
    },
    {
        'index': 5,
        'name': 'uts',
        'title': 'Working with Direct Client – University of Technology Sydney (UTS)',
        'categories': ['Print', 'Branding', 'Digital'],
        'position': [0, 0],
        'thumbnail': './media/thumbs/uts.jpg',
        'thumb_size': [303, 440],
        'images': ['./media/UTS/UTS 1.jpg', './media/UTS/UTS 2.jpg'],
        'description': 'iPad and online campaign in the Canberra Times in September and October 2013 iPad full page ad in September received 28,133 impressions, 192 clicks and a click through rate of 0.682%. iPad full page ad in October generated 12,800 impressions, 77 clicks and a click through rate of 0.602%. Homepage MREC &amp; guttering on Canberratimes.com.au tracked really well with a click through rate of 0.38% compared to an industry average of 0.02%. Revenue generated: $10,000 Results: Successful iPad and online campaign with incredibly high response rates.'
    },
    {
        'index': 6,
        'name': 'dior',
        'title': 'Working with Agency – Christian Dior',
        'categories': ['Branding', 'Print'],
        'position': [0],
        'thumbnail': './media/thumbs/dior.jpg',
        'thumb_size': [308, 440],
        'images': ['./media/Dior/DiorWrap.jpg'],
        'description': 'iPad and online campaign in the Canberra Times in September and October 2013 iPad full page ad in September received 28,133 impressions, 192 clicks and a click through rate of 0.682%. iPad full page ad in October generated 12,800 impressions, 77 clicks and a click through rate of 0.602%. Homepage MREC &amp; guttering on Canberratimes.com.au tracked really well with a click through rate of 0.38% compared to an industry average of 0.02%. Revenue generated: $10,000 Results: Successful iPad and online campaign with incredibly high response rates.'
    },
    {
        'index': 7,
        'name': 'mastercard',
        'title': 'Working with Agency – Mastercard',
        'categories': ['Branding', 'Print'],
        'position': [0, 1, 1],
        'thumbnail': './media/thumbs/mastercard.jpg',
        'thumb_size': [318, 440],
        'images': ['./media/Mastercard/mastercardWrap.jpg', './media/Mastercard/stunt1.jpg', './media/Mastercard/stunt2.jpg'],
        'description': 'iPad and online campaign in the Canberra Times in September and October 2013 iPad full page ad in September received 28,133 impressions, 192 clicks and a click through rate of 0.682%. iPad full page ad in October generated 12,800 impressions, 77 clicks and a click through rate of 0.602%. Homepage MREC &amp; guttering on Canberratimes.com.au tracked really well with a click through rate of 0.38% compared to an industry average of 0.02%. Revenue generated: $10,000 Results: Successful iPad and online campaign with incredibly high response rates.'
    },
    {
        'index': 8,
        'name': 'porters',
        'title': 'Working with Direct Client – GoCatch',
        'categories': ['Direct Response', 'Print'],
        'position': [0, 0],
        'thumbnail': './media/thumbs/porters.jpg',
        'thumb_size': [324, 440],
        'images': ['./media/Porters Liquor/Porters catalogues 2.jpg', './media/Porters Liquor/Porters catalogues.jpg'],
        'description': 'iPad and online campaign in the Canberra Times in September and October 2013 iPad full page ad in September received 28,133 impressions, 192 clicks and a click through rate of 0.682%. iPad full page ad in October generated 12,800 impressions, 77 clicks and a click through rate of 0.602%. Homepage MREC &amp; guttering on Canberratimes.com.au tracked really well with a click through rate of 0.38% compared to an industry average of 0.02%. Revenue generated: $10,000 Results: Successful iPad and online campaign with incredibly high response rates.'
    },
    {
        'index': 9,
        'name': 'theiconic',
        'title': 'Working with Direct Client – The Iconic',
        'categories': ['Direct Response', 'Print'],
        'position': [0],
        'thumbnail': './media/thumbs/theiconic.jpg',
        'thumb_size': [316, 320],
        'images': ['./media/The Iconic/Theiconic.jpg'],
        'description': 'iPad and online campaign in the Canberra Times in September and October 2013 iPad full page ad in September received 28,133 impressions, 192 clicks and a click through rate of 0.682%. iPad full page ad in October generated 12,800 impressions, 77 clicks and a click through rate of 0.602%. Homepage MREC &amp; guttering on Canberratimes.com.au tracked really well with a click through rate of 0.38% compared to an industry average of 0.02%. Revenue generated: $10,000 Results: Successful iPad and online campaign with incredibly high response rates.'
    },
    {
        'index': 10,
        'name': 'ubank_wrap',
        'title': 'Working with Agency – UBank',
        'categories': ['Direct Response', 'Print'],
        'position': [0],
        'thumbnail': './media/thumbs/ubank_wrap.jpg',
        'thumb_size': [322, 440],
        'images': ['./media/Ubank/Ubank wrap.jpg'],
        'description': 'iPad and online campaign in the Canberra Times in September and October 2013 iPad full page ad in September received 28,133 impressions, 192 clicks and a click through rate of 0.682%. iPad full page ad in October generated 12,800 impressions, 77 clicks and a click through rate of 0.602%. Homepage MREC &amp; guttering on Canberratimes.com.au tracked really well with a click through rate of 0.38% compared to an industry average of 0.02%. Revenue generated: $10,000 Results: Successful iPad and online campaign with incredibly high response rates.'
    },
    {
        'index': 11,
        'name': 'chambers_edm',
        'title': 'Working with Direct Client – Chambers Cellars',
        'categories': ['Digital'],
        'position': [0],
        'thumbnail': './media/thumbs/chambers_edm.jpg',
        'thumb_size': [174, 600],
        'images': ['./media/Chambers Cellars/Chambers edm.jpg'],
        'description': 'iPad and online campaign in the Canberra Times in September and October 2013 iPad full page ad in September received 28,133 impressions, 192 clicks and a click through rate of 0.682%. iPad full page ad in October generated 12,800 impressions, 77 clicks and a click through rate of 0.602%. Homepage MREC &amp; guttering on Canberratimes.com.au tracked really well with a click through rate of 0.38% compared to an industry average of 0.02%. Revenue generated: $10,000 Results: Successful iPad and online campaign with incredibly high response rates.'
    },
    {
        'index': 12,
        'name': 'thinktank',
        'title': 'Proactivity - THINK TANK Initiative',
        'categories': ['Print'],
        'position': [0],
        'thumbnail': './media/thumbs/thinktank.jpg',
        'thumb_size': [300, 300],
        'images': ['./media/ThinkTank/thinktank.jpg'],
        'description': 'iPad and online campaign in the Canberra Times in September and October 2013 iPad full page ad in September received 28,133 impressions, 192 clicks and a click through rate of 0.682%. iPad full page ad in October generated 12,800 impressions, 77 clicks and a click through rate of 0.602%. Homepage MREC &amp; guttering on Canberratimes.com.au tracked really well with a click through rate of 0.38% compared to an industry average of 0.02%. Revenue generated: $10,000 Results: Successful iPad and online campaign with incredibly high response rates.'
    },
    {
        'index': 13,
        'name': 'ubank_flyer',
        'title': 'Working with Agency – UBank',
        'categories': ['Print', 'Direct Response'],
        'position': [0, 0],
        'thumbnail': './media/thumbs/ubank_flyer.jpg',
        'thumb_size': [309, 440],
        'images': ['/media/Ubank/Ubank flyer back.jpg', './media/Ubank/Ubank flyer front.jpg'],
        'description': 'iPad and online campaign in the Canberra Times in September and October 2013 iPad full page ad in September received 28,133 impressions, 192 clicks and a click through rate of 0.682%. iPad full page ad in October generated 12,800 impressions, 77 clicks and a click through rate of 0.602%. Homepage MREC &amp; guttering on Canberratimes.com.au tracked really well with a click through rate of 0.38% compared to an industry average of 0.02%. Revenue generated: $10,000 Results: Successful iPad and online campaign with incredibly high response rates.'
    },
    {
        'index': 14,
        'name': 'dnsw',
        'title': 'Working with Direct Client – Destination NSW',
        'categories': ['Print'],
        'position': [0, 0],
        'thumbnail': './media/thumbs/dnsw.jpg',
        'thumb_size': [310, 440],
        'images': ['./media/Destination NSW/DSNW front.jpg', './media/Destination NSW/DSNW back.jpg'],
        'description': 'iPad and online campaign in the Canberra Times in September and October 2013 iPad full page ad in September received 28,133 impressions, 192 clicks and a click through rate of 0.682%. iPad full page ad in October generated 12,800 impressions, 77 clicks and a click through rate of 0.602%. Homepage MREC &amp; guttering on Canberratimes.com.au tracked really well with a click through rate of 0.38% compared to an industry average of 0.02%. Revenue generated: $10,000 Results: Successful iPad and online campaign with incredibly high response rates.'
    },
  ];
  
});