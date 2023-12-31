import config from "@config/config.json";
import Base from "@layouts/Baseof";
import { markdownify } from "@lib/utils/textConverter";
import Image from "next/image";
import Link from "next/link";
import { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
// import 'swiper/css/pagination';
import { getListPage } from "../lib/contentParser";
import { DeviceFrameset } from 'react-device-frameset'
import 'react-device-frameset/styles/marvel-devices.min.css'
import { DownloadButton } from "@layouts/components/DownloadButton";
import { Reivew } from "@layouts/components/Review";

const Home = ({ frontmatter }) => {
  const { banner, feature, services, workflow, call_to_action, reviews } = frontmatter;
  const { title } = config.site;

  return (
    <Base title={title}>
      {/* Banner */}
      <section className="section pb-[50px]">
        <div className="container">
          <div className="row text-center">
            <div className="mx-auto lg:col-10">
              <h1 className="font-primary font-bold">{banner.title}</h1>
              <p className="mt-4 lg:mx-40">{markdownify(banner.content)}</p>
              <DownloadButton />
              {/* <Image
                className="mx-auto mt-12 rounded-lg"
                src={banner.image}
                width={750}
                height={390}
                alt="banner image"
                priority
              /> */}
            </div>
          </div>

        </div>
      </section>

      {/* Features */}
      {/* <section className="section bg-theme-light">
        <div className="container">
          <div className="text-center">
            <h2>{markdownify(feature.title)}</h2>
          </div>
          <div className="mt-8 grid gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-3">
            {feature.features.map((item, i) => (
              <div
                className="feature-card rounded-xl bg-white p-5 pb-8 text-center"
                key={`feature-${i}`}
              >
                {item.icon && (
                  <Image
                    className="mx-auto"
                    src={item.icon}
                    width={30}
                    height={30}
                    alt=""
                  />
                )}
                <div className="mt-4">
                  {markdownify(item.name, "h3", "h5")}
                  <p className="mt-3">{item.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* services */}
      {services.map((service, index) => {
        const isOdd = index % 2 > 0;
        return (
          <section
            key={`service-${index}`}
            className={`section ${isOdd && "bg-theme-light"}`}
          >
            <div className="container">
              <div className="items-center gap-8 md:grid md:grid-cols-2">
                {/* Content */}
                <div
                  className={`mt-5 md:mt-0 p-2 max-w-[500px] ${!isOdd && "md:order-2"
                    }`}
                >
                  <h2 className="font-bold leading-[40px]">{service?.title}</h2>
                  <p className="mt-4 mb-2">{service?.content}</p>
                  {service.button.enable && (
                    <Link
                      href={service?.button.link}
                      className="cta-link inline-flex items-center text-primary"
                    >
                      {service?.button.label}
                      <Image
                        className="ml-1"
                        src="/images/arrow-right.svg"
                        width={18}
                        height={14}
                        alt="arrow"
                      />
                    </Link>
                  )}
                </div>

                {/* Image */}
                <div className={`${!isOdd && "md:order-1"}`}>
                  <div className={"scale-[80%] ml-[-31.25px]  my-[-82px]"}>
                    <DeviceFrameset device="iPhone X" color="gold" width={380} height={820}>
                      <div className={" bg-bg h-full"}>
                        <Image className={"pt-6"} src={service?.image} width={380} height={772} alt={service.title} />
                      </div>
                    </DeviceFrameset>
                  </div>

                </div>


              </div>
            </div>
          </section>
        );
      })}

      {/* workflow */}
      {/* <section className="section pb-0">
        <div className="mb-8 text-center">
          {markdownify(
            workflow.title,
            "h2",
            "mx-auto max-w-[400px] font-bold leading-[44px]"
          )}
          {markdownify(workflow.description, "p", "mt-3")}
        </div>
        <Image
          src={workflow.image}
          alt="workflow image"
          width={1920}
          height={296}
        />
      </section> */}

      <div className={"container text-center"}>
        <h2>Customer Reviews</h2>
      </div>
      <section className={"flex items-center justify-center my-8 container"}>
        <Swiper
          modules={[Autoplay]}
          // pagination={
          //   { clickable: true }
          // }
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          init={false}
        >
          {
            reviews.map((review, i) => <SwiperSlide key={i}>
              <Reivew user={review.user} title={review.title} comment={review.comment} />
            </SwiperSlide>)
          }
        </Swiper>


      </section>

      <section className={"container text-center pb-8"}>
        <h2>Start to use GYM</h2>
        <DownloadButton />
      </section>

      {/* Cta */}
      {/* <Cta cta={call_to_action} /> */}
    </Base>
  );
};

export const getStaticProps = async () => {
  const homePage = await getListPage("content/_index.md");
  const { frontmatter } = homePage;
  return {
    props: {
      frontmatter,
    },
  };
};

export default Home;
