var portfolioApp = angular.module('portfolioApp', ['ui.bootstrap', 'ngRoute']);

portfolioApp.config(['$routeProvider', '$locationProvider',function($routeProvider, $locationProvider) {
    $routeProvider

        .when('/', {
            templateUrl : 'filter.html',
            controller  : 'categoryController'
        })

        .when('/Everything', {
            templateUrl : 'filter.html',
            controller  : 'categoryController'
        })

        .when('/Digital', {
            templateUrl : 'filter.html',
            controller  : 'categoryController'
        })

        .when('/Print', {
            templateUrl : 'filter.html',
            controller  : 'categoryController'
        })
        
        .when('/Branding', {
            templateUrl : 'filter.html',
            controller  : 'categoryController'
        })

        .when('/Direct Response', {
            templateUrl : 'filter.html',
            controller  : 'categoryController'
        })

        .when('/project/:project/', {
            templateUrl : 'projectDetails.html',
            controller  : 'projectController'
        })
        .otherwise({ redirectTo: '/' });     

}]);

// create the controller and inject Angular's $scope
portfolioApp.controller('categoryController', function($scope) {
    // create a message to display in our view
    $scope.message = 'Everything!';
});


portfolioApp.controller('projectController', function($scope, $log, $routeParams) {
    $scope.project = $routeParams.project;
});


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


var ContentCtrl = function ($scope, $modal, $log, $location, $routeParams) {
    
    $scope.go = function (path) {
      $location.path(path);
    };

    $scope.pages = { gstar: 'projecttemplates/gstar'};

    $scope.params = $routeParams;
    $log.info($scope.params);
};




portfolioApp.controller('projectListCtrl', function($scope) {

    $scope.selectedCategory = {name: 'Everything'};

    $scope.projects = [
    {
        'name': 'gstar',
        'title': 'Working with Direct Client – G-Star Raw',
        'categories': ['Branding', 'Digital'],
        'position': [0, 0],
        'thumbnail': './media/thumbs/gstar.jpg',
        'thumb_size': [219, 440],
        'images': ['./media/Gstar/Gstar gutter.jpg', './media/Gstar/Gstar mrec.jpg'],
    },
    {
        'name': 'bmw',
        'title': 'Working with Agency - BMW',
        'categories': ['Branding', 'Print'],
        'position': [0, 0, 0, 0, 0],
        'thumbnail': './media/thumbs/bmw.jpg',
        'thumb_size': [310, 440],
        'images': ['./media/BMW/BMW cover1.jpg', './media/BMW/BMW cover2.jpg', './media/BMW/BMW DPS.jpg', './media/BMW/BMWpage4.jpg', './media/BMW/BMW wrap.jpg'],
    },

    {
        'name': 'chambers',
        'title': 'Working with Direct Client – Chambers Cellars',
        'categories': ['Direct Response', 'Print'],
        'position': [0],
        'thumbnail': './media/thumbs/chambers.jpg',
        'thumb_size': [317, 440],
        'images': ['./media/Chambers Cellars/Chambers catalogues.jpg'],
    },

    {
        'name': 'chanel',
        'title': 'Working with Agency – Chanel',
        'categories': ['Branding', 'Print'],
        'position': [0],
        'thumbnail': './media/thumbs/chanel.jpg',
        'thumb_size': [324, 440],
        'images': ['./media/Chanel/ChanelWrap.jpg'],
    },
    {
        'name': 'porters',
        'title': 'Working with Direct Client – GoCatch',
        'categories': ['Direct Response', 'Print'],
        'position': [0, 0],
        'thumbnail': './media/thumbs/porters.jpg',
        'thumb_size': [324, 440],
        'images': ['./media/Porters Liquor/Porters catalogues 2.jpg', './media/Porters Liquor/Porters catalogues.jpg'],
    },

    {
        'name': 'dior',
        'title': 'Working with Agency – Christian Dior',
        'categories': ['Branding', 'Print'],
        'position': [0],
        'thumbnail': './media/thumbs/dior.jpg',
        'thumb_size': [308, 440],
        'images': ['./media/Dior/DiorWrap.jpg'],
    },
    {
        'name': 'mastercard',
        'title': 'Working with Agency – Mastercard',
        'categories': ['Branding', 'Print'],
        'position': [0, 1, 1],
        'thumbnail': './media/thumbs/mastercard.jpg',
        'thumb_size': [318, 440],
        'images': ['./media/Mastercard/mastercardWrap.jpg', './media/Mastercard/stunt1.jpg', './media/Mastercard/stunt2.jpg'],
    },
    {
        'name': 'uts',
        'title': 'Working with Direct Client – University of Technology Sydney (UTS)',
        'categories': ['Print', 'Branding', 'Digital'],
        'position': [0, 0],
        'thumbnail': './media/thumbs/uts.jpg',
        'thumb_size': [303, 440],
        'images': ['./media/UTS/UTS 1.jpg', './media/UTS/UTS 2.jpg'],
    },
    {
        'name': 'theiconic',
        'title': 'Working with Direct Client – The Iconic',
        'categories': ['Direct Response', 'Print'],
        'position': [0],
        'thumbnail': './media/thumbs/theiconic.jpg',
        'thumb_size': [316, 320],
        'images': ['./media/The Iconic/Theiconic.jpg'],
    },
    {
        'name': 'ubank_wrap',
        'title': 'Working with Agency – UBank',
        'categories': ['Direct Response', 'Print'],
        'position': [0],
        'thumbnail': './media/thumbs/ubank_wrap.jpg',
        'thumb_size': [322, 440],
        'images': ['./media/Ubank/Ubank wrap.jpg'],
    },
    {
        'name': 'chambers_edm',
        'title': 'Working with Direct Client – Chambers Cellars',
        'categories': ['Digital'],
        'position': [0],
        'thumbnail': './media/thumbs/chambers_edm.jpg',
        'thumb_size': [174, 600],
        'images': ['./media/Chambers Cellars/Chambers edm.jpg'],
    },
    {
        'name': 'thinktank',
        'title': 'Proactivity - THINK TANK Initiative',
        'categories': ['Print'],
        'position': [0],
        'thumbnail': './media/thumbs/thinktank.jpg',
        'thumb_size': [300, 300],
        'images': ['./media/ThinkTank/thinktank.jpg'],
    },
    {
        'name': 'ubank_flyer',
        'title': 'Working with Agency – UBank',
        'categories': ['Print', 'Direct Response'],
        'position': [0, 0],
        'thumbnail': './media/thumbs/ubank_flyer.jpg',
        'thumb_size': [309, 440],
        'images': ['/media/Ubank/Ubank flyer back.jpg', './media/Ubank/Ubank flyer front.jpg'],
    },
    {
        'name': 'dnsw',
        'title': 'Working with Direct Client – Destination NSW',
        'categories': ['Print'],
        'position': [0, 0],
        'thumbnail': './media/thumbs/dnsw.jpg',
        'thumb_size': [310, 440],
        'images': ['./media/Destination NSW/DSNW front.jpg', './media/Destination NSW/DSNW back.jpg'],
    },
        {
        'name': 'gocatch',
        'title': 'Working with Direct Client – GoCatch',
        'categories': ['Direct Response', 'Digital'],
        'position': [0, 0, 0],
        'thumbnail': './media/thumbs/gocatch.jpg',
        'thumb_size': [330, 440],
        'images': ['./media/Go Catch/gocatch ipad.jpg', './media/Go Catch/gocatch leader.jpg', './media/Go Catch/gocatch mrec.jpg'],
    },
  ];
  
});