import React, {forwardRef, useRef, useImperativeHandle} from "react";


const footer = forwardRef((props, ref)=>{
 
    return(
        <section  ref={ref} className="">
            <div className="w-full flex justify-center absolute  items-center flex-col iphone:mt-10   bg-[#FFACAC] rounded-t-2xl" >
                <div className="w-full max-w-[1200px] px-5 flex justify-between iphone:flex-col ipad-tablet:flex-row mt-5">
                    <div className="iphone:text-center ipad-tablet:text-left">
                        <div >
                            <i className="fa-solid fa-infinity   text-[2.5em] text-red-300 dark:text-red-400"></i>
                        </div>

                        <div className="">
                            <p className="font-Outfit font-bold   dark:text-slate-800 iphone:items-center iphone:w-full ipad-tablet:w-full text-slate-50 iphone:text-[2em] iphone:mt-2 desktop:text-[3em] desktop:max-w-[500px]">I would love to hear from you</p>
                            <p className="font-Rubik mt-2 text-slate-50 dark:text-slate-800 iphone:text-[1.1em] desktop:text-[1.1em]">If you liked my work. Feel free to reach me.</p>
                        </div>

                        <div className="">
                            <p className="text-slate-50 dark:text-slate-800 font-Rubik iphone:text-[1.1em] desktop:text-[1.1em] mt-3 ">Don't like the forms? Drop me a line via Email</p>
                            <a className="text-slate-50 dark:text-slate-800 font-[500] font-Rubik iphone:text-[1.2em] desktop:text-[1.2em]" href="mailto:faheemk793@gmail.com">FAHEEMK793@gmail.com</a>
                        </div>

                    </div>

                 
                        <div className="iphone:text-center ipad-tablet:text-left" >
                            <p className="opacity-0"><i className="fa-solid fa-infinity text-[2.5em] text-red-300"></i></p>
                            <p className="font-Outfit font-[700] text-slate-50 dark:text-slate-800 iphone:text-[2em] desktop:text-[3em] iphone:mt-2">Contact Me</p>


                            <p className="font-Outfit font-[500] mt-5 text-slate-50 dark:text-slate-800">Email: <a href="mailto:faheemk793@gmail.com" className="font-Rubik font-[400]">Faheemk793@gmail.com</a></p>
                            <p className="font-Outfit font-[500] mt-1 text-slate-50 dark:text-slate-800">Phone: <span className="font-Rubik font-[400]">+91 85880 47098</span></p>
                            <p className="font-Outfit font-[500] mt-1 text-slate-50 dark:text-slate-800 ipad-tablet:max-w-[70%]">Address: <span className="font-Rubik font-[400]">Govind puri, Kalka ji, New Delhi-110019</span></p>
                        </div>
                   

                    </div>

                    <div className="mt-3 text-[1.1em] font-Rubik text-slate-50 iphone:mb-2 dark:text-slate-800">
                    © Infinity 2023. All rights reserved
                    </div>
               </div>
               
        

        </section>
    )


})

export default footer