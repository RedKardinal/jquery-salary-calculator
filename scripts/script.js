console.log('JS File');

let employeeArray = [
    {
        firstName: 'Harry',
        lastName: 'Nilsson',
        employeeID: '1941',
        employeeTitle: 'Song Writer',
        annualSalary: '$25'
    }
]; // end employeeArray

$( document ).ready( onReady );

function onReady() {
    console.log('Here is the onReady');
    $( '#submitBtn' ).on( 'click', handleSubmit);
    $( '.deleteRowItem').on( 'click', deleteRow);

    listOutEmployees();
} // end onReady


function handleSubmit() {
    console.log('Submitted');
    // Submission 
    let fNameValue = $( '#fName' ).val();
    let lNameValue = $( '#lName' ).val();
    let iDValue = $( '#iD' ).val();
    let titleValue = $( '#title' ).val();
    let aSalaryValue = $( '#aSalary' ).val();

    // new Object
    let newObject = {
        firstName: fNameValue,
        lastName: lNameValue,
        employeeID: iDValue,
        employeeTitle: titleValue,
        annualSalary: aSalaryValue
    }; // end newEmployee

    // push

    employeeArray.push(newObject);
    console.log(employeeArray);
    listOutEmployees();

    // clear values
    $( 'fName' ).val('');
    $( 'lName' ).val('');
    $( 'iD' ).val('');
    $( 'title' ).val('');
    $( 'aSalary' ).val('');

} // end handleSubmit

function listOutEmployees() {
    $( '#employeeData' ).empty();

    for ( person of employeeArray ) {
        console.log(person.firstName);
        
        let rowItem = $(
        `<tr>
        <td>${person.firstName}</td>
        <td>${person.lastName}</td>
        <td>${person.employeeID}</td>
        <td>${person.employeeTitle}</td>
        <td>${person.annualSalary}</td>
        <td><button class='deleteRowItem'>Delete</button></td>
        <tr>`
        );
        
        rowItem.data(person.firstName, person.lastName, person.employeeID, person.employeeTitle, person.annualSalary);

        $( '#employeeTable' ).append( rowItem);
        employeeArray = [];

    }
} // end listEmployees

function deleteRow() {
    console.log('clicked delete button!');
    $( this ).remove();
}

