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
const image = document.querySelector('.imageContainer>img');
const imageContainer = document.querySelector('.imageContainer');
const loader = document.querySelector('.loader');
body.style.background='#03d3fc29';
inputHandler.style.background='#03d3fc';
const colorPalette = document.querySelector('.colorPalette');
let prevTimer,newTimer;
for(let colors of colorValues){
    let el = document.createElement('div');
    el.style.background=colors.color;
    el.style.borderRadius='50%';
    el.style.width='20px';
    el.style.height='20px';
    el.style.cursor='pointer';
    el.style.backgroundClip='padding-box';
    el.style.border=`5px solid ${colors.color}`;
    el.onclick = function(){
        clearTimeout(prevTimer);
        if(imageContainer.children.length>2)
            imageContainer.removeChild(imageContainer.children[2]);
        const traverse = document.querySelector('.colorPalette');
        for(const trav of traverse.children){
            trav.style.border=`5px solid ${trav.style.backgroundColor}`;
        }
        image.style.display='none';
        loader.style.display='flex';
        loader.children[0].style.fill=colors.color;
        prevTimer = setTimeout(()=>{
            image.style.display='block';
            loader.style.display='none';
        },3000);
        image.src=colors.image;
        inputHandler.style.background = colors.color;
        body.style.background = colors.color+'29';
        el.style.border=`5px solid ${colors.color+'59'}`;
    }
    colorPalette.appendChild(el);
}
let form = document.querySelector('#logoContainer');
form.addEventListener('change', handleFiles, false);
function handleFiles(){
    const fileList = this.files;
    clearTimeout(newTimer);
    const image = document.querySelector('.imageContainer>img');
    const loader = document.querySelector('.loader');
    const companyName = document.createElement('img');
    const imageContainer = document.querySelector('.imageContainer');
    if(imageContainer.children.length>2)
        imageContainer.removeChild(imageContainer.children[2]);
    companyName.src = URL.createObjectURL(fileList[0]);
    companyName.onload = () =>{
        URL.revokeObjectURL(companyName.src);
    };
    companyName.classList.add('companyName');
    image.style.display='none';
    loader.children[0].style.fill=document.querySelector('#logo').style.background;
    loader.style.display='flex';
    newTimer = setTimeout(()=>{
        image.style.display='block';
        loader.style.display='none';
        imageContainer.appendChild(companyName);
    },3000);
}