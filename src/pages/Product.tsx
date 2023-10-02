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
                        <h2 className="text-5xl text-on-surface font-bold mb-8">About WorldWise.</h2>
                        <p className="text-on-surface mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo est 
                        dicta illum vero culpa cum quaerat architecto sapiente eius non
                        soluta, molestiae nihil laborum, placeat debitis, laboriosam at fuga
                        perspiciatis? Pellentesque vehicula, nunc in blandit accumsan, turpis 
                        orci commodo magna, non consectetur mi dui at enim. Proin sagittis, enim
                        eu pulvinar efficitur, nisi massa dignissim libero, id scelerisque tellus tellus eget lorem.</p>
                        <p> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis
                        doloribus libero sunt expedita ratione iusto, magni, id sapiente
                        sequi officiis et. Phasellus consequat sed ipsum sed iaculis. Sed vel efficitur lectus. 
                        Ut purus nulla, scelerisque vitae ipsum sit amet, placerat scelerisque arcu. Ut sit amet 
                        ullamcorper diam. Curabitur a convallis augue. Proin fringilla placerat diam eget fringilla.
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}