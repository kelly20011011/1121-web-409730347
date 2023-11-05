function showdemo (week){
    const p = document.querySelector('.show-classdemo');
    console.log('showdemo',p);
    switch(week){
        case 1:
            p.innerHTML=`<iframe src='./w01_47_intro/index.html'
            width="100%" height="100%" />`;
            break;
        case 6:
                p.innerHTML=`<iframe src='./w06_47_blog/index.html'
                width="100%" height="100%" />`;
                break;
                
        case 7:
            p.innerHTML=`<iframe src='./index.html'width="100%" height="100%" />`;
            break;
    }

}