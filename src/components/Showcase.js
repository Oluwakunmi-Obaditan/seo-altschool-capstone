import showcase from "../images/working-illustration.svg";

export default function Showcase() {
  return (
    <>
      <section className="py-10 lg:py-20">
        <div className="max-width grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-10 md:place-items-center">
          <article className="text-center md:text-left">
            <h1 className="text-5xl lg:text-6xl mb-5 font-bold text-slate-800">
              Brief is the new black
            </h1>
            <p className="lg:text-lg text-gray-950 mb-10">
              Scissor is a simple tool which makes URLs as short as possible.
              Scissor thinks it can disrupt the URL shortening industry and give
              the likes of bit.ly and ow.ly a run for their money within 2
              years.
            </p>
            <button className="btn-cta rounded-full">Get Started</button>
          </article>

          <article>
            <img src={showcase} alt="Shortly" />
          </article>
        </div>
      </section>
    </>
  );
}
