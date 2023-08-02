import PageNav from "../components/PageNav"
import product from '../assets/images/product.png'

export default function Product() {
    return(
        <>
            <PageNav />
            <section className="flex items-center justify-center bg-surface">
                <div className="h-[calc(100vh-3rem)] flex items-center justify-center w-11/12 mt-12 gap-16">
                <div className="flex flex-col items-center justify-center">
                    <img className="h-4/6" src={product} alt="Elderly couple admiring some famous monuments."/>
                    <p className="text-sm"><a href="https://www.freepik.com/free-vector/retirement-travel-abstract-concept-vector-illustration-pension-traveling-retirement-savings-medical-care-cover-travel-expenses-elderly-people-insurance-trip-destination-abstract-metaphor_11663939.htm#query=travel&position=34&from_view=author">Image by vectorjuice</a> on Freepik</p>
                </div>
                    <div className="w-5/12">
                        <h2 className="text-5xl text-on-surface font-bold mb-8">About</h2>
                        <p className="text-on-surface">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus quis felis gravida, tincidunt sapien non, placerat mi. Ut mollis eros sit amet ligula efficitur pharetra. Aliquam erat volutpat. Ut vestibulum pharetra est at sollicitudin. Pellentesque tincidunt lorem nec nunc interdum, at ultrices erat malesuada. Quisque at dictum mi, at scelerisque augue. Nullam eu elit id mi feugiat vulputate quis in mi. Sed nisl ligula, bibendum ornare aliquam at, ornare ac justo. Praesent in urna vel leo sollicitudin dignissim sed id lectus. Donec urna nisl, consequat aliquet pharetra in, laoreet ac dolor. Vestibulum sodales sem id lectus fringilla, ut cursus justo semper. Vestibulum non elit eget risus pretium cursus. Sed lobortis vel mauris eu rhoncus.</p>
                    </div>
                </div>
            </section>
        </>
    )
}