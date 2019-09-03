console.log('JS File');

$( document ).ready( onReady );

function onReady(){
    console.log('Here is the onReady');
    $( '#submitBtn' ).on( 'click', handleSubmit);

    calculateBudget();
    listOutEmployees();
} // end onReady

let employeeArray = [];

function handleSubmit() {
    console.log('Submitted');
    // Submission 
    let fNameValue = $( '#fName' ).val();
    let lNameValue = $( '#lName' ).val();
    let iDValue = $( '#iD' ).val();
    let titleValue = $( '#tItle' ).val();
    let aSalaryValue = $( '#aSalary' ).val();

    if ( fNameValue === '' || lNameValue === '' || iDValue === '') {
        alert('Please fill in all fields');
    } // end if

    else if (titleValue === '' || aSalaryValue === '') {
        alert('Please fill in all fields');
    } // wns else if

    else {

    // new Object
    let newObject = {
        firstName: fNameValue,
        lastName: lNameValue,
        employeeID: iDValue,
        employeeTitle: titleValue,
        annualSalary: aSalaryValue,
    }; // end newEmployee

    // push

    employeeArray.push(newObject);
    console.log(employeeArray);

    // clear values
    $('#fName').val('');
    $('#lName').val('');
    $('#iD').val('');
    $('#tItle').val('');
    $('#aSalary').val('');

    listOutEmployees();

    calculateBudget();
  
    } // blank fields

} // end handleSubmit

function listOutEmployees(){

    $('#employeeTable').empty();

    for (person of employeeArray){
        $('#employeeTableLabels').append(
            `<tr>
            <td>${person.firstName}</td>
            <td>${person.lastName}</td>
            <td>${person.employeeID}</td>
            <td>${person.employeeTitle}</td>
            <td>${person.annualSalary}</td>
            <td><center><button class='deleteBtn'>Delete</button></center></td>
            </tr>`
        );
    }// end for

    $('.deleteBtn').on( 'click', deleteEmployee );

}// end listOutEmployee

function calculateBudget (){

    let totalSalary = 0; 
    employeeArray.forEach( function(person) {
        totalSalary += Number(person.annualSalary);
    });

    // MONTHLY SALARY!!!
    const monthlySalary = Number(totalSalary / 12);
    const monthlySalaryAbove = Number(monthlySalary).toFixed(2);
    $('#remainingBudgetOut').empty();
    $('#remainingBudgetOut').append(monthlySalaryAbove);

    if (monthlySalaryAbove >= 20000 ) {
        alert('Time to fire someone!');
        $( '#budget' ).toggleClass('budgetError');
    } // end over budget

}// end calc budget

function deleteEmployee() {
    console.log('delete');
    $(this).parent().parent().parent().remove();

} // end delete