app.controller('MainController', ['$scope', function ($scope) {
    $scope.showSlides = function (n) {
        var i;
        var slides = document.getElementsByClassName("myQuotes");
        if (n > slides.length) {
            slideIndex = 1
        }
        if (n < 1) {
            slideIndex = slides.length
        }
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slides[slideIndex - 1].style.display = "block";
    };

    var slideIndex = 1;
    $scope.showSlides(slideIndex);

    $scope.plusSlides = function (n) {
        $scope.showSlides(slideIndex += n);
    };

    $scope.plusProductSlides = function (n) {
        $scope.showSlides(slideIndex += n);
    };

    $scope.currentSlide = function (n) {
        $scope.showSlides(slideIndex = n);
    };

    $scope.portfolioMenu = true;

    $scope.toggleActive = function (menu) {
        $scope.homeMenu = false;
        $scope.portfolioMenu = false;
        $scope.blogMenu = false;
        $scope.pagesMenu = false;
        $scope.featuresMenu = false;
        $scope.megaMenu = false;
        $scope.contactMenu = false;

        $scope[menu] = true;
    };

    $scope.toggleSearch = function () {
        $scope.searchFunctionOff = !$scope.searchFunctionOff;
    };

    $scope.toggleResponsiveBlind = function () {
        $scope.responsiveOn = !$scope.responsiveOn;
    };

    $scope.toggleCustomizeBlind = function () {
        $scope.customizeOn = !$scope.customizeOn;
    };

    $scope.toggleSupportBlind = function () {
        $scope.supportOn = !$scope.supportOn;
    };

    $scope.toggleAllWorks = function () {
        $scope.allWorksOn = !$scope.allWorksOn;
    };

    $scope.occupation = ['Doctor', 'Engineer', 'Teacher', 'Developer'];

    $scope.formName = '';
    $scope.formEmail = '';
    $scope.selectedOption = '';
    $scope.formContact = '';
    $scope.formMessage = '';
    $scope.triggerMailto = function () {
        window.location.href = "mailto:khaidir.azman83@gmail.com?subject=Register%20Your%20Interest&body=Name:%20" + $scope.formName
            + "%0D%0AEmail:%20" + $scope.formEmail + "%0D%0AOccupation:%20" + $scope.selectedOption + "%0D%0AContact%20No:%20"
            + $scope.formContact + "%0D%0A%0D%0A" + $scope.formMessage;
    };
}]);
