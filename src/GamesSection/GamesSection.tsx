import React from 'react'
import './GamesSection.scss'

const GamesSection = () => {
    const allElems: any = document.querySelectorAll(".allGamesLi")
    const onHover = (e: any) => {
        allElems.forEach((element: any, index:number) => {
            element.style.width = '100px';
            //console.log(element.childNodes[0])
            element.childNodes[0].classList.add('hidden')
           // element.children.classList.add('hidden')
           //element.childNodes.className = "infoBody hidden"
           if(index ===0){
               element.style.background = `url("https://i.postimg.cc/X7kRZsKC/ms.png")`
               element.style.backgroundRepeat = `no-repeat`
               element.style.backgroundSize = `cover`
           }else if(index ===1){
            element.style.background = `url("https://i.postimg.cc/90GvYpvs/de.png")`
            element.style.backgroundRepeat = `no-repeat`
            element.style.backgroundSize = `cover`
           }else if(index===2){
            element.style.background = `url("https://i.postimg.cc/tRWQbqYD/ingo.png")`
            element.style.backgroundRepeat = `no-repeat`
            element.style.backgroundSize = `cover`
           }else if (index===3){
            element.style.background = `url("https://i.postimg.cc/90GvYpvs/de.png")`
            element.style.backgroundRepeat = `no-repeat`
            element.style.backgroundSize = `cover`
           }
        })
        console.log(e.target.childNodes[0])
        e.target.childNodes[0].classList.remove('hidden')
        e.target.style.width = '100%';
        e.target.style.background = 'indigo';
    }
    return (
        <div className='GamesSection'>
            <ul className='allGamesUl'>
                <li onMouseEnter={(e: any) => onHover(e)} className='allGamesLi'>
                    <div className='infoBody hidden'>
                        <h3 className='header'> Mouse Sabre</h3>
                        <p className='description'>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?" </p>
                    </div>
                </li>
                <li onMouseEnter={(e: any) => onHover(e)} className='allGamesLi'>
                    <div className='infoBody hidden'>
                        <h3 className='header'> Dimension Eye</h3>
                        <p className='description'>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?" </p>

                    </div>
                </li>
                <li onMouseEnter={(e: any) => onHover(e)} className='allGamesLi'>
                    <div className='infoBody hidden'>
                        <h3 className='header'> Its gonna be ok</h3>
                        <p className='description'>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?" </p>

                    </div>
                </li>
                <li onMouseEnter={(e: any) => onHover(e)} className='allGamesLi'>
                    <div className='infoBody hidden'>
                        <h3 className='header'> Multi Arena</h3>
                        <p className='description'>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?" </p>
                    </div>
                </li>


            </ul>
        </div>
    )
}

export default GamesSection