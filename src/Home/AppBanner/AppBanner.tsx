import Banner1 from '../../assests/banner4.png'

import googlePlay from '../../assests/googlePlay.png'
import sibApp from '../../assests/sibApp.png'

const BannerStyle:React.CSSProperties={
    backgroundImage:`url(${Banner1})`,
    backgroundPosition:"center",
    backgroundSize:"cover",
    backgroundRepeat:"no-repeat",
    width:"100%",
    height:"100%",

};





const AppBanner:React.FC=()=>{
    return(
        <>
        <div className="containeer my-14">
            <div  className='sm-min-h-[900px] sm:flex sm:justify-start sm:items-center p-20 rounded-xl z-20' style={BannerStyle}>

            
            <div className='space-y-6 max-w-xl mx-auto'>
<h1 className='text-2xl text-center sm:text-4xl font-bold text-white img-shadow'> DOWNLOAD APP</h1>
<p className='text-center sm:px-28 text-white hidden sm:inline-block' data-aos="fade-up" data-aos-dalay="300">
Fruits and vegetables are one of the four basic food groups that occupy a special place among the nutrients. These groups have a number of benefits that the consumer should recommend to maintain health. Similarly,
</p>
<div className='flex justify-center items-center gap-2'>
<a href='#'>
    <img className='max-w-[250px] sm:max-w-[120px] rounded md:max-w-[200px]' src={googlePlay} alt='googlePlay'/>
</a>
<a href='#'>
    <img className='max-w-[250px] sm:max-w-[120px] rounded md:max-w-[200px]' src={sibApp} alt='sibApp'/>
</a>

</div>
            </div>


        </div>
   
        </div>
        
        
        
        </>

    )

}

export default AppBanner;