export const addData = async () => {

  const req = await fetch(`http://localhost/sysopy-handbook/api/addQuestion.php`, {
method: 'POST',
headers: {
'Content-Type': 'application/json'
},
body: JSON.stringify(text.value)
});
const res = await req.json();

console.log(res);


}