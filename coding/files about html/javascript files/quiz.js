window.onload = function(){
    const doc1 = document.getElementById('good')
    const doc2 = document.getElementById('bad')
    const doc3 = document.getElementById('bad1')
    const doc4 = document.getElementById('bad2')
    doc1.addEventListener('click', goodclick)
    doc2.addEventListener('click', badclick)
    doc3.addEventListener('click', badclick)
    doc4.addEventListener('click', badclick)
}
function goodclick(){
    alert('V correct')
}
function badclick(){
    alert('X incorrect')
}