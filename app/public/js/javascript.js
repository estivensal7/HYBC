$(document).ready(function() {
	console.log('ready!');


	submitContactMessage = (error) => {
		
		let submitButton = $("#contact-submit");

		(submitButton).on('click', function() {
		let firstName = $("#contact-first-name").val();
		let lastName = $("#contact-last-name").val();
		let email = $("#contact-email").val();
		let message = $("#contact-message").val();
		let	submittedMessage = {
				'first-name': firstName,
				'last-name': lastName,
				'email': email,
				'message': message
			}

			if (error) {
				throw error;
			} else {
				console.log(submittedMessage);
			}
		});
	}
	submitContactMessage();

	submitCustomerInformation = (error) => {

		let submitButton = $('#checkout-submit-btn');

		(submitButton).on('click', function() {
			let firstName = $("#checkout-first-name").val();
			let lastName = $("#checkout-last-name").val();
			let email = $("#checkout-email").val();
			let address = $("#checkout-address").val();
			let addressTwo = $("#checkout-address-two").val();
			let city = $("#checkout-city").val();
			let state = $("#checkout-state").val();
			let zipCode = $("#checkout-zip-code").val();
			let cardName = $("#name-on-card").val();
			let cardNumber = $("#card-number").val();
			let expirationMonth = $("#expiry-month").val();
			let expirationYear = $("#expiry-year").val();
			let cardCvv = $("#cvv-code").val();
			let cardType = $('input[name=gridRadios]:checked').val();

			let customerInformation = {
				'first name': firstName,
				'last name': lastName,
				'email': email,
				'address': address,
				'address-two': addressTwo,
				'city': city,
				'state': state,
				'zip-code': zipCode,
				'name on card': cardName,
				'card number': cardNumber,
				'expiration month': expirationMonth,
				'expiration year': expirationYear,
				'CVV code': cardCvv,
				'card type': cardType
			}

			console.log(customerInformation);
			alert('Thank you for your order!');
		})
	}

	submitCustomerInformation();
});

