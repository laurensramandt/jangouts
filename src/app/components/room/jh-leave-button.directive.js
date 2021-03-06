/*
 * Copyright (C) 2015 SUSE Linux
 *
 * This software may be modified and distributed under the terms
 * of the MIT license.  See the LICENSE.txt file for details.
 */

(function () {
  'use strict';

  angular.module('janusHangouts')
    .directive('jhLeaveButton', jhLeaveButtonDirective);

  jhLeaveButtonDirective.$inject = ['$state', 'RoomService'];

  function jhLeaveButtonDirective($state, RoomService) {
    return {
      restrict: 'EA',
      templateUrl: 'app/components/room/jh-leave-button.html',
      scope: true,
      controller: JhLeaveButtonCtrl,
      controllerAs: 'vm'
    };

    function JhLeaveButtonCtrl() {
      /* jshint: validthis */
      var vm = this;

      vm.leave = function() {
        RoomService.setRoom(null);
        // stateChangeStart will take care of calling RoomService.leave()
        $state.go('signin');
      };
    }
  }
})();
