/**
 * Created by LittleKolio on 10/30/2016.
 */
function personalBMI(name, age, weight, height) {
    let person = {
        name: name,
        personalInfo: {
            age: age,
            weight: Math.round(weight),
            height: Math.round(height),
        }
    };
    (function () {
        let bmi = weight / (height * height / 10e+3);
        person['BMI'] = Math.round(bmi);
        let status;
        switch (true) {
            case bmi < 18.5 : status = 'underweight'; break;
            case bmi < 25 : status = 'normal'; break;
            case bmi < 30 : status = 'overweight'; break;
            case bmi >= 30 : status = 'obese'; break;
        }
        person['status'] = status;
        if (status == 'obese')
            person['recommendation'] = 'admission required';
    })(weight, height);

    return person;
}

console.log(
    personalBMI('Peter', 29, 75, 182)
);

console.log(
    personalBMI('Honey Boo Boo', 9, 100, 137)
);