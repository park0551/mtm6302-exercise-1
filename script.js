const $emoji = document.getElementById('emoji')
const emoji=[]

for(let i=127762; i<=127810; i++){
    emoji.push(`
        <div class='emoji'>
            <div class='hex'>&#${i}</div>
            <div class='dec'>${i}</div>
        </div>
    `)
}

$emoji.innerHTML +=emoji.join('')


