import PageNav from "../components/PageNav";
import { ChildrenWProps } from "../interfaces/ChildrenProps";

export default function PageBase({ children, src, alt, link }: ChildrenWProps) {
  return (
    <>
      <PageNav />
      <section className="flex items-center justify-center bg-surface">
        <div className="h-[calc(100vh-5rem)] 2xl:h-[calc(100vh-8rem)] flex items-center justify-evenly w-full 2xl:w-11/12 2xl:top-[8rem] top-[5rem] relative bg-surface">
          <div className="flex flex-col items-center justify-center">
            <img
              className="2xl:w-auto h-screen relative 2xl:h-[90%] w-screen object-cover object-[left_30%_top_0] 2xl:object-none 2xl:object-center"
              src={src}
              alt={alt}
            />
            <p className="text-sm w-full 2xl:w-auto bg-secondary-container 2xl:bg-transparent p-4 2xl:p-0 flex items-center justify-center gap-1">
              Image by <a href={link}> vectorjuice </a> on Freepik
            </p>
          </div>
          {children}
        </div>
      </section>
    </>
  );
}
