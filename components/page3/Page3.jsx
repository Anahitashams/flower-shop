import React from 'react'

function Page3() {
    return (
        <>
            <div className='w-full h-[600px] bg-gray-100 flex flex-col mt-[50px]'>
                <h1 className='flex justify-center mt-[40px]'>محصولات فروش ویژه</h1>
                <div className="card bg-base-100 w-96 shadow-xl m-auto mt-[50px]">
                    <figure>
                        <img className='bg-cover bg-center'
                            src="../public/img/Flower-Basket-VIP-250x250.jpg.webp"
                            alt="Shoes" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            Shoes!
                            <div className="">NEW</div>
                        </h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-end">
                            <div className="badge badge-outline">Fashion</div>
                            <div className="badge badge-outline">Products</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Page3