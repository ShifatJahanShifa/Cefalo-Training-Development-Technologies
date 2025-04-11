const theme=document.querySelector('select')
theme.addEventListener('change',updateTheme)

function updateTheme()
{
    const themeValue=theme.value
    if(themeValue==='dark') 
    {
        doChange('black','white')
    }
    else 
    {
        doChange('white','black')
    }
}

function doChange(bgColor, txtColor)
{
    document.body.style.backgroundColor=bgColor;
    document.body.style.color=txtColor;
}