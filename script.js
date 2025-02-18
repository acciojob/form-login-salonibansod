function getFormvalue() {
    event.preventDefault(); // Prevent form submission
    
    let firstName = document.forms["form1"]["fname"].value.trim();
    let lastName = document.forms["form1"]["lname"].value.trim();

    alert(`${firstName} ${lastName}`);
}
    //Write your code here

}
