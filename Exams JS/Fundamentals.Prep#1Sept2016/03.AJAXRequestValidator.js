/**
 * Created by LittleKolio on 10/13/2016.
 */
function validation(input) {
    let hash = input.pop().split('');

    let methodPatt = /^Method: (GET|POST|PUT|DELETE)$/;
    let authorizationPatt = /^Credentials: (Bearer|Basic) ([a-zA-Z0-9]+)$/;
    let contentPatt = /^Content: ([a-zA-Z0-9.]+)$/;

    function validToken(hash, token) {
        for (let i = 0; i < hash.length; i += 2) {
            let match = token.match(new RegExp(hash[i + 1], 'g'));
            return ((match || []).length == hash[i]);
        }
    }

    for (let i = 0; i < input.length; i += 3) {
        let method = input[i].match(methodPatt);
        let authorization = input[i + 1].match(authorizationPatt);
        let content = contentPatt.test(input[i + 2]);

        let result = 'Response-Method:';

        if (method && authorization && content) {
            if (method[1] != 'GET' && authorization[1] != 'Bearer')
                result += `${method[1]}&Code:401`;
            else if (!validToken(hash, authorization[2]))
                result += `${method[1]}&Code:403`;
            else
                result += `${method[1]}&Code:200&Header:${authorization[2]}`;
        } else {
            result = `Response-Code:400`;
        }
        console.log(result);
    }
}
validation([
    'Method: GET',
    'Credentials: Bearer asd918721jsdbhjslkfqwkqiuwjoxXJIdahefJAB',
    'Content: users.asd.1782452.278asd',
    'Method: POST',
    'Credentials: Basic 028591u3jtndkgwndsdkfjwelfqkjwporjqebhas',
    'Content: Johnathan',
    '2q'
]);


validation([
    'Method: PUT',
    'Credentials: Bearer as9133jsdbhjslkfqwkqiuwjoxXJIdahefJAB',
    'Content: users.asd/1782452$278///**asd123',
    'Method: POST',
    'Credentials: Bearer 028591u3jtndkgwndskfjwelfqkjwporjqebhas',
    'Content: Johnathan',
    'Method: DELETE',
    'Credentials: Bearer 05366u3jtndkgwndssfsfgeryerrrrrryjihvx',
    'Content: This.is.a.sample.content',
    '2e5g'
]);
