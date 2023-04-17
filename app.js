const inputHandler = document.querySelector('#logo');
const body = document.querySelector('body');
const colorValues = [
    {
        color:'#fc03db',
        image:'./assets/Pink umbrella.png'
    },
    {
        color:'#03d3fc',
        image:'./assets/Blue umbrella.png'
    },
    {
        color:'#fac60a',
        image:'./assets/Yello umbrella.png'
    }
];
// let activeColor = '#03d3fc';
const image = document.querySelector('.imageContainer>img');
body.style.background='#03d3fc29';
inputHandler.style.background='#03d3fc';
const colorPalette = document.querySelector('.colorPalette');
for(let colors of colorValues){
    let el = document.createElement('div');
    el.style.background=colors.color;
    el.style.borderRadius='50%';
    el.style.width='20px';
    el.style.height='20px';
    el.style.cursor='pointer';
    el.style.border=`5px solid ${colors.color}`;
    el.style.backgroundClip='padding-box';
    el.onclick = function(){
        const traverse = document.querySelector('.colorPalette');
        console.dir(traverse);
        for(const trav of traverse.children){
            console.log(trav);
            trav.style.border=`5px solid ${trav.style.background}`;
        }
        inputHandler.style.background = colors.color;
        body.style.background = colors.color+'29';
        image.src=colors.image;
        el.style.border=`5px solid ${colors.color+'59'}`;
        el.style.boxSizing='borderbox';
    }
    colorPalette.appendChild(el);
}
