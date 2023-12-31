import { markdownify } from "@lib/utils/textConverter";
import Image from "next/image";
import Link from "next/link";

function Cta({ cta }) {
  return (
    <section className="section px-4">
      <div className="section container rounded-xl shadow">
        <div className="row  mx-auto items-center justify-center">
          {/* <div className="md:col-5 lg:col-4">
            <Image
              className="w-full"
              src={cta?.image}
              alt="call to action image"
              width={325}
              height={206}
            />
          </div> */}
          <div className="mt-5 text-center md:mt-0 md:text-left md:col-6 lg:col-5">
            <h2>{cta?.title}</h2>
            <p className="mt-6">{markdownify(cta?.content)}</p>
            <a className={"inline-block mt-8"} href="https://apps.apple.com/us/app/strength-log-by-gym/id1661838502"><Image width={178} height={48} src="./images/download_from_apple_store.svg" alt="Download GYM on App Store" /></a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Cta;
