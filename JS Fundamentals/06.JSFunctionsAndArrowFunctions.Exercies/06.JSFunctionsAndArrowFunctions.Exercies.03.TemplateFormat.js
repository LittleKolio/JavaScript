/**
 * Created by LittleKolio on 10/3/2016.
 */
function template(input) {
    let fileXML = '<?xml version="1.0" encoding="UTF-8"?>\n<quiz>\n';
    for (let i = 0; i < input.length; i += 2) {
        fileXML += `  <question>\n    ${input[i]}\n  </question>\n`;
        fileXML += `  <answer>\n    ${input[i + 1]}\n  </answer>\n`;
    }
    fileXML += '</quiz>';
    console.log(fileXML);
}

template([
    "Dry ice is a frozen form of which gas?",
    "Carbon Dioxide",
    "What is the brightest star in the night sky?",
    "Sirius"
]);
/**
<?xml version="1.0" encoding="UTF-8"?>
<quiz>
    <question>
        Dry ice is a frozen form of which gas?
    </question>
    <answer>
        Carbon Dioxide
    </answer>
    <question>
        What is the brightest star in the night sky?
    </question>
    <answer>
        Sirius
    </answer>
</quiz>
 */


template([
    "Who was the forty-second president of the U.S.A.?",
    "William Jefferson Clinton"
]);
/**
<?xml version="1.0" encoding="UTF-8"?>
<quiz>
    <question>
        Who was the forty-second president of the U.S.A.?
    </question>
    <answer>
        William Jefferson Clinton
    </answer>
</quiz>
 */