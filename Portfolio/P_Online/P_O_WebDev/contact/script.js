// JavaScript Document

window.onload = function()
{
	var contactList = [];	
	var contactId = 0; // Global ID variable which will be assigned to each contact
	 
	/* Event Listeners & Handlers 
	Creating my event listeners and handlers for 
	the Add Contact button and all the table headers.
	When a particular element is clicked on, it calls
	the appropriate function. 
	*/
	
	var addContactButton = document.getElementById("addContactButton");
	addContactButton.addEventListener('click', addContact);
	
	var firstNameHeading = document.getElementById("firstNameHeading");
	firstNameHeading.addEventListener('click', sortByFirstName);
	
	var lastNameHeading = document.getElementById("lastNameHeading");
	lastNameHeading.addEventListener('click', sortByLastName);
	
	var dobHeading = document.getElementById("dobHeading");
	dobHeading.addEventListener('click', sortByDate);
	
	var phoneHeading = document.getElementById("phoneHeading");
	phoneHeading.addEventListener('click', sortByPhone);
	
	var emailHeading = document.getElementById("emailHeading");
	emailHeading.addEventListener('click', sortByEmail);
	
	var tableBody = document.getElementById("info");
	tableBody.addEventListener('click', deleteRow); 
	
	/* addContact()
	All the values inside the fields are linked to variables,
	and these variables are added to theDetails object. After
	this, theDetails are pushed into the contactList array and
	we have a contact added.
	
	A new row and six cells are dynamically created, which is what
	will be displayed in the table. The inner HTML of each cell is 
	set from the variables created earlier, these cells are then added
	to the row, which itself is added to the table.
	
	In the case of newDeleteCell, I am manually applying styles 
	to it as it doesn't exist until the addContact button is
	clicked.
	*/
	
	function addContact()
	{		
		var newFirstName = document.getElementById("firstNameField").value;
		var newLastName = document.getElementById("lastNameField").value;
		var newDob = document.getElementById("dobField").value;
		var newPhone = document.getElementById("phoneNumField").value;
		var newEmail = document.getElementById("emailField").value;		
		var theDetails = {
			firstName: newFirstName, 
			lastName: newLastName, 
			dateOfBirth: newDob, 
			phoneNumber: newPhone, 
			email: newEmail,
			contactId: contactId};	// This is where the contactId is assigned to the global variable
			
		contactList.push(theDetails);
		
		var newRow = document.createElement("tr");
		var newFirstNameCell = document.createElement("td");
		var newLastNameCell = document.createElement("td");
		var newDobCell = document.createElement("td");
		var newPhoneCell = document.createElement("td");
		var newEmailCell = document.createElement("td");
		var newDeleteCell = document.createElement("td");
		
		newFirstNameCell.innerHTML = newFirstName;
		newLastNameCell.innerHTML = newLastName;
		newDobCell.innerHTML = newDob;
		newPhoneCell.innerHTML = newPhone;
		newEmailCell.innerHTML = newEmail;
		
		newDeleteCell.innerHTML = "X";
		newDeleteCell.id =  contactId; // The delete button is also given the same ID to help with the delete function
		newDeleteCell.style.color = 'red';
		newDeleteCell.style.fontWeight = 'bold';
		newDeleteCell.style.cursor = 'pointer';
		
		newRow.appendChild(newFirstNameCell);
		newRow.appendChild(newLastNameCell);
		newRow.appendChild(newDobCell);
		newRow.appendChild(newPhoneCell);
		newRow.appendChild(newEmailCell);
		newRow.appendChild(newDeleteCell);
		tableBody.appendChild(newRow);
		
		contactId++; // Increments the ID so the next contact will have a different number
		
		for(i in contactList)
		{
			console.log(contactList[i]);
		}
	}
	
	/* sortByFirstName()
	The function inside this function, sortFirstNames(a, b)
	creates two variables (nameA, nameB) and maps them
	to the firstName property of a contact. Depending on
	whether one name is before the other or not in the
	alphabet they are sorted.
	
	This function is then passed into the sort method
	in order to sort the first names in ascending order
	inside the array list. The table is then regenerated 
	in that order.
	*/
	
	function sortByFirstName()
	{		
		function sortFirstNames(a, b)
		{
			var nameA = a.firstName.toLowerCase(); 
			var nameB = b.firstName.toLowerCase();
			
			if (nameA < nameB)
			{
				return -1;
			}
			
			if (nameA > nameB)
			{
				return 1;
			}
			
			else
			{
				return 0;
			}
		}
		
		contactList.sort(sortFirstNames);
		regenerateTable();
	}
	
	/* sortByLastName()
	Similar to sortByFirstName(), except it uses the
	lastName property of each contact to sort.
	
	sortByLastNames(a, b) is passed into the sort
	method and the array is sorted with last names
	in ascending order, and then the table is re-
	generated in that order.
	*/
	
	function sortByLastName()
	{		
		function sortLastNames(a, b)
		{
			var nameA = a.lastName.toLowerCase(); 
			var nameB = b.lastName.toLowerCase();
			
			if (nameA < nameB)
			{
				return -1;
			}
			
			if (nameA > nameB)
			{
				return 1;
			}
			
			else
			{
				return 0;
			}
		}
		
		contactList.sort(sortLastNames);
		regenerateTable();
	}
	
	/* sortByDate()
	sortDates(a, b) creates new Date variables from
	the dateOfBirth properties inside each contact,
	which is passed into the sort function to sort by
	date of birth. 
	
	Table is regerated with the dates sorted.
	*/
	
	function sortByDate()
	{
		function sortDates(a, b)
		{
			var dateA = new Date(a.dateOfBirth);
			var dateB = new Date(b.dateOfBirth);	
			return dateA - dateB;
		}
		
		contactList.sort(sortDates);
		regenerateTable();
	}
	
	/* sortByPhone()
	This is a number sorting function comparing 
	one phone number against another and 
	sorts the contactList in ascending order. 
	
	The table is regenerated in that order.
	*/
	
	function sortByPhone()
	{
		function phoneSorting(a, b)
		{
			return a.phoneNumber - b.phoneNumber;
		}
		
		contactList.sort(phoneSorting);
		regenerateTable();
	}
	
	/* sortByEmail()
	The same idea as sorting of first names and last names,
	comparing one email against another to sort in ascending
	order.  After sorting, the table is regenerated in the same order.
	*/ 
	
	function sortByEmail()
	{
		function sortEmails(a, b)
		{
			var mailA = a.email; 
			var mailB = b.email;
			
			if (mailA < mailB)
			{
				return -1;
			}
			
			if (mailA > mailB)
			{
				return 1;
			}
			
			else
			{
				return 0;
			}
		}
		
		contactList.sort(sortEmails);
		regenerateTable();
	}
	
	/* regenerateTable()
	Setting blank inner HTML will clear the table
	which will allow the list to be regenerated. 
	
	I loop through the list of contacts, and for 
	every contact in there brand new cells and rows
	are dynamically created similar to the addContact()
	function earlier (except with different var names).
	
	To get the inner HTML, it goes to the contact at index
	i and grabs whatever property specified. This function
	is used in all the sorting functions .
	*/
	
	function regenerateTable()
	{
		tableBody.innerHTML = "";
		for(i in contactList)
		{
			var regenRow = document.createElement("tr");
			var regenFirstName = document.createElement("td");
			var regenLastName = document.createElement("td");
			var regenDob = document.createElement("td");
			var regenPhone = document.createElement("td");
			var regenEmail = document.createElement("td");
			var regenDelete = document.createElement("td");
			
			regenFirstName.innerHTML = contactList[i].firstName;
			regenLastName.innerHTML = contactList[i].lastName;
			regenDob.innerHTML = contactList[i].dateOfBirth;
			regenPhone.innerHTML = contactList[i].phoneNumber;
			regenEmail.innerHTML = contactList[i].email;
			
			regenDelete.innerHTML = "X";
			regenDelete.id = contactList[i].contactId; // The regenerated row is given the matching ID from the contact in the array list
			regenDelete.style.color = 'red';
			regenDelete.style.fontWeight = 'bold';
			regenDelete.style.cursor = 'pointer';
			
			regenRow.appendChild(regenFirstName);
			regenRow.appendChild(regenLastName);
			regenRow.appendChild(regenDob);
			regenRow.appendChild(regenPhone);
			regenRow.appendChild(regenEmail);
			regenRow.appendChild(regenDelete);
			tableBody.appendChild(regenRow);
	
			console.log(contactList[i]);
		}
	}
	
	/* deleteRow(e)
	This function loops through all the existing contacts 
	and if the event target matches a contact with a contact
	ID then that particular contact is removed from the 
	array list. The table is then regenerated without that item. 
	*/
	
	function deleteRow(e)
	{
		for(i in contactList)
		{
			if(e.target.id == contactList[i].contactId) // If the row's ID matches a contact with the same ID
			{
				contactList.splice(i, 1); // Remove i from the array list
				regenerateTable();
			}
		}
	}
}