import Navbar from "@/components/navbar/Navbar"
import Footer from "@/components/navbar/Footer"
import ProductUI from "@/components/products/ProductUI"
import style from "@/styles/Home.module.css"

function products() {
    //  useState  valu, fu

    return (
        <>
            <Navbar />
            <div className={`${style["d-flex"]} ${style["flex-column"]}` }>
                <div className={style["product-row"]}>
                    <ProductUI title="Big Mac (McDonald's)"
                            description="The Big Mac is a classic fast-food burger featuring two beef patties, special sauce, lettuce, cheese, pickles, and onions, served on a sesame seed bun." 
                            price="$4.39"
                            image="/assets/products/bigmac-removebg-preview.png"
                            width={100}
                            height={100}/>
                    <ProductUI title="Whopper (Burger King)"
                            description="The Whopper is a signature sandwich from Burger King, consisting of a flame-grilled beef patty, lettuce, tomato, mayo, ketchup, pickles, and onions, served on a sesame seed bun." 
                            price="$4.99"
                            image="/assets/products/whopper-removebg-preview.png"
                            width={100}
                            height={90}/>
                    <ProductUI title="KFC Original Recipe Chicken Bucket (KFC)"
                            description="KFC's Original Recipe Chicken is famous for its crispy and flavorful coating. You can order it by the piece or in a bucket with various size options." 
                            price="$20.99"
                            image="/assets/products/chicken-bucket-fried-removebg-preview.png"
                            width={100}
                            height={100}/>
                </div>
                <div className={`${style["product-row"]} ${style["pt-10"]}`}>
                <ProductUI title="Taco Bell Crunchy Taco (Taco Bell)"
                            description="Taco Bell's Crunchy Taco features a seasoned ground beef filling, shredded lettuce, and cheddar cheese, all wrapped in a crunchy taco shell." 
                            price="$1.29"
                            image="/assets/products/tacobell-removebg-preview.png"
                            width={100}
                            height={100}/>
                    <ProductUI title="Wendy's Baconator"
                            description="The Baconator is a hearty burger from Wendy's, featuring two beef patties, American cheese, six strips of bacon, ketchup, and mayo, served on a premium bun." 
                            price="$6.09"
                            image="/assets/products/wendys-removebg-preview.png"
                            width={100}
                            height={100}/>
                    <ProductUI title="Subway Footlong Turkey Breast Sub"
                            description=" Subway's Turkey Breast sub includes slices of turkey breast, fresh vegetables, and your choice of condiments, served on a 12-inch (footlong) roll." 
                            price="$7.99"
                            image="/assets/products/subway-removebg-preview.png"
                            width={100}
                            height={100}/>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default products