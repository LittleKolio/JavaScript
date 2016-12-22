/**
 * Created by LittleKolio on 10/6/2016.
 */
function employeeData(input) {
    let regexp = /^^([A-Z][a-zA-Z]*) - ([1-9]\d*) - ([a-zA-Z0-9 -]+)$/;
    for (let line of input) {
        let temp = regexp.exec(line);
        //console.log(regexp.test(line))
        if (temp)
            console.log(`Name: ${temp[1]}\nPosition: ${temp[3]}\nSalary: ${temp[2]}`)
    }
}

employeeData([
    'Isacc - 1000 - CEO',
    'Ivan - 500 - Employee',
    'Peter - 500 - Employee'
]);
/**
 Name: Isacc
 Position: CEO
 Salary: 1000
 Name: Ivan
 Position: Employee
 Salary: 500
 Name: Peter
 Position: Employee
 Salary: 500
 */