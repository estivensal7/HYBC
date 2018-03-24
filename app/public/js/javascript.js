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
});