function postJSON(url, data, handleResults) {
    if (window.XMLHttpRequest) {
        const xhr = new XMLHttpRequest();
        xhr.open('POST', url);
        xhr.onreadystatechange = () => {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    const result =
                        JSON.parse(xhr.responseText);
                    handleResults(result);
                }
            }
        }
        xhr.send(JSON.stringify(data));
        console.log('sss')
    } else {
        console.log('No XMLHttpRequest Support')
    }

}

data = [1,2,3];
function callback(data) {
    console.log(data)
}

postJSON('httpbin.org', data, callback);
