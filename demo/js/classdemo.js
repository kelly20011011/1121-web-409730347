function showdemo (week){
    const p = document.querySelector('.show-classdemo');
    console.log('showdemo',p);
    switch(week){
        case 1:
            p.innerHTML=`<iframe src='/demo/w01_47_intro/index.html'
            width="100%" height="100%" />`;
            break;
        case 3:
            p.innerHTML=`<iframe src='/demo/w03_47_card_demo/index.html'
            width="100%" height="100%" />`;
            break;

        case 4:
            p.innerHTML=`<iframe src='/demo/w04_47_card_demo/index.html'
            width="100%" height="100%" />`;
            break;
        case 5:
            p.innerHTML=`<iframe src='/demo/w05_47_blog/index.html'
            width="100%" height="100%" />`;
            break;
             
             
        case 6:
            p.innerHTML=`<iframe src='/demo/w06_47_blog/index.html'
            width="100%" height="100%" />`;
            break;
                
        case 7:
            p.innerHTML=`<iframe src='/demo/index.html'width="100%" height="100%" />`;
            break;  

        case 8:
        p.innerHTML=`<iframe src='/demo/w08_47_landing/index.html'width="100%" height="100%" />`;
        break;


        case 12:
        p.innerHTML=`<iframe src='/demo/w12_portfolio_47/index.html'width="100%" height="100%" />`;
        break;  

        case 13:
        p.innerHTML=`<iframe src='/demo/w13_portfolio_47/index.html'width="100%" height="100%" />`;
        break;

                
        case 14:
        p.innerHTML=`<iframe src='/demo/w14_mega_menue/index.html'width="100%" height="100%" />`;
        break;
            
        case 15:
        p.innerHTML=`<iframe src='/demo/w15_portfolio_47/index.html'width="100%" height="100%" />`;
        break;
                
        case 16:
        p.innerHTML=`<iframe src='/demo/w16_portfolio_47/index.html'width="100%" height="100%" />`;
        break;

    }

}