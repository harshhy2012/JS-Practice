/* jshint esversion: 8 */
const correctAns = ['B', 'B', 'B', 'B'];
const form = document.querySelector('.quiz-form');
const result = document.querySelector('.result');
let score = 0;
form.addEventListener('submit', e => {
    e.preventDefault();
    const userAns = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];
    //check ans
    userAns.forEach((answer, index) => {
        if(answer == correctAns[index]){
            score+=100/userAns.length;
        }
    });
    //console.log(score);
    //show results on page
    scrollTo(0,0);
    
    result.classList.remove('d-none');
    // setTimeout(() => {
    //     alert('hello');
    // }, 3000);
    let output=0;

    const timer = setInterval(() => {
        result.querySelector('span').textContent = `${output}%`;
        if(output === score){
            clearInterval(timer);
        } 
        output++;
    }, 10);


});

