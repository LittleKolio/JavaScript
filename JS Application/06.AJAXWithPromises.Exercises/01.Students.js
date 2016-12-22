function reZult() {
    let appKey = 'kid_BJXTsSi-e';
    let appSecret = '447b8e7046f048039d95610c1b039390';

    let tokenBaisc = 'Basic ' + btoa('guest:guest');

    let urlUser = 'https://baas.kinvey.com/user/' + appKey;
    let urlApp = 'https://baas.kinvey.com/appdata/' + appKey + '/students';

    $('#addStu').click(postStudent);

    function getStudent() {
        $.ajax({
            method: 'GET',
            url: urlApp,
            headers: {
                'Authorization': tokenBaisc,
                'Content-Type': 'application/json',
            }
        })
            .then(displayResult)
            .catch(displayError);
    }
    getStudent();

    function displayResult(array) {
        $('td').parent().remove();
        array.sort((f, s) => {
            return f.ID - s.ID;
        });
        let students = $(document.createDocumentFragment());
        for (let el of array) {
            students.append($('<tr>')
                .append($('<td>', {text: el.ID}))
                .append($('<td>', {text: el.FirstName}))
                .append($('<td>', {text: el.LastName}))
                .append($('<td>', {text: el.FacultyNumber}))
                .append($('<td>', {text: el.Grade}))
            )
        }
        $('#results').append(students);
    }

    function postStudent() {
        let stu = {
            ID: Number($('#stuID').val()),
            FirstName: $('#stuFName').val(),
            LastName: $('#stuLName').val(),
            FacultyNumber: $('#stuFNumber').val(),
            Grade: Number($('#grade').val())
        };
        let gradeRegx = /^\d+$/g;

        if (stu.ID != '' &&
            stu.FirstName != '' &&
            stu.LastName != '' &&
            stu.FacultyNumber!= '' &&
            stu.Grade != '' &&
            gradeRegx.test(stu.Grade))
        {
            $.ajax({
                method: 'POST',
                url: urlApp,
                headers: {
                    'Authorization': tokenBaisc,
                    'Content-Type': 'application/json',
                },
                data: JSON.stringify(stu)
            })
                .then(getStudent)
                .then(clearFieldset)
                .catch(displayError);
        }
        clearFieldset();
    }

    function displayError(error) {
        let result = 'Error: ' + error.status + ' (' + error.statusText + ')';
        console.log(result);
    }

    function clearFieldset() {
        $('#stuID').val('');
        $('#stuFName').val('');
        $('#stuLName').val('');
        $('#stuFNumber').val('');
        $('#grade').val('');
    }
}