import PageNav from "../components/PageNav";
import pricing from '../assets/images/pricing.png'

export default function Pricing() {
    return(
        <>
            <PageNav />
            <section className="flex items-center justify-center bg-surface">
                <div className="h-[calc(100vh-3rem)] flex items-center justify-center w-11/12 mt-12 gap-16">
                <div className="flex flex-col items-center justify-center">
                    <img className="h-4/6" src={pricing} alt="Elderly couple admiring some famous monuments."/>
                    <p className="text-sm"><a href="https://www.freepik.com/free-vector/low-cost-flights-abstract-concept-illustration_11669327.htm?query=travel">Image by vectorjuice</a> on Freepik</p>
                </div>
                    <div className="w-5/12">
                        <h2 className="text-4xl text-on-surface font-bold mb-8">Simple pricing. Just $9/month.
                        </h2>
                        <p className="text-on-surface mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus quis felis gravida, 
                        tincidunt sapien non, placerat mi. Ut mollis eros sit amet ligula efficitur pharetra. Aliquam erat volutpat. 
                        Ut vestibulum pharetra est at sollicitudin. Pellentesque tincidunt lorem nec nunc interdum, at ultrices erat malesuada. 
                        Quisque at dictum mi, at scelerisque augue.</p>
                        <p>Nullam eu elit id mi feugiat vulputate quis in mi. Sed nisl ligula, bibendum ornare aliquam at, 
                        ornare ac justo. Praesent in urna vel leo sollicitudin dignissim sed id lectus. Donec urna nisl, consequat aliquet pharetra in, laoreet ac dolor. 
                        Vestibulum sodales sem id lectus fringilla, ut cursus justo semper. Vestibulum non elit eget risus pretium cursus. Sed lobortis vel mauris eu rhoncus.</p>
                    </div>
                </div>
            </section>
        </>
    )
}