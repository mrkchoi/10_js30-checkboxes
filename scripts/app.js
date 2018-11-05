
// Select DOM elements
let inbox = document.querySelector('.inbox');
let items = document.querySelectorAll('.item');
let checkboxes = Array.from(document.querySelectorAll('.item input[type="checkbox"]'));

// Add event listeners
checkboxes.forEach(function(box) {
    box.addEventListener('click', multiCheck);
});

// Function(s) to enable multi-checkbox
function multiCheck(e) {

    let checked = [];
    
    if(e.shiftKey === true && e.target.checked === false) {
        for(let box of checkboxes) {
            box.checked = false;
        }
    } else if(e.shiftKey === true) {
        for(let box of checkboxes) {
            if(box.checked === true) {
                checked.push(checkboxes.indexOf(box));
            }
        }
        for(let i = checked[0]; i <= checked[1]; i++) {
            checkboxes[i].checked = true;
        }
    }
}