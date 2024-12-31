import React from 'react'

function Page3() {
    return (
        <>
            <div className="w-[100%] h-[900px] bg-gray-100 dark:bg-gray-950 mt-[40px] flex flex-col">
                <h1 className=' decoration-emerald-950 flex justify-center mt-16 text-2xl'>فروش محصولات ویژه</h1>
                <div class="m-auto mt-[60px] max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <a href="#">
                        <img class="rounded-t-lg" src="../public/img/IMG_207777777777777777777777777-1.jpg.webp" alt="" />
                    </a>
                    <div class="p-5">
                        <a href="#">
                            <h5 class="mb-2 text-lg tracking-tight text-gray-900 dark:text-white text-center">گل های زیبا برای همه مناسبت ها</h5>
                        </a>
                        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 text-left">2.500 تومان</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Page3