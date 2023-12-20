import pricing from "../assets/images/pricing.png";
import PageBase from "./PageBase";

export default function Pricing() {
  return (
    <>
      <PageBase
        src={pricing}
        alt="Couple in front the world."
        link="https://www.freepik.com/free-vector/low-cost-flights-abstract-concept-illustration_11669327.htm"
      >
        <div className="2xl:w-5/12 w-[90vw] 2xl:static absolute flex flex-col items-center justify-center 2xl:items-start">
          <span className="highlight-less-xl">
            <span className="relative">
              <h2 className="text-5xl text-on-surface font-bold mb-8 text-center 2xl:text-left relative">
                Simple pricing. Just $9/month.
              </h2>
            </span>
          </span>
          <span className="highlight-long-md py-4 px-2">
            <span className="relative">
              <p className="text-on-surface text-center 2xl:text-left w-[80vw] lg:w-[65vw] xl:w-[60vw] 2xl:w-auto">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus quis felis gravida, tincidunt sapien non, placerat mi.
                Ut mollis eros sit amet ligula efficitur pharetra. Aliquam erat
                volutpat. Ut vestibulum pharetra est at sollicitudin.
                Pellentesque tincidunt lorem nec nunc interdum, at ultrices erat
                malesuada. Quisque at dictum mi, at scelerisque augue.
                <br />
                Nullam eu elit id mi feugiat vulputate quis in mi. Sed nisl
                ligula, bibendum ornare aliquam at, ornare ac justo. Praesent in
                urna vel leo sollicitudin dignissim sed id lectus. Donec urna
                nisl, consequat aliquet pharetra in, laoreet ac dolor.
                Vestibulum sodales sem id lectus fringilla, ut cursus justo
                semper. Vestibulum non elit eget risus pretium cursus. Sed
                lobortis vel mauris eu rhoncus.
              </p>
            </span>
          </span>
        </div>
      </PageBase>
    </>
  );
}
