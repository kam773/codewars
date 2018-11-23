function aspectRatio(x,y){
    let Xres = Math.ceil(y * 16/9);
    let Yres = y;
    let arr = [Xres, Yres];
    return arr;
}