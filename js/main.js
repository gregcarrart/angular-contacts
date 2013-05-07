function AddressBookCtrl($scope) {
	$scope.contacts = [
		{
		firstName:'Greg', 
		lastName:'Carr', 
		phoneNumber:'310.995.9288', 
		emailAddress:'greg@gcarrdesign.com'
		},
		{
		firstName:'Joe', 
		lastName:'Shmo', 
		phoneNumber:'310.123.4567', 
		emailAddress:'joe@shmo.com'
		}
	];

	$scope.addContact = function() {
		if ($scope.firstName && $scope.lastName && $scope.phoneNumber && $scope.emailAddress) {
			$scope.contacts.push({firstName:$scope.firstName, lastName:$scope.lastName, phoneNumber:$scope.phoneNumber, emailAddress:$scope.emailAddress});
			$scope.firstName = '';
			$scope.lastName = '';
			$scope.phoneNumber = '';
			$scope.emailAddress = '';
		} else {
			alert('Please enter all fields');
		} 
	}
};