'use strict';

angular.module('arterialeduApp')
    .config(function ($stateProvider) {
        $stateProvider
            .state('question', {
                parent: 'entity',
                url: '/question',
                data: {
                    roles: ['ROLE_ADMIN'],
                    pageTitle: 'arterialeduApp.question.home.title'
                },
                views: {
                    'content@': {
                        templateUrl: 'scripts/app/entities/question/questions.html',
                        controller: 'QuestionController'
                    }
                },
                resolve: {
                    translatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate, $translatePartialLoader) {
                        $translatePartialLoader.addPart('question');
                        return $translate.refresh();
                    }]
                }
            })
            .state('questionDetail', {
                parent: 'entity',
                url: '/question/:id',
                data: {
                    roles: ['ROLE_ADMIN'],
                    pageTitle: 'arterialeduApp.question.detail.title'
                },
                views: {
                    'content@': {
                        templateUrl: 'scripts/app/entities/question/question-detail.html',
                        controller: 'QuestionDetailController'
                    }
                },
                resolve: {
                    translatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate, $translatePartialLoader) {
                        $translatePartialLoader.addPart('question');
                        return $translate.refresh();
                    }]
                }
            });
    });
