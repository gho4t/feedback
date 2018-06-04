let owneremail = "alexemail004@gmail.com";

let case1 = "Your description was either lesser than 0 or greater than 2500! Please specify a description that's acceptable.";
let case2 = "Your header was either lesser than 0 or greater than 50! Please specify a topic that's acceptable.";

function processor() {

let collect = document.getElementById("process").value.trim();
let header = document.getElementById("topic").value;

if (collect.length <= 0 || collect.length >= 2500) {
return collecterror(case1);
}

if (header.length <= 0 || header.length >= 50) {
    return collecterror(case2);
    }

sendresult(collect, header)
}

function collecterror(error) {
document.getElementById("error").innerHTML = error;
}

function sendresult(text, header) {
window.location.href = `mailto:${owneremail}?subject=User put: ${header}&body=User put: ${text}`;
}
